import Link from "next/link";
import { MapPin, Truck, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { City, getTotalAnnualCost, formatCurrency } from "@/data/cities";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const totalCost = getTotalAnnualCost(city);
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-800 group-hover:text-orange-500 transition-colors">
              {city.name}
            </h3>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin className="h-3 w-3" />
              {city.state}
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            Verified
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Truck className="h-4 w-4 text-orange-500" />
          <span className="text-slate-600">
            <span className="font-semibold text-slate-800">{city.estFoodTrucks.toLocaleString()}+</span> food trucks
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="h-4 w-4 text-orange-500" />
          <span className="text-slate-600">
            <span className="font-semibold text-slate-800">{formatCurrency(totalCost)}</span>/year permits
          </span>
        </div>

        <div className="text-xs text-slate-400">
          {city.permits.length} permit{city.permits.length !== 1 ? 's' : ''} required
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
          <Link href={`/cities/${city.id}`}>
            View Requirements
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
