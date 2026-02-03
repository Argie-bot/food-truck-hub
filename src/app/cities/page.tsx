"use client";

import { useState, useMemo } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CityCard } from "@/components/CityCard";
import { SearchBar } from "@/components/SearchBar";
import { cities, getUniqueStates, getTotalAnnualCost } from "@/data/cities";

type SortOption = "name" | "trucks" | "cost";

export default function CitiesPage() {
  const [selectedState, setSelectedState] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("trucks");
  
  const states = getUniqueStates();

  const filteredAndSortedCities = useMemo(() => {
    let result = [...cities];
    
    // Filter by state
    if (selectedState !== "all") {
      result = result.filter(city => city.state === selectedState);
    }
    
    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "trucks":
        result.sort((a, b) => b.estFoodTrucks - a.estFoodTrucks);
        break;
      case "cost":
        result.sort((a, b) => getTotalAnnualCost(a) - getTotalAnnualCost(b));
        break;
    }
    
    return result;
  }, [selectedState, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Food Truck Permit Requirements by City
          </h1>
          <p className="text-slate-600">
            Compare permit costs and requirements across {cities.length} major US cities
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <SearchBar placeholder="Search cities..." className="w-full" />
            </div>

            {/* Filters */}
            <div className="flex gap-3 flex-wrap">
              {/* State Filter */}
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[160px]">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trucks">Most Trucks</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                  <SelectItem value="cost">Lowest Cost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 text-sm text-slate-500">
          Showing {filteredAndSortedCities.length} {filteredAndSortedCities.length === 1 ? 'city' : 'cities'}
          {selectedState !== "all" && ` in ${selectedState}`}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {filteredAndSortedCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No cities found matching your filters.</p>
            <Button 
              variant="link" 
              onClick={() => setSelectedState("all")}
              className="text-orange-500"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
