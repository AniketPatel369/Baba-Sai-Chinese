
"use client";

import { useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";
import { DishCard } from "@/components/DishCard";

const menuCategories = Object.keys(menu);

export function MenuTabs() {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const previousTabIndexRef = useRef<number>(0);

  const scrollCategoryToCenter = (tabElement: HTMLElement) => {
    if (!tabsListRef.current) return;
    const container = tabsListRef.current;

    const elementLeft = tabElement.offsetLeft;
    const elementWidth = tabElement.offsetWidth;
    const containerWidth = container.offsetWidth;

    const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2);

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  const handleTabChange = (value: string) => {
    const newIndex = menuCategories.indexOf(value);
    const previousIndex = previousTabIndexRef.current;

    if (newIndex !== -1) {
      if (tabsListRef.current) {
        const tab = tabsListRef.current.querySelector<HTMLButtonElement>(`button[data-value="${value}"]`);
        if (tab) {
            scrollCategoryToCenter(tab);
        }
      }
      previousTabIndexRef.current = newIndex;
    }
  };

  useEffect(() => {
    // Center the initial tab on load
    const initialTabValue = menuCategories[0];
    if (initialTabValue && tabsListRef.current) {
      const tab = tabsListRef.current.querySelector<HTMLButtonElement>(`button[data-value="${initialTabValue}"]`);
      if (tab) {
        // Use a timeout to ensure layout is stable before scrolling
        setTimeout(() => scrollCategoryToCenter(tab), 100);
      }
    }
  }, []);

  return (
    <div className="w-full">
      <p className="text-center text-sm text-muted-foreground mb-4">
        The images are only for reference.
      </p>
      <Tabs defaultValue={menuCategories[0]} className="w-full" onValueChange={handleTabChange}>
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm -mx-4 px-4 py-2 flex justify-center">
            <div ref={tabsListRef} className="w-full max-w-max whitespace-nowrap overflow-x-auto no-scrollbar">
              <TabsList className="inline-flex h-auto p-1 bg-card border border-border/50 rounded-full">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    data-value={category}
                    className="px-6 py-2 text-base capitalize rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
                  >
                    {category.toLowerCase()}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
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
    </div>
  );
}
