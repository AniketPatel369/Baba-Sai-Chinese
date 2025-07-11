"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";
import { DishCard } from "@/components/DishCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const menuCategories = Object.keys(menu);

export function MenuTabs() {
  return (
    <Tabs defaultValue={menuCategories[0]} className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-4 px-4 py-2">
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList className="inline-flex h-auto p-2 bg-background/80 border rounded-full">
            {menuCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2 text-base capitalize rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none">
                {category.toLowerCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {menuCategories.map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu[category].map((item) => (
              <DishCard key={item.name} item={item} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
