import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { Card } from "@/components/ui/card";

interface DishCardProps {
  item: MenuItem;
}

export function DishCard({ item }: DishCardProps) {
  const prices = [
    item.half && { label: "Half", price: item.half },
    item.full && { label: "Full", price: item.full },
  ].filter(Boolean) as { label: string; price: number }[];

  return (
    <Card className="flex justify-between items-center bg-card border-border/50 hover:border-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/20 rounded-xl p-4 overflow-hidden group">
      {/* Text Section */}
      <div className="flex-1 pr-4">
        <h3 className="text-lg font-headline text-primary tracking-wide">{item.name}</h3>
        {prices.length > 0 && (
            <div className="text-sm text-muted-foreground mt-2 space-y-1">
                {prices.map(({ label, price }) => (
                <div key={label} className="flex items-baseline">
                    <span className="w-12">{label}:</span>
                    <span className="font-bold text-base text-foreground">Rs {price}</span>
                </div>
                ))}
            </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative w-24 h-24 rounded-md overflow-hidden shadow-sm flex-shrink-0">
        <Image
          src="https://placehold.co/100x100.png"
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint="chinese food"
        />
      </div>
    </Card>
  );
}
