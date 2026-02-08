import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { invoiceData } = body;

        const supabase = await createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Invoice Recovery Campaign',
                            description: `Recover $${invoiceData.amount} from ${invoiceData.clientName}`,
                        },
                        unit_amount: 1900, // $19.00
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/wizard`,
            metadata: {
                userId: user.id,
                invoiceData: JSON.stringify(invoiceData),
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
