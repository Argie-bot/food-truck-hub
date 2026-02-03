// Data types and loader for Food Truck Permit Hub
import citiesData1 from '../../data/cities-1-13.json';
import citiesData2 from '../../data/cities-14-25.json';

export interface Permit {
  type: string;
  description: string;
  issuingAgency: string;
  cost: number | string;
  costPeriod: string;
  annualizedCost?: number;
  requirements: string[];
  documents: string[];
  applicationUrl?: string;
  infoUrl: string;
  processingTime?: string;
  renewalPeriod?: string;
}

export interface HealthDept {
  name: string;
  phone?: string;
  website?: string;
  inspectionRequired: boolean;
}

export interface City {
  id: string;
  name: string;
  state: string;
  stateAbbrev: string;
  population: number;
  estFoodTrucks: number;
  permits: Permit[];
  healthDept: HealthDept;
  restrictions: string[];
  notes: string[];
  sources: string[];
  lastVerified: string;
}

// Load and combine city data from research files
const data1 = citiesData1 as { cities: City[] };
const data2 = citiesData2 as { cities: City[] };

export const cities: City[] = [...data1.cities, ...data2.cities];

// Helper functions
export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getCitiesByState(stateAbbrev: string): City[] {
  return cities.filter(city => city.stateAbbrev === stateAbbrev);
}

export function searchCities(query: string): City[] {
  const lowerQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.state.toLowerCase().includes(lowerQuery) ||
    city.stateAbbrev.toLowerCase() === lowerQuery
  );
}

export function getTotalAnnualCost(city: City): number {
  return city.permits.reduce((total, permit) => total + (permit.annualizedCost || 0), 0);
}

export function getUniqueStates(): string[] {
  const states = [...new Set(cities.map(city => city.state))];
  return states.sort();
}

export function formatCurrency(amount: number | string): string {
  if (typeof amount === 'string') return amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function getFeaturedCities(): City[] {
  // Return top 8 cities by estimated food trucks
  return [...cities].sort((a, b) => b.estFoodTrucks - a.estFoodTrucks).slice(0, 8);
}
