"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories, menuItems } from "@/data/menu";
import { DishCard } from "@/components/DishCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function MenuTabs() {
  return (
    <Tabs defaultValue={menuCategories[0]} className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-4 px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList className="inline-flex h-auto p-2">
            {menuCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2 text-base">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {menuCategories.map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <DishCard key={item.name} item={item} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
