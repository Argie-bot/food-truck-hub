import { NextRequest, NextResponse } from 'next/server';

// Updated API for permit opportunities - v1.1

interface PermitOpportunity {
  name: string;
  cost: string;
  deadline: string;
  status: 'available' | 'closing_soon' | 'closed';
  priority: 'high' | 'medium' | 'low';
  url?: string;
}

interface PermitStatus {
  city: string;
  lastUpdated: string;
  totalOpportunities: number;
  opportunities: PermitOpportunity[];
  source: string;
}

// Permit opportunity data - in production this would scrape real websites
async function checkPermitStatus(city: string): Promise<PermitStatus> {
  const now = new Date().toISOString();
  
  switch (city.toLowerCase()) {
    case 'austin':
      return {
        city: 'Austin, TX',
        lastUpdated: now,
        totalOpportunities: 4,
        opportunities: [
          {
            name: 'SXSW 2026 Food Vendor Permit',
            cost: '$500',
            deadline: 'Feb 15, 2026',
            status: 'closing_soon',
            priority: 'high',
            url: 'https://sxsw.com/apply/'
          },
          {
            name: 'Austin City Limits Festival 2026',
            cost: '$750',
            deadline: 'Mar 1, 2026',
            status: 'available',
            priority: 'high',
            url: 'https://aclfestival.com/vendors'
          },
          {
            name: 'Austin Mobile Food Vendor Annual Permit',
            cost: '$760',
            deadline: 'Rolling basis',
            status: 'available',
            priority: 'medium',
            url: 'https://www.austintexas.gov/department/mobile-food-vendors'
          },
          {
            name: 'Zilker Park Events - Spring 2026',
            cost: '$200-400',
            deadline: 'Mar 15, 2026', 
            status: 'available',
            priority: 'medium'
          }
        ],
        source: 'Austin Public Health, SXSW, ACL Festival'
      };
    
    case 'portland':
      return {
        city: 'Portland, OR',
        lastUpdated: now,
        totalOpportunities: 3,
        opportunities: [
          {
            name: 'Portland Food Cart Pod License',
            cost: '$760',
            deadline: 'Rolling basis',
            status: 'available',
            priority: 'high',
            url: 'https://www.portland.gov/ppd/commercial-permitting/food-carts'
          },
          {
            name: 'Portland Food Festival Week 2026',
            cost: '$210',
            deadline: 'Feb 15, 2026',
            status: 'closing_soon',
            priority: 'high'
          },
          {
            name: 'Multnomah County Temporary Food Events',
            cost: '$150-300',
            deadline: 'Varies by event',
            status: 'available',
            priority: 'medium',
            url: 'https://multco.us/services/food-carts'
          }
        ],
        source: 'Portland Bureau of Transportation, Multnomah County'
      };
    
    default:
      return {
        city: city,
        lastUpdated: now,
        totalOpportunities: 0,
        opportunities: [],
        source: 'Unknown'
      };
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  
  if (!city) {
    return NextResponse.json(
      { error: 'City parameter required' }, 
      { status: 400 }
    );
  }
  
  try {
    const status = await checkPermitStatus(city);
    return NextResponse.json(status);
  } catch (err) {
    console.error('Error checking permit status:', err);
    return NextResponse.json(
      { error: 'Failed to check permit status' }, 
      { status: 500 }
    );
  }
}

// Get all supported cities' status
export async function POST() {
  try {
    const cities = ['austin', 'portland'];
    const statuses = await Promise.all(
      cities.map(city => checkPermitStatus(city))
    );
    
    return NextResponse.json(statuses);
  } catch (err) {
    console.error('Error checking permit statuses:', err);
    return NextResponse.json(
      { error: 'Failed to check permit statuses' }, 
      { status: 500 }
    );
  }
}