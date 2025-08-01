"use server";

import { z } from "zod";
import { Resend } from "resend";
import { supabase } from "./supabase";
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
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return { success: false, error: "Email service not configured. Please try again." };
    }
    
   
  
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
  

    // Store email in Supabase
    console.log("Attempting to store email in Supabase:", validation.data.email);
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables not set");
      return { success: false, error: "Database not configured. Please try again." };
    }
    
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { email: validation.data.email }
      ]);

    if (dbError) {
      console.error("Failed to store email in database:", dbError);
      console.error("Supabase error details:", JSON.stringify(dbError, null, 2));
      return { success: false, error: "Failed to store subscription. Please try again." };
    }
    
    console.log("Successfully stored email in Supabase");

    console.log("New Email Subscription:", validation.data.email);
    return { success: true, data: { subscribed: true } };
  } catch (error) {
    console.error("Failed to send email:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
