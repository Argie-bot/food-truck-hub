import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  MapPin, 
  Users, 
  Truck, 
  DollarSign, 
  Phone, 
  Globe, 
  AlertCircle,
  Lightbulb,
  ExternalLink,
  ChevronLeft,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PermitCard } from "@/components/PermitCard";
import { LivePermitStatus } from "@/components/LivePermitStatus";
import { 
  cities, 
  getCityById, 
  getTotalAnnualCost, 
  formatCurrency 
} from "@/data/cities";

// Generate static params for all cities
export function generateStaticParams() {
  return cities.map((city) => ({
    cityId: city.id,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({ params }: { params: Promise<{ cityId: string }> }) {
  const { cityId } = await params;
  const city = getCityById(cityId);
  
  if (!city) {
    return {
      title: "City Not Found | Food Truck Hub",
    };
  }

  return {
    title: `${city.name}, ${city.stateAbbrev} Food Truck Permits | Food Truck Hub`,
    description: `Food truck permit requirements for ${city.name}, ${city.state}. ${city.permits.length} permits required, starting at ${formatCurrency(getTotalAnnualCost(city))}/year.`,
  };
}

export default async function CityDetailPage({ params }: { params: Promise<{ cityId: string }> }) {
  const { cityId } = await params;
  const city = getCityById(cityId);

  if (!city) {
    notFound();
  }

  const totalCost = getTotalAnnualCost(city);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Link */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Link 
            href="/cities" 
            className="inline-flex items-center text-sm text-slate-600 hover:text-orange-500 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to all cities
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-500 hover:bg-green-500">Verified</Badge>
                <span className="text-slate-400 text-sm">
                  Last updated: {new Date(city.lastVerified).toLocaleDateString()}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {city.name}
              </h1>
              <div className="flex items-center gap-1 text-slate-300">
                <MapPin className="h-4 w-4" />
                {city.state}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2" disabled>
                <Bell className="h-4 w-4" />
                Track Permits
                <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-8 p-4 bg-white/10 rounded-lg backdrop-blur">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-slate-300 text-sm mb-1">
                <Users className="h-4 w-4" />
                Population
              </div>
              <div className="text-2xl font-bold">
                {city.population.toLocaleString()}
              </div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="flex items-center justify-center gap-1 text-slate-300 text-sm mb-1">
                <Truck className="h-4 w-4" />
                Est. Food Trucks
              </div>
              <div className="text-2xl font-bold">
                {city.estFoodTrucks.toLocaleString()}+
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-slate-300 text-sm mb-1">
                <DollarSign className="h-4 w-4" />
                Annual Permit Cost
              </div>
              <div className="text-2xl font-bold text-orange-400">
                {formatCurrency(totalCost)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Permit Status */}
            {(city.name.toLowerCase().includes('austin') || city.name.toLowerCase().includes('portland')) && (
              <section>
                <LivePermitStatus cityName={city.name} />
              </section>
            )}
            
            {/* Permits Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-orange-500" />
                Required Permits ({city.permits.length})
              </h2>
              <div className="space-y-4">
                {city.permits.map((permit, index) => (
                  <PermitCard key={index} permit={permit} index={index} />
                ))}
              </div>
            </section>

            {/* Restrictions Section */}
            {city.restrictions.length > 0 && (
              <section>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      Operating Restrictions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {city.restrictions.map((restriction, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="text-orange-500 mt-1">•</span>
                          {restriction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Tips Section */}
            {city.notes.length > 0 && (
              <section>
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800">
                      <Lightbulb className="h-5 w-5 text-orange-500" />
                      Local Tips & Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {city.notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="text-orange-500 mt-1">💡</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Department */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Health Department</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-medium text-slate-800">{city.healthDept.name}</p>
                
                {city.healthDept.phone && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <a href={`tel:${city.healthDept.phone}`} className="hover:text-orange-500">
                      {city.healthDept.phone}
                    </a>
                  </div>
                )}
                
                {city.healthDept.website && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Globe className="h-4 w-4 text-orange-500" />
                    <a 
                      href={city.healthDept.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 truncate"
                    >
                      Visit Website
                    </a>
                  </div>
                )}

                <div className="pt-2">
                  <Badge variant={city.healthDept.inspectionRequired ? "default" : "secondary"}>
                    {city.healthDept.inspectionRequired ? "Inspection Required" : "No Inspection Required"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-3">
                  Information sourced from official government websites:
                </p>
                <ul className="space-y-2">
                  {city.sources.map((source, index) => (
                    <li key={index}>
                      <a 
                        href={source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-orange-500 hover:underline flex items-center gap-1 break-all"
                      >
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        {new URL(source).hostname}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-slate-100 border-slate-200">
              <CardContent className="pt-4">
                <p className="text-xs text-slate-500">
                  <strong>Disclaimer:</strong> This information is provided as a general guide. 
                  Requirements may change. Always verify with local authorities before applying 
                  for permits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
