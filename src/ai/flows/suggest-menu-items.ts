'use server';

/**
 * @fileOverview A menu item suggestion AI agent.
 *
 * - suggestMenuItems - A function that suggests menu items.
 * - SuggestMenuItemsInput - The input type for the suggestMenuItems function.
 * - SuggestMenuItemsOutput - The return type for the suggestMenuItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMenuItemsInputSchema = z.object({
  orderHistory: z
    .string()
    .describe('The past order history of the user.'),
  dietaryRestrictions: z.string().describe('The dietary restrictions of the user.'),
  popularDishes: z.string().describe('The current most popular dishes.'),
});
export type SuggestMenuItemsInput = z.infer<typeof SuggestMenuItemsInputSchema>;

const SuggestMenuItemsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested menu items.'),
});
export type SuggestMenuItemsOutput = z.infer<typeof SuggestMenuItemsOutputSchema>;

export async function suggestMenuItems(input: SuggestMenuItemsInput): Promise<SuggestMenuItemsOutput> {
  return suggestMenuItemsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMenuItemsPrompt',
  input: {schema: SuggestMenuItemsInputSchema},
  output: {schema: SuggestMenuItemsOutputSchema},
  prompt: `You are a food expert at BABA SAI CHINESE, recommending dishes to customers.

Based on the customer's order history, dietary restrictions, and the popularity of dishes, suggest menu items that the customer might enjoy.

Order History: {{{orderHistory}}}
Dietary Restrictions: {{{dietaryRestrictions}}}
Popular Dishes: {{{popularDishes}}}

Suggestions:`,
});

const suggestMenuItemsFlow = ai.defineFlow(
  {
    name: 'suggestMenuItemsFlow',
    inputSchema: SuggestMenuItemsInputSchema,
    outputSchema: SuggestMenuItemsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
