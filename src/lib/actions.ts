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
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hi@hannigana.com',
      subject: 'New Newsletter Subscription',
      html: `<p>New subscription from: <strong>${validation.data.email}</strong></p>`
    });

    console.log("New Email Subscription:", validation.data.email);
    return { success: true, data: { subscribed: true } };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
