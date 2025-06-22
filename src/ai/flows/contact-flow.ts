'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles processing the contact form data.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;


export async function sendContactMessage(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log('Received contact form submission:', input);

    // In a real application, you would add your email-sending logic here.
    // For example, using a service like Nodemailer, SendGrid, or Resend.
    //
    // Example with a hypothetical email service:
    // try {
    //   await emailService.send({
    //     to: 'csyashp@gmail.com',
    //     from: 'portfolio-noreply@yourdomain.com',
    //     subject: `New message from ${input.name}`,
    //     text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
    //   });
    //   return { success: true, message: 'Message sent successfully!' };
    // } catch (error) {
    //   console.error('Failed to send email:', error);
    //   return { success: false, message: 'Failed to send message.' };
    // }

    // For now, we'll just simulate a success response.
    return { success: true, message: 'Message received and logged to console.' };
  }
);
