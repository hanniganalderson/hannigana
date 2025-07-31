"use server";

import { z } from "zod";
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

  console.log("New Email Subscription:", validation.data.email);
  // Integrate with your email marketing service (e.g., Mailchimp, ConvertKit) here.
  
  return { success: true, data: { subscribed: true } };
}
