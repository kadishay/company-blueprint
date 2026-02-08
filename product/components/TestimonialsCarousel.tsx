'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Freelance Designer',
            company: 'Chen Creative Studio',
            image: '👩‍💼',
            rating: 5,
            amount: '$12,500',
            days: '8 days',
            quote:
                "I was owed $12,500 for 3 months. InvoiceAvenger got me paid in 8 days. The automated escalation was perfect - professional but firm. Worth every penny.",
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Software Developer',
            company: 'Rodriguez Dev',
            image: '👨‍💻',
            rating: 5,
            amount: '$8,200',
            days: '5 days',
            quote:
                "Client ghosted me for 2 months on an $8,200 invoice. The 'Legal Threat' email did the trick - paid in full within 5 days. Highly recommend!",
        },
        {
            name: 'Emily Watson',
            role: 'Content Writer',
            company: 'Watson Words',
            image: '✍️',
            rating: 5,
            amount: '$3,400',
            days: '6 days',
            quote:
                "Best $19 I ever spent. Recovered $3,400 from a difficult client in less than a week. The emails looked so official, they paid immediately.",
        },
        {
            name: 'David Kim',
            role: 'Marketing Consultant',
            company: 'Kim Consulting Group',
            image: '📊',
            rating: 5,
            amount: '$22,000',
            days: '12 days',
            quote:
                "Had a $22K invoice sitting unpaid for 4 months. InvoiceAvenger's escalation process was exactly what I needed. Client paid after the Day 10 email.",
        },
        {
            name: 'Jessica Martinez',
            role: 'Graphic Designer',
            company: 'Martinez Design Co',
            image: '🎨',
            rating: 5,
            amount: '$5,800',
            days: '4 days',
            quote:
                "Skeptical at first, but wow! Got my $5,800 in just 4 days. The automated system saved me hours of awkward follow-ups. Game changer!",
        },
        {
            name: 'Alex Thompson',
            role: 'Web Developer',
            company: 'Thompson Tech',
            image: '💻',
            rating: 5,
            amount: '$15,300',
            days: '9 days',
            quote:
                "Recovered $15,300 that I'd written off as a loss. The legal language in the emails was perfect - serious enough to get action without burning bridges.",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Real Results from Real Freelancers
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Join thousands who've recovered their unpaid invoices
                    </p>
                </div>

                <div className="relative mx-auto mt-16 max-w-4xl">
                    {/* Main Testimonial Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl ring-1 ring-white/10">
                        {/* Stars */}
                        <div className="mb-4 flex gap-1">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="h-5 w-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl leading-8 text-gray-100">
                            "{currentTestimonial.quote}"
                        </blockquote>

                        {/* Stats */}
                        <div className="mt-6 flex gap-6">
                            <div className="rounded-lg bg-green-500/10 px-4 py-2 ring-1 ring-green-500/20">
                                <p className="text-sm text-gray-400">Recovered</p>
                                <p className="text-2xl font-bold text-green-400">
                                    {currentTestimonial.amount}
                                </p>
                            </div>
                            <div className="rounded-lg bg-blue-500/10 px-4 py-2 ring-1 ring-blue-500/20">
                                <p className="text-sm text-gray-400">Time to Payment</p>
                                <p className="text-2xl font-bold text-blue-400">
                                    {currentTestimonial.days}
                                </p>
                            </div>
                        </div>

                        {/* Author */}
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-2xl">
                                {currentTestimonial.image}
                            </div>
                            <div>
                                <p className="font-semibold">{currentTestimonial.name}</p>
                                <p className="text-sm text-gray-400">
                                    {currentTestimonial.role} • {currentTestimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-slate-700 p-2 text-white transition hover:bg-slate-600"
                        aria-label="Previous testimonial"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-slate-700 p-2 text-white transition hover:bg-slate-600"
                        aria-label="Next testimonial"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'w-8 bg-crimson-500'
                                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Social Proof Counter */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-400">
                        Join <span className="font-bold text-white">2,847 freelancers</span> who've recovered{' '}
                        <span className="font-bold text-green-400">$4.2M</span> in unpaid invoices
                    </p>
                </div>
            </div>
        </div>
    );
}
