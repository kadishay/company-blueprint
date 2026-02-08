import { z } from 'zod';

export const invoiceSchema = z.object({
    clientName: z.string().min(2, 'Client name must be at least 2 characters'),
    clientEmail: z.string().email('Invalid email address'),
    amount: z.coerce.number().min(1, 'Amount must be greater than 0'),
    dueDate: z.string().min(1, 'Due date is required'),
    invoiceNumber: z.string().optional(),
    invoiceLink: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export type InvoiceFormData = z.infer<typeof invoiceSchema>;
