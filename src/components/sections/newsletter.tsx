"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { emailSubscriptionSchema } from "@/lib/schemas";
import { submitEmail } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type EmailFormValues = z.infer<typeof emailSubscriptionSchema>;

export function Newsletter() {
  const { toast } = useToast();
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: EmailFormValues) {
    try {
      const result = await submitEmail(data);
      if (result.success) {
        toast({
          title: "Subscribed!",
          description: "Thanks for joining.",
        });
        form.reset();
      } else {
        toast({
            variant: "destructive",
            title: "Oh no",
            description: result.error,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no",
        description: "Try again.",
      });
    }
  }

  return (
    <section className="flex flex-col gap-4 text-center pt-8">
      <h2 className="font-medium">
        Join -4 readers on future episodes & insight. No value, just spam.
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      placeholder="you@domain.com"
                      {...field}
                    />
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {form.formState.isSubmitting
                        ? "Joining..."
                        : "Join"}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
}
