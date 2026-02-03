"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { CityCard } from "@/components/CityCard";
import { searchCities, getFeaturedCities } from "@/data/cities";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const results = query ? searchCities(query) : [];
  const suggestedCities = getFeaturedCities().slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Search Food Truck Permits
          </h1>
          <div className="max-w-2xl">
            <SearchBar 
              initialValue={query} 
              placeholder="Search by city name or state..."
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {query ? (
          <>
            {/* Results */}
            {results.length > 0 ? (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-800">
                    {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {results.map((city) => (
                    <CityCard key={city.id} city={city} />
                  ))}
                </div>
              </>
            ) : (
              /* No Results */
              <div className="max-w-xl mx-auto text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  No results for &ldquo;{query}&rdquo;
                </h2>
                <p className="text-slate-600 mb-6">
                  We couldn&apos;t find any cities matching your search. Try a different city name or state.
                </p>

                {/* Suggestions */}
                <div className="bg-white rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    Try these popular cities:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestedCities.map((city) => (
                      <Link
                        key={city.id}
                        href={`/cities/${city.id}`}
                        className="text-sm text-slate-600 hover:text-orange-500 transition-colors py-1"
                      >
                        {city.name}, {city.stateAbbrev}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/cities">Browse All Cities</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty State - No Query */
          <div className="max-w-xl mx-auto text-center py-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Search for a City
            </h2>
            <p className="text-slate-600 mb-6">
              Enter a city name or state to find food truck permit requirements.
            </p>

            {/* Suggestions */}
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                Popular searches:
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Los Angeles", "Austin", "Portland", "Chicago", "Miami", "Denver"].map((city) => (
                  <Link
                    key={city}
                    href={`/search?q=${encodeURIComponent(city)}`}
                    className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cities">Browse All Cities</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
