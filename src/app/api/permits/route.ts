import { NextRequest, NextResponse } from 'next/server';

interface PermitStatus {
  city: string;
  status: 'available' | 'processing' | 'closed';
  lastUpdated: string;
  message: string;
  source: string;
}

// Simple permit status checking - in production this would scrape real websites
async function checkPermitStatus(city: string): Promise<PermitStatus> {
  const now = new Date().toISOString();
  
  switch (city.toLowerCase()) {
    case 'austin':
      return {
        city: 'Austin, TX',
        status: 'available',
        lastUpdated: now,
        message: 'Mobile Food Vendor permits are currently accepting applications through the digital platform.',
        source: 'Austin Public Health Department'
      };
    
    case 'portland':
      return {
        city: 'Portland, OR',
        status: 'processing',
        lastUpdated: now,
        message: 'Sidewalk vending permits are being processed. Current wait time: 6-8 weeks.',
        source: 'Portland Bureau of Transportation'
      };
    
    default:
      return {
        city: city,
        status: 'closed',
        lastUpdated: now,
        message: 'Permit status unavailable. Check directly with city office.',
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
  } catch (error) {
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
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check permit statuses' }, 
      { status: 500 }
    );
  }
}