"use client";

import { useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";
import { DishCard } from "@/components/DishCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const menuCategories = Object.keys(menu);

export function MenuTabs() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const centerTab = (tabValue: string) => {
    const scrollContainer = scrollAreaRef.current?.querySelector<HTMLDivElement>('[data-radix-scroll-area-viewport]');
    if (!scrollContainer) return;

    const tabElement = scrollContainer.querySelector<HTMLButtonElement>(`button[data-value="${tabValue}"]`);
    if (!tabElement) return;

    const elementLeft = tabElement.offsetLeft;
    const elementWidth = tabElement.offsetWidth;
    const containerWidth = scrollContainer.offsetWidth;

    const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2);

    scrollContainer.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });
  };
  
  const handleTabChange = (value: string) => {
    // A small delay can sometimes help ensure the DOM is ready for measurement, especially on initial load.
    setTimeout(() => centerTab(value), 50);
  };

  // Ensure the first tab is centered on initial load
  useEffect(() => {
    const firstCategory = menuCategories[0];
    if (firstCategory) {
      const timer = setTimeout(() => centerTab(firstCategory), 100);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs defaultValue={menuCategories[0]} className="w-full" onValueChange={handleTabChange}>
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-4 px-4 py-2 flex justify-center">
        <ScrollArea ref={scrollAreaRef} className="w-full max-w-max whitespace-nowrap">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menu[category as keyof typeof menu].map((item) => (
              <DishCard key={item.name} item={item} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
