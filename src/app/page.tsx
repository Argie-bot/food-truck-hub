import Link from "next/link";
import { MapPin, Database, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SearchBar } from "@/components/SearchBar";
import { CityCard } from "@/components/CityCard";
import { getFeaturedCities } from "@/data/cities";

export default function Home() {
  const featuredCities = getFeaturedCities();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Know Before You{" "}
              <span className="text-orange-500">Roll</span> 🚚
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              The first comprehensive food truck permit database. 
              Stop Googling. Start operating.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar size="large" />
            </div>

            <p className="text-sm text-slate-500">
              Try: Austin, Los Angeles, Portland, or Chicago
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Top Food Truck Cities
            </h2>
            <p className="text-slate-600">
              Explore permit requirements in America&apos;s best food truck markets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/cities">
                Browse All 25 Cities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Why Food Truck Hub?
            </h2>
            <p className="text-slate-600">
              We do the research so you can focus on cooking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">25+ Cities</h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive permit data for all major US food truck markets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">Real Gov Data</h3>
                <p className="text-slate-600 text-sm">
                  Sourced directly from official city and county websites
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">Always Updated</h3>
                <p className="text-slate-600 text-sm">
                  Regularly verified to ensure accuracy and relevance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Food Truck Journey?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Find out exactly what permits you need, how much they cost, and where to apply.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 gap-2">
            <Link href="/cities">
              Browse All Cities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
