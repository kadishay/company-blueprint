import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const { userId, invoiceData } = session.metadata!;
        const parsedInvoiceData = JSON.parse(invoiceData!);

        const supabase = await createClient();

        // Create invoice record
        const { data: invoice, error } = await supabase
            .from('invoices')
            .insert({
                user_id: userId,
                client_name: parsedInvoiceData.clientName,
                client_email: parsedInvoiceData.clientEmail,
                amount: parsedInvoiceData.amount,
                due_date: parsedInvoiceData.dueDate,
                invoice_number: parsedInvoiceData.invoiceNumber,
                invoice_link: parsedInvoiceData.invoiceLink,
                status: 'active',
            })
            .select()
            .single();

        if (error) {
            console.error('Failed to create invoice:', error);
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        // Log payment event
        await supabase.from('events').insert({
            invoice_id: invoice.id,
            type: 'payment_received',
            metadata: { session_id: session.id },
        });

        console.log('Invoice created:', invoice.id);
    }

    return NextResponse.json({ received: true });
}
