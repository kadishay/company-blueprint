'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import PricingSection from '@/components/PricingSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StatsSection from '@/components/StatsSection';

export default function HomePage() {
  const howItWorksRef = useRef(null);
  const isHowItWorksInView = useInView(howItWorksRef, { once: true });

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Urgency Banner */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-crimson-600 to-orange-600 py-2 text-center text-sm font-semibold text-white"
        >
          🔥 Limited Time: 40% OFF Launch Discount - Only 23 Spots Left!
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            {/* Logo/Brand */}
            <div className="mb-8 flex items-center justify-center gap-2">
              <svg
                className="h-10 w-10 text-crimson-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <span className="text-2xl font-bold">InvoiceAvenger</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Get Paid.{' '}
              <span className="text-crimson-600">Or Get Even.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The automated bad cop for freelancers. Recover unpaid invoices
              without the awkward conversation. We apply the pressure so you
              don't have to.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="/wizard"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-crimson-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-crimson-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-600"
              >
                Start Recovery - Only $19
              </motion.a>
            </div>

            {/* Enhanced Social Proof */}
            <div className="mt-8 space-y-2">
              <p className="text-sm text-gray-400">
                Join <span className="font-bold text-white">2,847 freelancers</span> who've recovered{' '}
                <span className="font-bold text-green-400">$4.2M</span> in unpaid invoices
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> No Win, No Fee
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Money-Back Guarantee
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★★★★★</span> 4.9/5 Rating
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-crimson-600 to-slate-800 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div ref={howItWorksRef} className="bg-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Three escalating emails. Ten days. Maximum pressure.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Day 0 - Blue Theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl ring-1 ring-white/10 transition hover:ring-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-blue-500/20 px-4 py-2 ring-1 ring-blue-500/30">
                    <span className="text-sm font-bold text-blue-400">
                      DAY 0
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">The Gentle Nudge</h3>
                  <p className="text-gray-400">
                    "System notification" reminder. Professional, not personal.
                    Looks like it came from accounting software.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-blue-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Polite Reminder</span>
                  </div>
                </div>
              </motion.div>

              {/* Day 5 - Orange Theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl ring-1 ring-white/10 transition hover:ring-orange-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-orange-500/20 px-4 py-2 ring-1 ring-orange-500/30">
                    <span className="text-sm font-bold text-orange-400">
                      DAY 5
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">The Warning</h3>
                  <p className="text-gray-400">
                    "Collections Department" escalation. Account flagged. Mentions
                    credit impact. Things are getting serious.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-orange-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Escalation Notice</span>
                  </div>
                </div>
              </motion.div>

              {/* Day 10 - Red Theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl ring-1 ring-white/10 transition hover:ring-crimson-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-crimson-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-crimson-500/20 px-4 py-2 ring-1 ring-crimson-500/30">
                    <span className="text-sm font-bold text-crimson-400">
                      DAY 10
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">The Legal Threat</h3>
                  <p className="text-gray-400">
                    "Notice of Intent to File." Formal demand letter. They pay to
                    make it stop.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-crimson-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span>Legal Action</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-crimson-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-crimson-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:support@invoiceavenger.com"
                className="text-gray-400 hover:text-crimson-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2026 InvoiceAvenger. We are not a law firm. This is a debt
              collection service.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
