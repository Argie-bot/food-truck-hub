# Food Truck Permit Hub — MVP Spec

## Mission
Build the first comprehensive food truck permit database. Help food truckers understand requirements, costs, and deadlines for operating in any major US city.

## Target: Top 25 Food Truck Cities

| Rank | City | State | Est. Trucks |
|------|------|-------|-------------|
| 1 | Los Angeles | CA | 4,000+ |
| 2 | New York | NY | 3,000+ |
| 3 | Portland | OR | 2,000+ |
| 4 | Houston | TX | 1,500+ |
| 5 | Austin | TX | 1,200+ |
| 6 | Miami | FL | 1,000+ |
| 7 | Chicago | IL | 800+ |
| 8 | Denver | CO | 700+ |
| 9 | Seattle | WA | 600+ |
| 10 | San Francisco | CA | 500+ |
| 11 | Dallas | TX | 500+ |
| 12 | Phoenix | AZ | 450+ |
| 13 | San Diego | CA | 400+ |
| 14 | Atlanta | GA | 400+ |
| 15 | Nashville | TN | 350+ |
| 16 | Las Vegas | NV | 350+ |
| 17 | Philadelphia | PA | 300+ |
| 18 | San Antonio | TX | 300+ |
| 19 | Orlando | FL | 300+ |
| 20 | Minneapolis | MN | 250+ |
| 21 | Tampa | FL | 250+ |
| 22 | Charlotte | NC | 200+ |
| 23 | Boston | MA | 200+ |
| 24 | Columbus | OH | 200+ |
| 25 | Indianapolis | IN | 150+ |

## Data Schema

Each city entry must include:

```typescript
interface City {
  id: string;                    // e.g., "los-angeles-ca"
  name: string;
  state: string;
  stateAbbrev: string;
  population: number;
  estFoodTrucks: number;
  
  permits: Permit[];
  
  healthDept: {
    name: string;
    phone?: string;
    website?: string;
    inspectionRequired: boolean;
  };
  
  restrictions: string[];        // Operating restrictions, zones, hours
  notes: string[];               // Tips, gotchas, insider knowledge
  
  sources: string[];             // URLs we got data from
  lastVerified: string;          // ISO date
}

interface Permit {
  type: string;                  // e.g., "Mobile Food Vendor License"
  description: string;
  issuingAgency: string;
  
  cost: number | string;         // Number if known, string if "varies"
  costPeriod: string;            // "annual", "2 years", etc.
  annualizedCost?: number;       // Calculated annual cost
  
  requirements: string[];        // List of requirements
  documents: string[];           // Required documents
  
  applicationUrl?: string;       // Direct link to apply
  infoUrl: string;               // Info page URL
  
  processingTime?: string;       // e.g., "2-4 weeks"
  renewalPeriod?: string;        // e.g., "annual", "biennial"
}
```

## App Features (MVP)

### Pages

1. **Home** (`/`)
   - Hero: "Know Before You Roll"
   - Search bar: Find permits by city
   - Featured cities grid
   - Value prop: "Stop Googling. Start Operating."

2. **City Directory** (`/cities`)
   - List of all 25 cities
   - Filter by state
   - Sort by truck count, cost, etc.

3. **City Detail** (`/cities/[cityId]`)
   - City overview (population, est. trucks)
   - All permits listed with costs
   - Requirements checklist
   - Health department info
   - Restrictions and tips
   - Direct links to apply

4. **My Permits** (`/my-permits`) — Future
   - Track your permits
   - Renewal reminders
   - Multi-city dashboard

### Design

- **Theme**: Professional but approachable. Think "TurboTax for food trucks"
- **Colors**: Orange/red (food vibes) + dark gray
- **Mobile-first**: Food truckers are on their phones
- **Fast**: Static generation where possible

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (for future user accounts)
- Vercel deployment

## Success Criteria

By morning, we should have:
- [ ] Permit data for all 25 cities in JSON
- [ ] Working Next.js app with search
- [ ] City detail pages showing permit info
- [ ] Deployed to Vercel
- [ ] Mobile responsive
- [ ] Looks professional enough to show food truckers

## Project Location

`/Users/argiebot/.openclaw/workspace/food-truck-hub/`
