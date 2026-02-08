import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { Resend } from 'resend';
import { emailTemplates } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    try {
        const supabase = await createClient();

        // Get all active invoices
        const { data: invoices, error } = await supabase
            .from('invoices')
            .select('*')
            .eq('status', 'active');

        if (error) throw error;

        const now = new Date();
        let emailsSent = 0;

        for (const invoice of invoices || []) {
            const createdAt = new Date(invoice.created_at);
            const daysSinceCreation = Math.floor(
                (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
            );

            // Check if we need to send an email
            let template = null;
            let emailType = '';

            if (daysSinceCreation === 0) {
                template = emailTemplates.day0;
                emailType = 'day0';
            } else if (daysSinceCreation === 5) {
                template = emailTemplates.day5;
                emailType = 'day5';
            } else if (daysSinceCreation === 10) {
                template = emailTemplates.day10;
                emailType = 'day10';
            }

            if (template) {
                // Check if we already sent this email
                const { data: existingEvent } = await supabase
                    .from('events')
                    .select('*')
                    .eq('invoice_id', invoice.id)
                    .eq('type', 'email_sent')
                    .eq('metadata->>emailType', emailType)
                    .single();

                if (!existingEvent) {
                    const emailContent = template({
                        clientName: invoice.client_name,
                        amount: invoice.amount,
                        invoiceNumber: invoice.invoice_number,
                        dueDate: invoice.due_date,
                    });

                    // Send email
                    await resend.emails.send({
                        from: 'InvoiceAvenger <noreply@invoiceavenger.com>',
                        to: invoice.client_email,
                        subject: emailContent.subject,
                        html: emailContent.html,
                    });

                    // Log event
                    await supabase.from('events').insert({
                        invoice_id: invoice.id,
                        type: 'email_sent',
                        metadata: { emailType },
                    });

                    emailsSent++;
                }
            }
        }

        return NextResponse.json({ success: true, emailsSent });
    } catch (error) {
        console.error('Escalation cron error:', error);
        return NextResponse.json({ error: 'Failed to process escalations' }, { status: 500 });
    }
}
