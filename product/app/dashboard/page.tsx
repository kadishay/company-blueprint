import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/');
    }

    const { data: invoices } = await supabase
        .from('invoices')
        .select('*, events(*)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    const getDaysSinceCreation = (createdAt: string) => {
        const now = new Date();
        const created = new Date(createdAt);
        return Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
    };

    const getStatus = (invoice: any) => {
        const days = getDaysSinceCreation(invoice.created_at);
        if (invoice.status !== 'active') return invoice.status;
        if (days >= 10) return 'legal_notice';
        if (days >= 5) return 'warning';
        return 'gentle_nudge';
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-white">
                        Active Recovery Campaigns
                    </h1>
                    <a
                        href="/wizard"
                        className="rounded-md bg-crimson-600 px-4 py-2 text-white hover:bg-crimson-500"
                    >
                        New Campaign
                    </a>
                </div>

                {!invoices || invoices.length === 0 ? (
                    <div className="rounded-lg bg-slate-800 p-12 text-center">
                        <p className="text-gray-400">No active campaigns yet.</p>
                        <a
                            href="/wizard"
                            className="mt-4 inline-block text-crimson-600 hover:text-crimson-500"
                        >
                            Start your first recovery →
                        </a>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {invoices.map((invoice) => {
                            const status = getStatus(invoice);
                            const days = getDaysSinceCreation(invoice.created_at);

                            return (
                                <div
                                    key={invoice.id}
                                    className="rounded-lg bg-slate-800 p-6"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-xl font-semibold text-white">
                                                    {invoice.client_name}
                                                </h3>
                                                <span className="text-2xl font-bold text-white">
                                                    ${invoice.amount}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-400">
                                                Invoice #{invoice.invoice_number || 'N/A'} • Due:{' '}
                                                {invoice.due_date}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-500">
                                                Mark as Paid
                                            </button>
                                            <button className="rounded-md bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-600">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="mt-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-1 items-center">
                                                <div
                                                    className={`flex h-10 w-10 items-center justify-center rounded-full ${days >= 0
                                                            ? 'bg-crimson-600 text-white'
                                                            : 'bg-slate-700 text-gray-400'
                                                        }`}
                                                >
                                                    ✓
                                                </div>
                                                <div
                                                    className={`h-1 flex-1 ${days >= 5 ? 'bg-crimson-600' : 'bg-slate-700'
                                                        }`}
                                                />
                                            </div>
                                            <div className="flex flex-1 items-center">
                                                <div
                                                    className={`flex h-10 w-10 items-center justify-center rounded-full ${days >= 5
                                                            ? 'bg-crimson-600 text-white'
                                                            : 'bg-slate-700 text-gray-400'
                                                        }`}
                                                >
                                                    {days >= 5 ? '✓' : '⏳'}
                                                </div>
                                                <div
                                                    className={`h-1 flex-1 ${days >= 10 ? 'bg-crimson-600' : 'bg-slate-700'
                                                        }`}
                                                />
                                            </div>
                                            <div className="flex items-center">
                                                <div
                                                    className={`flex h-10 w-10 items-center justify-center rounded-full ${days >= 10
                                                            ? 'bg-crimson-600 text-white'
                                                            : 'bg-slate-700 text-gray-400'
                                                        }`}
                                                >
                                                    {days >= 10 ? '✓' : '🔒'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between text-sm">
                                            <span
                                                className={
                                                    status === 'gentle_nudge'
                                                        ? 'text-white'
                                                        : 'text-gray-400'
                                                }
                                            >
                                                Gentle Nudge
                                            </span>
                                            <span
                                                className={
                                                    status === 'warning' ? 'text-white' : 'text-gray-400'
                                                }
                                            >
                                                Warning
                                            </span>
                                            <span
                                                className={
                                                    status === 'legal_notice'
                                                        ? 'text-white'
                                                        : 'text-gray-400'
                                                }
                                            >
                                                Legal Notice
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress percentage */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-2 flex-1 rounded-full bg-slate-700">
                                            <div
                                                className="h-2 rounded-full bg-crimson-600"
                                                style={{
                                                    width: `${Math.min((days / 10) * 100, 100)}%`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            {Math.min(Math.round((days / 10) * 100), 100)}% Complete
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
