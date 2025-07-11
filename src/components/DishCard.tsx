import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MenuItem } from "@/data/menu";

interface DishCardProps {
  item: MenuItem;
}

export function DishCard({ item }: DishCardProps) {
  const prices = [
    item.half && { label: "Half", price: item.half },
    item.full && { label: "Full", price: item.full },
  ].filter(Boolean) as { label: string; price: number }[];

  return (
    <Card className="flex flex-col h-full border-primary/20 hover:border-primary/50 transition-colors duration-300 bg-card shadow-lg hover:shadow-primary/20 rounded-xl">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl font-body font-bold text-foreground">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-end justify-end">
        {prices.length > 0 && (
          <div className="flex flex-col items-end gap-1">
            {prices.map(({ label, price }) => (
              <div key={label} className="text-right">
                <span className="text-sm text-muted-foreground mr-2">{label}</span>
                <span className="text-lg font-bold text-primary">₹{price}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
