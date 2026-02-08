import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InvoiceAvenger - Get Paid. Or Get Even.',
  description:
    'The automated bad cop for freelancers. Recover unpaid invoices without the awkward conversation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
