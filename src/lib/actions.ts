"use server";

import { z } from "zod";
import { Resend } from "resend";
import { emailSubscriptionSchema } from "./schemas";

// Type for a standardized server action response
type ActionResponse<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: string;
};

// Email Subscription Action
type EmailInput = z.infer<typeof emailSubscriptionSchema>;

export async function submitEmail(
  data: EmailInput
): Promise<ActionResponse<{ subscribed: boolean }>> {
  const validation = emailSubscriptionSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, error: "Invalid email provided." };
  }

  try {
    const resend = new Resend('re_hV3qA8Y7_A1MxjVugWBMGV6CKWEhUHv2z');
    
    // Send notification email to you
    await resend.emails.send({
      from: 'Early Equity <onboarding@resend.dev>',
      to: 'hi@hannigana.com',
      subject: 'New Newsletter Subscription',
      html: `<p>New subscription from: <strong>${validation.data.email}</strong></p>`
    });

    // Send thank you email to the subscriber
    await resend.emails.send({
      from: 'Hannigan Alderson <hi@hannigana.com>',
      to: validation.data.email,
      subject: 'Thanks for subscribing!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p>Thanks for subscribing! You'll receive updates on future episodes and insights.</p>
          <p>Best,<br>Hannigan</p>
        </div>
      `
    });

    console.log("New Email Subscription:", validation.data.email);
    return { success: true, data: { subscribed: true } };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
