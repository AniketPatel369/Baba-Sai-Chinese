"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";
import { DishCard } from "@/components/DishCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const menuCategories = Object.keys(menu);

export function MenuTabs() {
  return (
    <Tabs defaultValue={menuCategories[0]} className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-4 px-4 py-2 flex justify-center">
        <ScrollArea className="w-full max-w-max whitespace-nowrap">
          <TabsList className="inline-flex h-auto p-1 bg-card border border-border/50 rounded-full">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="px-6 py-2 text-base capitalize rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                {category.toLowerCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {menuCategories.map((category) => (
        <TabsContent key={category} value={category} className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menu[category as keyof typeof menu].map((item) => (
              <DishCard key={item.name} item={item} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
