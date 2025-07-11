"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { suggestMenuItems, SuggestMenuItemsOutput } from "@/ai/flows/suggest-menu-items";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  orderHistory: z.string().min(10, {
    message: "Please describe your order history in at least 10 characters.",
  }),
  dietaryRestrictions: z.string().default("None"),
  popularDishes: z.string().min(10, {
    message: "Please list some popular dishes (at least 10 characters).",
  }),
});

export function SuggestionTool() {
  const [suggestions, setSuggestions] = useState<SuggestMenuItemsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderHistory: "",
      dietaryRestrictions: "None",
      popularDishes: "Veg. Hakka Noodles, Paneer Chilli Dry, Veg. Manchurian",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestMenuItems(values);
      setSuggestions(result);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Sorry, we couldn't generate suggestions at this time. Please try again later.",
      })
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="my-16 md:my-24">
      <Accordion type="single" collapsible className="w-full border border-primary/20 rounded-lg p-4 bg-card shadow-sm">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" />
              <span>Need help deciding? Try our AI Suggestion Tool!</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <p className="text-muted-foreground mb-6">
              Tell us a bit about your preferences, and our AI-powered expert will recommend some dishes you might love from our menu.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="orderHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What have you enjoyed before? (e.g., "spicy noodles, crispy starters")</FormLabel>
                      <FormControl>
                        <Textarea placeholder="I usually order..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any dietary restrictions? (e.g., "no garlic, Jain food")</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Jain, less spicy, no onion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="popularDishes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Popular Dishes (we've pre-filled some favorites)</FormLabel>
                      <FormControl>
                        <Input readOnly {...field} className="bg-muted/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Get Suggestions
                </Button>
              </form>
            </Form>

            {suggestions && suggestions.suggestions.length > 0 && (
              <Card className="mt-8 border-primary/30">
                <CardHeader>
                  <CardTitle className="font-headline text-primary">Our Recommendations For You</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-foreground">
                    {suggestions.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-lg">{suggestion}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
