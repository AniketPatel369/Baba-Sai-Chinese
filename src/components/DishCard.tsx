import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MenuItem } from "@/data/menu";

interface DishCardProps {
  item: MenuItem;
}

export function DishCard({ item }: DishCardProps) {
  return (
    <Card className="flex flex-col h-full border-primary/20 hover:border-primary/50 transition-colors duration-300 bg-card shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-body font-bold text-foreground">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-end justify-end">
        {item.prices && item.prices.length > 0 && (
          <div className="text-lg font-bold text-primary">
            ₹{item.prices.join(" / ₹")}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
