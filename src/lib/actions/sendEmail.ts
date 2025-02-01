'use server';

import { QuoteFormData } from '@/components/QuoteModal';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);
const companyEmail = process.env.COMPANY_EMAIL as string;

const quoteFormSchema = z.object({
  companyName: z.string().min(1).max(100),
  contactName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  commodityType: z.string().min(1).max(200),
  pickupLocation: z.string().regex(/^[A-Za-z\s]+,\s*[A-Z]{2}$/i, 'Must be in format: City, ST'),
  deliveryLocation: z.string().regex(/^[A-Za-z\s]+,\s*[A-Z]{2}$/i, 'Must be in format: City, ST'),
  transportDetails: z.string().max(2000).optional(),
});

export async function sendQuoteRequest(data: QuoteFormData) {
  try {
    const validatedData = quoteFormSchema.parse(data);

    const sanitizedData = {
      ...validatedData,
      companyName: validatedData.companyName.trim(),
      contactName: validatedData.contactName.trim(),
      email: validatedData.email.toLowerCase().trim(),
      phone: validatedData.phone.trim(),
      commodityType: validatedData.commodityType.trim(),
      pickupLocation: validatedData.pickupLocation.trim(),
      deliveryLocation: validatedData.deliveryLocation.trim(),
      transportDetails: validatedData.transportDetails?.trim(),
    };

    await resend.emails.send({
      from: `XPHUB Quote Request <${companyEmail}>`,
      to: [companyEmail],
      subject: 'New Quote Request',
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #B91C1C; border-bottom: 2px solid #B91C1C; padding-bottom: 10px;">New Quote Request</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #111; margin-top: 0;">Contact Information</h3>
              <div style="margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Company:</strong> ${sanitizedData.companyName}</p>
                <p style="margin: 5px 0;"><strong>Contact:</strong> ${sanitizedData.contactName}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${sanitizedData.email}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${sanitizedData.phone}</p>
              </div>

              <h3 style="color: #111; border-top: 1px solid #ddd; padding-top: 15px;">Transport Details</h3>
              <div style="margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Commodity:</strong> ${sanitizedData.commodityType}</p>
                <p style="margin: 5px 0;"><strong>Pickup:</strong> ${sanitizedData.pickupLocation}</p>
                <p style="margin: 5px 0;"><strong>Delivery:</strong> ${sanitizedData.deliveryLocation}</p>
              </div>

              <h3 style="color: #111; border-top: 1px solid #ddd; padding-top: 15px;">Additional Information</h3>
              <p style="margin: 5px 0;">${sanitizedData.transportDetails || 'No additional details provided'}</p>
            </div>

            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              This quote request was submitted through the XPHUB website.
            </p>
          </body>
        </html>
      `,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Invalid form data' };
    }
    return { success: false, error: 'Failed to send email' };
  }
}
