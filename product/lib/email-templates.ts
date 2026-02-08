export const emailTemplates = {
    day0: (data: {
        clientName: string;
        amount: number;
        invoiceNumber?: string;
        dueDate: string;
    }) => ({
        subject: `System Notification: Invoice #${data.invoiceNumber || 'XXXXX'} Outstanding`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>Dear ${data.clientName},</p>
        
        <p>This is an automated reminder that Invoice #${data.invoiceNumber || 'XXXXX'} for <strong>$${data.amount}</strong> was due on ${data.dueDate}.</p>
        
        <p>If payment has already been sent, please disregard this notice. Otherwise, please remit payment at your earliest convenience.</p>
        
        <p>If you have any questions regarding this invoice, please contact us directly.</p>
        
        <p>Best regards,<br/>
        InvoiceAvenger Compliance Team</p>
      </div>
    `,
    }),

    day5: (data: {
        clientName: string;
        amount: number;
        invoiceNumber?: string;
    }) => ({
        subject: 'Escalation Notice: Account Past Due',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>Dear ${data.clientName},</p>
        
        <p><strong>ACCOUNT FLAGGED FOR REVIEW</strong></p>
        
        <p>This account has been flagged for review by our Collections Department. Invoice #${data.invoiceNumber || 'XXXXX'} for <strong>$${data.amount}</strong> remains unpaid.</p>
        
        <p>To prevent forwarding to collections partners and potential credit impact, please remit payment immediately.</p>
        
        <p>Payment must be received within 5 business days to avoid further action.</p>
        
        <p>Collections Department<br/>
        InvoiceAvenger</p>
      </div>
    `,
    }),

    day10: (data: {
        clientName: string;
        amount: number;
        invoiceNumber?: string;
    }) => ({
        subject: 'FINAL NOTICE: Intent to File for Arbitration',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>RE: Invoice #${data.invoiceNumber || 'XXXXX'}</p>
        
        <p><strong>NOTICE OF INTENT TO FILE</strong></p>
        
        <p>This is formal notice that Invoice #${data.invoiceNumber || 'XXXXX'} for <strong>$${data.amount}</strong> remains unpaid despite previous attempts to collect.</p>
        
        <p>Unless payment is received within 72 hours, we will proceed with filing a formal demand for arbitration and may pursue all available legal remedies, including but not limited to:</p>
        
        <ul>
          <li>Filing in small claims court</li>
          <li>Reporting to credit bureaus</li>
          <li>Engaging third-party collection agencies</li>
        </ul>
        
        <p>This is your final opportunity to resolve this matter without legal action.</p>
        
        <p>Legal Department<br/>
        InvoiceAvenger</p>
      </div>
    `,
    }),
};
