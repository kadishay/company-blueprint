'use client';

import { useState, useEffect } from 'react';

export default function PricingSection() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const pricingTiers = [
        {
            name: 'Starter',
            price: '$19',
            originalPrice: '$32',
            description: 'Perfect for one-time recovery',
            features: [
                'Single invoice recovery',
                '3-stage email escalation',
                'Professional legal templates',
                'Email tracking & analytics',
                '7-day money-back guarantee',
            ],
            cta: 'Start Recovery',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$49',
            originalPrice: '$82',
            description: 'Best for active freelancers',
            features: [
                'Up to 10 active campaigns',
                'Priority email delivery',
                'Advanced analytics dashboard',
                'Custom email templates',
                'Phone support',
                'Unlimited invoice tracking',
            ],
            cta: 'Go Pro',
            popular: true,
            savings: 'Save $396/year',
        },
        {
            name: 'Business',
            price: '$99',
            originalPrice: '$165',
            description: 'For agencies & teams',
            features: [
                'Unlimited campaigns',
                'White-label emails',
                'Dedicated account manager',
                '24/7 priority support',
                'API access',
                'Custom integrations',
                'Team collaboration tools',
            ],
            cta: 'Scale Up',
            popular: false,
        },
    ];

    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Urgency Banner */}
                <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-crimson-600 to-orange-600 p-1">
                    <div className="rounded-xl bg-slate-900 px-6 py-4">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🔥</span>
                                <div>
                                    <p className="text-lg font-bold text-white">
                                        Limited Time: 40% OFF Launch Discount
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        Only 23 spots left at this price
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2">
                                <span className="text-sm text-gray-400">Ends in:</span>
                                <div className="flex gap-1">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold text-crimson-400">
                                            {String(timeLeft.hours).padStart(2, '0')}
                                        </span>
                                        <span className="text-xs text-gray-500">hrs</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-600">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold text-crimson-400">
                                            {String(timeLeft.minutes).padStart(2, '0')}
                                        </span>
                                        <span className="text-xs text-gray-500">min</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-600">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold text-crimson-400">
                                            {String(timeLeft.seconds).padStart(2, '0')}
                                        </span>
                                        <span className="text-xs text-gray-500">sec</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        No hidden fees. No percentage of recovery. Just one flat fee.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-8 ${tier.popular
                                    ? 'bg-gradient-to-br from-crimson-600/20 via-slate-800 to-slate-900 ring-2 ring-crimson-500'
                                    : 'bg-slate-800 ring-1 ring-white/10'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-crimson-600 to-orange-600 px-4 py-1 text-sm font-semibold text-white">
                                        ⭐ Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold">{tier.name}</h3>
                                <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold">{tier.price}</span>
                                    <span className="text-gray-400">/campaign</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-sm text-gray-500 line-through">
                                        {tier.originalPrice}
                                    </span>
                                    <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                                        Save 40%
                                    </span>
                                </div>
                                {tier.savings && (
                                    <p className="mt-1 text-sm font-semibold text-crimson-400">
                                        {tier.savings}
                                    </p>
                                )}
                            </div>

                            <ul className="mb-8 space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-crimson-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/wizard"
                                className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition ${tier.popular
                                        ? 'bg-crimson-600 text-white hover:bg-crimson-500'
                                        : 'bg-slate-700 text-white hover:bg-slate-600'
                                    }`}
                            >
                                {tier.cta}
                            </a>

                            {tier.popular && (
                                <p className="mt-4 text-center text-xs text-gray-400">
                                    🔒 Secure checkout • 💳 Cancel anytime
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>7-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span>Secure Payment Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>4.9/5 Average Rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
