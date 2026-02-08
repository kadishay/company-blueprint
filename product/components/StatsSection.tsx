'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const stats = [
        {
            value: '$4.2M',
            label: 'Total Recovered',
            icon: '💰',
            color: 'text-green-400',
        },
        {
            value: '2,847',
            label: 'Happy Freelancers',
            icon: '👥',
            color: 'text-blue-400',
        },
        {
            value: '87%',
            label: 'Success Rate',
            icon: '📈',
            color: 'text-purple-400',
        },
        {
            value: '8 Days',
            label: 'Avg Recovery Time',
            icon: '⚡',
            color: 'text-orange-400',
        },
    ];

    return (
        <div ref={ref} className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Proven Results That Speak for Themselves
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Real data from real recoveries
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-center ring-1 ring-white/10"
                        >
                            <div className="mb-4 text-4xl">{stat.icon}</div>
                            <div className={`text-4xl font-bold ${stat.color}`}>
                                {stat.value}
                            </div>
                            <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Social Proof */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 ring-1 ring-white/10">
                        <div className="flex -space-x-2">
                            {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍💼', '👨‍💻'].map((emoji, i) => (
                                <div
                                    key={i}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 ring-2 ring-slate-900"
                                >
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-gray-300">
                            <span className="font-bold text-white">127 freelancers</span> recovered invoices this week
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
