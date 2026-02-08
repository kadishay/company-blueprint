'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { invoiceSchema, type InvoiceFormData } from '@/lib/validations/invoice';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const STEPS = ['Invoice Details', 'Client Info', 'Preview', 'Payment'];

export default function AvengerWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: zodResolver(invoiceSchema),
        defaultValues: {
            amount: 0,
            clientName: '',
            clientEmail: '',
            dueDate: '',
            invoiceNumber: '',
            invoiceLink: '',
        },
    });

    const formData = watch();

    const onSubmit = async (data: InvoiceFormData) => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Redirect to Stripe checkout
            console.log('Final submission:', data);
            // TODO: Create Stripe checkout session
        }
    };

    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 py-12">
            <div className="mx-auto max-w-3xl px-6">
                {/* Progress Indicator */}
                <div className="mb-12">
                    <div className="flex items-center justify-between">
                        {STEPS.map((step, index) => (
                            <div key={step} className="flex flex-1 items-center last:flex-none">
                                <div className="relative flex flex-col items-center">
                                    <div
                                        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${index <= currentStep
                                            ? 'bg-crimson-600 text-white'
                                            : 'bg-slate-700 text-gray-400'
                                            }`}
                                    >
                                        {index + 1}
                                    </div>
                                    <div
                                        className={`absolute top-12 w-32 text-center text-xs font-medium transition-colors ${index === currentStep ? 'text-white' : 'text-gray-400'
                                            }`}
                                    >
                                        {step}
                                    </div>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <div
                                        className={`h-1 w-full flex-1 transition-colors ${index < currentStep ? 'bg-crimson-600' : 'bg-slate-700'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <div className="rounded-lg bg-slate-800 p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Step 1: Invoice Details */}
                        {currentStep === 0 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white">
                                    Let's see what we're owed
                                </h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Invoice Amount ($)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register('amount')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                    />
                                    {errors.amount && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.amount.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        {...register('dueDate')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                    />
                                    {errors.dueDate && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.dueDate.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Invoice Number (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        {...register('invoiceNumber')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Client Info */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white">
                                    Who is ghosting you?
                                </h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Client Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('clientName')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                    />
                                    {errors.clientName && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.clientName.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Client Email
                                    </label>
                                    <input
                                        type="email"
                                        {...register('clientEmail')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                    />
                                    {errors.clientEmail && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.clientEmail.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        Invoice Link (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        {...register('invoiceLink')}
                                        className="mt-1 block w-full rounded-md bg-slate-700 px-4 py-2 text-white"
                                        placeholder="https://"
                                    />
                                    {errors.invoiceLink && (
                                        <p className="mt-1 text-sm text-red-400">
                                            {errors.invoiceLink.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Preview */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white">
                                    Here's what they'll receive
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-lg bg-slate-700 p-4">
                                        <h3 className="font-semibold text-crimson-600">
                                            Day 0: The Gentle Nudge
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-300">
                                            Subject: System Notification: Invoice #{formData.invoiceNumber || 'XXXXX'} Outstanding
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            "This is an automated reminder that Invoice #{formData.invoiceNumber || 'XXXXX'} for ${formData.amount || '0.00'} was due on {formData.dueDate}..."
                                        </p>
                                    </div>
                                    <div className="rounded-lg bg-slate-700 p-4">
                                        <h3 className="font-semibold text-crimson-600">
                                            Day 5: The Warning
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-300">
                                            Subject: Escalation Notice: Account Past Due
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            "This account has been flagged for review. To prevent forwarding to collections partners..."
                                        </p>
                                    </div>
                                    <div className="rounded-lg bg-slate-700 p-4">
                                        <h3 className="font-semibold text-crimson-600">
                                            Day 10: The Legal Threat
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-300">
                                            Subject: FINAL NOTICE: Intent to File for Arbitration
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            "Formal demand letter with intent to file..."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {currentStep === 3 && (
                            <div className="space-y-6 text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Ready to get paid?
                                </h2>
                                <div className="rounded-lg bg-slate-700 p-6">
                                    <p className="text-4xl font-bold text-white">$19</p>
                                    <p className="mt-2 text-gray-300">One-time payment</p>
                                    <p className="mt-4 text-sm text-gray-400">
                                        Recover ${formData.amount || '0.00'} from {formData.clientName || 'your client'}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-400">
                                    By proceeding, you agree to our{' '}
                                    <a
                                        href="/terms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-crimson-400 hover:underline"
                                    >
                                        Terms of Service
                                    </a>
                                    {' '}and{' '}
                                    <a
                                        href="/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-crimson-400 hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex justify-between">
                            <button
                                type="button"
                                onClick={goBack}
                                disabled={currentStep === 0}
                                className="rounded-md bg-slate-700 px-6 py-2 text-white disabled:opacity-50"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-crimson-600 px-6 py-2 text-white hover:bg-crimson-500"
                            >
                                {currentStep === STEPS.length - 1 ? 'Pay $19' : 'Next'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
