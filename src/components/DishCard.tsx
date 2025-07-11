import Image from "next/image";
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
    <Card className="flex flex-col h-full bg-card border-border/50 hover:border-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden group">
      <div className="relative w-full h-40">
        <Image
          src="https://images.unsplash.com/photo-1664717698774-84f62382613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhLWJvd2wtb2YtcmljZS13aXRoLXZlZ2V0YWJsZXMtTVZNb2hKQmllbzR8ZW58MHx8fHwxNzUyMjEyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint="chinese food"
        />
      </div>
      <CardHeader className="flex-row items-start justify-between p-4">
        <CardTitle className="text-xl font-headline text-foreground tracking-wide">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-end justify-between p-4 pt-0">
        <div></div>
        {prices.length > 0 && (
          <div className="flex flex-col items-end gap-1">
            {prices.map(({ label, price }) => (
              <div key={label} className="text-right">
                <span className="text-sm text-muted-foreground mr-2">{label}</span>
                <span className="text-xl font-bold font-headline text-primary">Rs {price}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
