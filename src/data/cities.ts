// Data types and mock data for Food Truck Permit Hub

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

// Mock data for all 25 cities
export const cities: City[] = [
  {
    id: "los-angeles-ca",
    name: "Los Angeles",
    state: "California",
    stateAbbrev: "CA",
    population: 3900000,
    estFoodTrucks: 4000,
    permits: [
      {
        type: "Mobile Food Facility Permit",
        description: "Required permit from LA County Health Department to operate a mobile food facility",
        issuingAgency: "LA County Department of Public Health",
        cost: 1066,
        costPeriod: "annual",
        annualizedCost: 1066,
        requirements: [
          "Complete food handler certification",
          "Pass health inspection",
          "Commissary agreement in place",
          "Vehicle meets health code standards"
        ],
        documents: [
          "Food Handler Certificate",
          "Commissary Agreement",
          "Vehicle Registration",
          "Driver's License"
        ],
        applicationUrl: "http://publichealth.lacounty.gov/eh/business/foodMobile.htm",
        infoUrl: "http://publichealth.lacounty.gov/eh/business/foodMobile.htm",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Business Tax Registration Certificate",
        description: "City of LA business license for operating within city limits",
        issuingAgency: "City of Los Angeles Office of Finance",
        cost: 150,
        costPeriod: "annual",
        annualizedCost: 150,
        requirements: [
          "Register business with city",
          "Pay applicable business taxes"
        ],
        documents: [
          "Business entity documents",
          "EIN or SSN"
        ],
        applicationUrl: "https://finance.lacity.org/",
        infoUrl: "https://finance.lacity.org/",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Seller's Permit",
        description: "California state permit to collect sales tax",
        issuingAgency: "California Department of Tax and Fee Administration",
        cost: 0,
        costPeriod: "one-time",
        annualizedCost: 0,
        requirements: [
          "Register with CDTFA",
          "File quarterly sales tax returns"
        ],
        documents: [
          "Business information",
          "Social Security Number or ITIN"
        ],
        applicationUrl: "https://www.cdtfa.ca.gov/",
        infoUrl: "https://www.cdtfa.ca.gov/",
        processingTime: "1-2 weeks",
        renewalPeriod: "none"
      }
    ],
    healthDept: {
      name: "Los Angeles County Department of Public Health",
      phone: "(888) 700-9995",
      website: "http://publichealth.lacounty.gov/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate within 100 feet of a school during school hours",
      "Cannot operate within 200 feet of a certified farmers' market during operating hours",
      "Some areas require additional street vending permits",
      "Parking restrictions apply in metered zones"
    ],
    notes: [
      "LA has one of the most vibrant food truck scenes in the country",
      "Consider joining the SoCal Mobile Food Vendors Association for resources",
      "Some neighborhoods have more lenient rules than others"
    ],
    sources: [
      "http://publichealth.lacounty.gov/eh/business/foodMobile.htm",
      "https://finance.lacity.org/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "new-york-ny",
    name: "New York",
    state: "New York",
    stateAbbrev: "NY",
    population: 8300000,
    estFoodTrucks: 3000,
    permits: [
      {
        type: "Mobile Food Vending License",
        description: "NYC DOHMH license required to operate a mobile food unit",
        issuingAgency: "NYC Department of Health and Mental Hygiene",
        cost: 200,
        costPeriod: "2 years",
        annualizedCost: 100,
        requirements: [
          "Complete Food Protection Course",
          "Pass health inspection",
          "Obtain Mobile Food Vending Unit Permit"
        ],
        documents: [
          "Food Protection Certificate",
          "Valid ID",
          "Social Security Card"
        ],
        applicationUrl: "https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page",
        infoUrl: "https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page",
        processingTime: "4-8 weeks",
        renewalPeriod: "biennial"
      },
      {
        type: "Mobile Food Vending Unit Permit",
        description: "Permit for the actual food truck/cart itself",
        issuingAgency: "NYC Department of Health and Mental Hygiene",
        cost: 300,
        costPeriod: "2 years",
        annualizedCost: 150,
        requirements: [
          "Vehicle inspection passed",
          "Valid Mobile Food Vending License",
          "Unit meets NYC health code"
        ],
        documents: [
          "Vehicle registration",
          "Valid license"
        ],
        applicationUrl: "https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page",
        infoUrl: "https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page",
        processingTime: "4-8 weeks",
        renewalPeriod: "biennial"
      }
    ],
    healthDept: {
      name: "NYC Department of Health and Mental Hygiene",
      phone: "311",
      website: "https://www.nyc.gov/site/doh/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot vend within restricted zones in Manhattan",
      "Must be 20+ feet from building entrances",
      "Cannot block pedestrian traffic",
      "Limited permits available - long waitlist",
      "No vending in metered parking spaces"
    ],
    notes: [
      "NYC has a permit cap - there's a years-long waitlist",
      "Some operators purchase permits on secondary market (gray area)",
      "Consider starting in outer boroughs where restrictions are lighter"
    ],
    sources: [
      "https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "portland-or",
    name: "Portland",
    state: "Oregon",
    stateAbbrev: "OR",
    population: 650000,
    estFoodTrucks: 2000,
    permits: [
      {
        type: "Mobile Food Unit License",
        description: "Multnomah County license for mobile food operations",
        issuingAgency: "Multnomah County Health Department",
        cost: 475,
        costPeriod: "annual",
        annualizedCost: 475,
        requirements: [
          "Complete food handler training",
          "Pass health inspection",
          "Approved commissary plan"
        ],
        documents: [
          "Food Handler Card",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.multco.us/health/food-safety",
        infoUrl: "https://www.multco.us/health/food-safety",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "City Business License",
        description: "Portland business license tax registration",
        issuingAgency: "City of Portland Revenue Division",
        cost: 100,
        costPeriod: "annual",
        annualizedCost: 100,
        requirements: [
          "Register with city",
          "File annual tax return"
        ],
        documents: [
          "Business registration"
        ],
        applicationUrl: "https://www.portland.gov/revenue/business-tax",
        infoUrl: "https://www.portland.gov/revenue/business-tax",
        processingTime: "1 week",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Multnomah County Health Department",
      phone: "(503) 988-3400",
      website: "https://www.multco.us/health",
      inspectionRequired: true
    },
    restrictions: [
      "Food pods require property owner permission",
      "Some neighborhoods have specific rules",
      "Cannot operate on public streets without street vending permit"
    ],
    notes: [
      "Portland is famous for its food cart pods",
      "Consider joining an established pod for easier startup",
      "Very food truck friendly city overall"
    ],
    sources: [
      "https://www.multco.us/health/food-safety",
      "https://www.portland.gov/revenue/business-tax"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "houston-tx",
    name: "Houston",
    state: "Texas",
    stateAbbrev: "TX",
    population: 2300000,
    estFoodTrucks: 1500,
    permits: [
      {
        type: "Mobile Food Unit Permit",
        description: "Houston Health Department permit for food trucks",
        issuingAgency: "Houston Health Department",
        cost: 450,
        costPeriod: "annual",
        annualizedCost: 450,
        requirements: [
          "Food manager certification",
          "Pass health inspection",
          "Approved commissary"
        ],
        documents: [
          "Food Manager Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.houstontx.gov/health/Food/",
        infoUrl: "https://www.houstontx.gov/health/Food/",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Houston Health Department",
      phone: "(832) 393-5100",
      website: "https://www.houstontx.gov/health/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot park within 150 feet of any food establishment",
      "Must be 300 feet from schools during school hours",
      "30-minute parking limit in most areas"
    ],
    notes: [
      "Houston is one of the more food truck friendly Texas cities",
      "Large events and festivals offer good opportunities",
      "Consider the Houston Food Truck Association for networking"
    ],
    sources: [
      "https://www.houstontx.gov/health/Food/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "austin-tx",
    name: "Austin",
    state: "Texas",
    stateAbbrev: "TX",
    population: 1000000,
    estFoodTrucks: 1200,
    permits: [
      {
        type: "Mobile Food Establishment Permit",
        description: "Austin Public Health permit for food trucks",
        issuingAgency: "Austin Public Health",
        cost: 425,
        costPeriod: "annual",
        annualizedCost: 425,
        requirements: [
          "Food manager certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Manager Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.austintexas.gov/department/food-establishment-requirements",
        infoUrl: "https://www.austintexas.gov/department/food-establishment-requirements",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Certificate of Occupancy",
        description: "Required for stationary food trailer locations",
        issuingAgency: "City of Austin Development Services",
        cost: 200,
        costPeriod: "one-time",
        annualizedCost: 50,
        requirements: [
          "Site plan approval",
          "Property owner permission",
          "Meet zoning requirements"
        ],
        documents: [
          "Site plan",
          "Property agreement"
        ],
        applicationUrl: "https://www.austintexas.gov/department/development-services",
        infoUrl: "https://www.austintexas.gov/department/development-services",
        processingTime: "2-4 weeks",
        renewalPeriod: "none"
      }
    ],
    healthDept: {
      name: "Austin Public Health",
      phone: "(512) 978-0300",
      website: "https://www.austintexas.gov/department/austin-public-health",
      inspectionRequired: true
    },
    restrictions: [
      "Stationary trailers need Certificate of Occupancy",
      "Must be off public right-of-way",
      "Some areas have special event restrictions"
    ],
    notes: [
      "Austin is one of the best cities for food trucks in the US",
      "SXSW and ACL are huge opportunities",
      "Food trailer parks are very popular"
    ],
    sources: [
      "https://www.austintexas.gov/department/food-establishment-requirements"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "miami-fl",
    name: "Miami",
    state: "Florida",
    stateAbbrev: "FL",
    population: 450000,
    estFoodTrucks: 1000,
    permits: [
      {
        type: "Mobile Food Dispensing Vehicle License",
        description: "Florida DBPR license for food trucks",
        issuingAgency: "Florida Department of Business & Professional Regulation",
        cost: 347,
        costPeriod: "annual",
        annualizedCost: 347,
        requirements: [
          "Complete food safety training",
          "Pass inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certification",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.myfloridalicense.com/",
        infoUrl: "https://www.myfloridalicense.com/",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Local Business Tax Receipt",
        description: "Miami-Dade County business license",
        issuingAgency: "Miami-Dade County Tax Collector",
        cost: 150,
        costPeriod: "annual",
        annualizedCost: 150,
        requirements: [
          "Register business",
          "Provide business documentation"
        ],
        documents: [
          "Business registration",
          "ID"
        ],
        applicationUrl: "https://www.miamidade.gov/business/",
        infoUrl: "https://www.miamidade.gov/business/",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Florida Department of Business & Professional Regulation",
      phone: "(850) 487-1395",
      website: "https://www.myfloridalicense.com/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate within 200 feet of brick-and-mortar restaurants in some areas",
      "Beach locations require special permits",
      "Some areas restrict operating hours"
    ],
    notes: [
      "Miami food truck scene is growing rapidly",
      "Latin and Caribbean cuisine is very popular",
      "Consider beach and event vending for best revenue"
    ],
    sources: [
      "https://www.myfloridalicense.com/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "chicago-il",
    name: "Chicago",
    state: "Illinois",
    stateAbbrev: "IL",
    population: 2700000,
    estFoodTrucks: 800,
    permits: [
      {
        type: "Mobile Food Vendor License",
        description: "City of Chicago license for food trucks",
        issuingAgency: "City of Chicago Department of Business Affairs and Consumer Protection",
        cost: 550,
        costPeriod: "2 years",
        annualizedCost: 275,
        requirements: [
          "Food service sanitation certification",
          "Pass vehicle inspection",
          "GPS tracking device installed"
        ],
        documents: [
          "Food Sanitation Certificate",
          "Vehicle registration",
          "Insurance"
        ],
        applicationUrl: "https://www.chicago.gov/city/en/depts/bacp/supp_info/food_trucks.html",
        infoUrl: "https://www.chicago.gov/city/en/depts/bacp/supp_info/food_trucks.html",
        processingTime: "4-6 weeks",
        renewalPeriod: "biennial"
      }
    ],
    healthDept: {
      name: "Chicago Department of Public Health",
      phone: "(312) 746-6200",
      website: "https://www.chicago.gov/city/en/depts/cdph.html",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate within 200 feet of brick-and-mortar restaurants",
      "GPS tracking required",
      "2-hour parking limit",
      "Restricted zones downtown"
    ],
    notes: [
      "Chicago has historically strict food truck regulations",
      "Rules have loosened in recent years",
      "Festivals and events are the best opportunities"
    ],
    sources: [
      "https://www.chicago.gov/city/en/depts/bacp/supp_info/food_trucks.html"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "denver-co",
    name: "Denver",
    state: "Colorado",
    stateAbbrev: "CO",
    population: 715000,
    estFoodTrucks: 700,
    permits: [
      {
        type: "Mobile Food Vehicle License",
        description: "Denver retail food establishment license for mobile vendors",
        issuingAgency: "Denver Department of Public Health & Environment",
        cost: 350,
        costPeriod: "annual",
        annualizedCost: 350,
        requirements: [
          "Food safety certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.denvergov.org/Government/Departments/Public-Health-Environment",
        infoUrl: "https://www.denvergov.org/Government/Departments/Public-Health-Environment",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Sales Tax License",
        description: "Colorado state sales tax license",
        issuingAgency: "Colorado Department of Revenue",
        cost: 0,
        costPeriod: "one-time",
        annualizedCost: 0,
        requirements: [
          "Register with state",
          "File regular tax returns"
        ],
        documents: [
          "Business information"
        ],
        applicationUrl: "https://tax.colorado.gov/",
        infoUrl: "https://tax.colorado.gov/",
        processingTime: "1 week",
        renewalPeriod: "none"
      }
    ],
    healthDept: {
      name: "Denver Department of Public Health & Environment",
      phone: "(720) 913-1311",
      website: "https://www.denvergov.org/Government/Departments/Public-Health-Environment",
      inspectionRequired: true
    },
    restrictions: [
      "Must have property owner permission for private lots",
      "Street vending requires additional permit",
      "Some downtown areas restricted"
    ],
    notes: [
      "Denver has a growing food truck scene",
      "Civic Center Eats is a great opportunity",
      "Brewery partnerships are popular"
    ],
    sources: [
      "https://www.denvergov.org/Government/Departments/Public-Health-Environment"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "seattle-wa",
    name: "Seattle",
    state: "Washington",
    stateAbbrev: "WA",
    population: 750000,
    estFoodTrucks: 600,
    permits: [
      {
        type: "Mobile Food Unit Permit",
        description: "King County permit for food trucks",
        issuingAgency: "King County Public Health",
        cost: 685,
        costPeriod: "annual",
        annualizedCost: 685,
        requirements: [
          "Food worker card",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Worker Card",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://kingcounty.gov/depts/health/environmental-health/food-safety.aspx",
        infoUrl: "https://kingcounty.gov/depts/health/environmental-health/food-safety.aspx",
        processingTime: "3-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Seattle Business License",
        description: "City of Seattle general business license",
        issuingAgency: "City of Seattle Finance and Administrative Services",
        cost: 110,
        costPeriod: "annual",
        annualizedCost: 110,
        requirements: [
          "Register business"
        ],
        documents: [
          "Business information"
        ],
        applicationUrl: "https://www.seattle.gov/license-and-tax-administration",
        infoUrl: "https://www.seattle.gov/license-and-tax-administration",
        processingTime: "1 week",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "King County Public Health",
      phone: "(206) 263-9566",
      website: "https://kingcounty.gov/depts/health.aspx",
      inspectionRequired: true
    },
    restrictions: [
      "Street vending requires additional city permit",
      "Some areas have designated food truck zones",
      "Must comply with parking regulations"
    ],
    notes: [
      "Seattle tech workers love food trucks",
      "Consider corporate catering opportunities",
      "Rain covers are essential!"
    ],
    sources: [
      "https://kingcounty.gov/depts/health/environmental-health/food-safety.aspx"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "san-francisco-ca",
    name: "San Francisco",
    state: "California",
    stateAbbrev: "CA",
    population: 870000,
    estFoodTrucks: 500,
    permits: [
      {
        type: "Mobile Food Facility Permit",
        description: "SF DPH permit for mobile food operations",
        issuingAgency: "San Francisco Department of Public Health",
        cost: 892,
        costPeriod: "annual",
        annualizedCost: 892,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.sfdph.org/dph/EH/Food/",
        infoUrl: "https://www.sfdph.org/dph/EH/Food/",
        processingTime: "4-6 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Street Vending Permit",
        description: "Permit to vend on public streets",
        issuingAgency: "San Francisco Public Works",
        cost: 500,
        costPeriod: "annual",
        annualizedCost: 500,
        requirements: [
          "Valid MFF permit",
          "Site approval"
        ],
        documents: [
          "MFF permit",
          "Site plan"
        ],
        applicationUrl: "https://sfpublicworks.org/",
        infoUrl: "https://sfpublicworks.org/",
        processingTime: "4-8 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "San Francisco Department of Public Health",
      phone: "(415) 558-6220",
      website: "https://www.sfdph.org/",
      inspectionRequired: true
    },
    restrictions: [
      "Very limited street vending locations",
      "Off the Grid markets are popular alternatives",
      "Some neighborhoods highly restricted"
    ],
    notes: [
      "SF is expensive but lucrative",
      "Off the Grid and food truck gatherings are key",
      "Tech company catering is a big opportunity"
    ],
    sources: [
      "https://www.sfdph.org/dph/EH/Food/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "dallas-tx",
    name: "Dallas",
    state: "Texas",
    stateAbbrev: "TX",
    population: 1300000,
    estFoodTrucks: 500,
    permits: [
      {
        type: "Mobile Food Vendor Permit",
        description: "Dallas County health permit for food trucks",
        issuingAgency: "Dallas County Health and Human Services",
        cost: 380,
        costPeriod: "annual",
        annualizedCost: 380,
        requirements: [
          "Food manager certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Manager Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.dallascounty.org/departments/dchhs/",
        infoUrl: "https://www.dallascounty.org/departments/dchhs/",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Dallas County Health and Human Services",
      phone: "(214) 819-2100",
      website: "https://www.dallascounty.org/departments/dchhs/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate within 300 feet of brick-and-mortar restaurants on private property",
      "Some downtown areas restricted",
      "Must have property owner permission"
    ],
    notes: [
      "Dallas is growing its food truck scene",
      "Deep Ellum and Design District are popular spots",
      "Corporate events offer good opportunities"
    ],
    sources: [
      "https://www.dallascounty.org/departments/dchhs/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "phoenix-az",
    name: "Phoenix",
    state: "Arizona",
    stateAbbrev: "AZ",
    population: 1600000,
    estFoodTrucks: 450,
    permits: [
      {
        type: "Mobile Food Unit License",
        description: "Maricopa County permit for food trucks",
        issuingAgency: "Maricopa County Environmental Services",
        cost: 400,
        costPeriod: "annual",
        annualizedCost: 400,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Card",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.maricopa.gov/5163/Food-Establishments",
        infoUrl: "https://www.maricopa.gov/5163/Food-Establishments",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Maricopa County Environmental Services",
      phone: "(602) 506-6616",
      website: "https://www.maricopa.gov/3916/Environmental-Services",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate within 200 feet of restaurants",
      "Must have property owner permission",
      "Limited street vending"
    ],
    notes: [
      "Phoenix summers are brutal - consider seasonal schedule",
      "Downtown and Scottsdale have good foot traffic",
      "Food truck Fridays are popular"
    ],
    sources: [
      "https://www.maricopa.gov/5163/Food-Establishments"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "san-diego-ca",
    name: "San Diego",
    state: "California",
    stateAbbrev: "CA",
    population: 1400000,
    estFoodTrucks: 400,
    permits: [
      {
        type: "Mobile Food Facility Permit",
        description: "San Diego County health permit for food trucks",
        issuingAgency: "San Diego County Department of Environmental Health",
        cost: 750,
        costPeriod: "annual",
        annualizedCost: 750,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.sandiegocounty.gov/content/sdc/deh/fhd/ffis/mffp.html",
        infoUrl: "https://www.sandiegocounty.gov/content/sdc/deh/fhd/ffis/mffp.html",
        processingTime: "3-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Mobile Food Vendor License",
        description: "City of San Diego business license",
        issuingAgency: "City of San Diego City Treasurer",
        cost: 125,
        costPeriod: "annual",
        annualizedCost: 125,
        requirements: [
          "Register business",
          "Valid health permit"
        ],
        documents: [
          "Health permit",
          "Business information"
        ],
        applicationUrl: "https://www.sandiego.gov/treasurer",
        infoUrl: "https://www.sandiego.gov/treasurer",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "San Diego County Department of Environmental Health",
      phone: "(858) 505-6900",
      website: "https://www.sandiegocounty.gov/deh/",
      inspectionRequired: true
    },
    restrictions: [
      "Beach locations have special restrictions",
      "Must comply with street vending ordinance",
      "Some areas require additional permits"
    ],
    notes: [
      "Great weather year-round for food trucks",
      "Beach and brewery partnerships are popular",
      "Consider taco trucks - huge market"
    ],
    sources: [
      "https://www.sandiegocounty.gov/content/sdc/deh/fhd/ffis/mffp.html"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "atlanta-ga",
    name: "Atlanta",
    state: "Georgia",
    stateAbbrev: "GA",
    population: 500000,
    estFoodTrucks: 400,
    permits: [
      {
        type: "Mobile Food Service Permit",
        description: "Fulton County health permit for food trucks",
        issuingAgency: "Fulton County Department of Health",
        cost: 375,
        costPeriod: "annual",
        annualizedCost: 375,
        requirements: [
          "Food service certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Service Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.fultoncountyga.gov/services/health-services",
        infoUrl: "https://www.fultoncountyga.gov/services/health-services",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "City Business License",
        description: "City of Atlanta business license",
        issuingAgency: "City of Atlanta Department of Finance",
        cost: 150,
        costPeriod: "annual",
        annualizedCost: 150,
        requirements: [
          "Register business",
          "Valid health permit"
        ],
        documents: [
          "Business registration",
          "Health permit"
        ],
        applicationUrl: "https://www.atlantaga.gov/government/departments/finance",
        infoUrl: "https://www.atlantaga.gov/government/departments/finance",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Fulton County Department of Health",
      phone: "(404) 613-1205",
      website: "https://www.fultoncountyga.gov/services/health-services",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot park on city streets overnight",
      "Some areas require special event permits",
      "Property owner permission required"
    ],
    notes: [
      "Atlanta has a vibrant food truck scene",
      "Check out Atlanta Street Food Coalition",
      "Ponce City Market and Krog Street are popular"
    ],
    sources: [
      "https://www.fultoncountyga.gov/services/health-services"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "nashville-tn",
    name: "Nashville",
    state: "Tennessee",
    stateAbbrev: "TN",
    population: 690000,
    estFoodTrucks: 350,
    permits: [
      {
        type: "Mobile Food Unit Permit",
        description: "Nashville Metro Health Department permit",
        issuingAgency: "Metro Nashville Health Department",
        cost: 300,
        costPeriod: "annual",
        annualizedCost: 300,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.nashville.gov/departments/health",
        infoUrl: "https://www.nashville.gov/departments/health",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Metro Nashville Health Department",
      phone: "(615) 340-5616",
      website: "https://www.nashville.gov/departments/health",
      inspectionRequired: true
    },
    restrictions: [
      "Broadway and downtown have special restrictions",
      "Must have property owner permission",
      "Special event permits required for festivals"
    ],
    notes: [
      "Nashville's food truck scene is booming",
      "Hot chicken is king here",
      "Music events offer great opportunities"
    ],
    sources: [
      "https://www.nashville.gov/departments/health"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "las-vegas-nv",
    name: "Las Vegas",
    state: "Nevada",
    stateAbbrev: "NV",
    population: 650000,
    estFoodTrucks: 350,
    permits: [
      {
        type: "Mobile Food Establishment Permit",
        description: "Southern Nevada Health District permit",
        issuingAgency: "Southern Nevada Health District",
        cost: 770,
        costPeriod: "annual",
        annualizedCost: 770,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Card",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.southernnevadahealthdistrict.org/",
        infoUrl: "https://www.southernnevadahealthdistrict.org/",
        processingTime: "3-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Business License",
        description: "Clark County or City of Las Vegas business license",
        issuingAgency: "Clark County Business License",
        cost: 200,
        costPeriod: "annual",
        annualizedCost: 200,
        requirements: [
          "Register business",
          "Valid health permit"
        ],
        documents: [
          "Health permit",
          "Business registration"
        ],
        applicationUrl: "https://www.clarkcountynv.gov/business",
        infoUrl: "https://www.clarkcountynv.gov/business",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Southern Nevada Health District",
      phone: "(702) 759-1110",
      website: "https://www.southernnevadahealthdistrict.org/",
      inspectionRequired: true
    },
    restrictions: [
      "Cannot operate on the Strip without special permission",
      "Hotel partnerships required for many locations",
      "Must comply with Clark County regulations"
    ],
    notes: [
      "Late night crowds are your target market",
      "Consider event and convention catering",
      "Stay off the Strip unless you have a deal"
    ],
    sources: [
      "https://www.southernnevadahealthdistrict.org/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "philadelphia-pa",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbrev: "PA",
    population: 1600000,
    estFoodTrucks: 300,
    permits: [
      {
        type: "Mobile Food Vendor License",
        description: "Philadelphia health department permit",
        issuingAgency: "Philadelphia Department of Public Health",
        cost: 300,
        costPeriod: "annual",
        annualizedCost: 300,
        requirements: [
          "Food safety certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/food-businesses/",
        infoUrl: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/food-businesses/",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Commercial Activity License",
        description: "City of Philadelphia business license",
        issuingAgency: "City of Philadelphia Department of Licenses and Inspections",
        cost: 300,
        costPeriod: "annual",
        annualizedCost: 300,
        requirements: [
          "Register business",
          "Valid health permit"
        ],
        documents: [
          "Business registration",
          "Health permit"
        ],
        applicationUrl: "https://www.phila.gov/li/",
        infoUrl: "https://www.phila.gov/li/",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Philadelphia Department of Public Health",
      phone: "(215) 685-7495",
      website: "https://www.phila.gov/departments/department-of-public-health/",
      inspectionRequired: true
    },
    restrictions: [
      "Center City has many restricted zones",
      "University areas have special rules",
      "Must comply with vending ordinance"
    ],
    notes: [
      "Philly has a strong food truck culture",
      "Drexel and Penn areas are popular",
      "Consider cheesesteak or other Philly classics"
    ],
    sources: [
      "https://www.phila.gov/services/permits-violations-licenses/get-a-license/food-businesses/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "san-antonio-tx",
    name: "San Antonio",
    state: "Texas",
    stateAbbrev: "TX",
    population: 1500000,
    estFoodTrucks: 300,
    permits: [
      {
        type: "Mobile Food Unit Permit",
        description: "San Antonio Metro Health permit",
        issuingAgency: "San Antonio Metropolitan Health District",
        cost: 350,
        costPeriod: "annual",
        annualizedCost: 350,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Card",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.sanantonio.gov/Health/FoodLicensing",
        infoUrl: "https://www.sanantonio.gov/Health/FoodLicensing",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "San Antonio Metropolitan Health District",
      phone: "(210) 207-8853",
      website: "https://www.sanantonio.gov/Health",
      inspectionRequired: true
    },
    restrictions: [
      "Riverwalk has special restrictions",
      "Must have property owner permission",
      "Some downtown areas limited"
    ],
    notes: [
      "San Antonio is food truck friendly",
      "Mexican and Tex-Mex cuisine is huge",
      "Festivals and events are great opportunities"
    ],
    sources: [
      "https://www.sanantonio.gov/Health/FoodLicensing"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "orlando-fl",
    name: "Orlando",
    state: "Florida",
    stateAbbrev: "FL",
    population: 310000,
    estFoodTrucks: 300,
    permits: [
      {
        type: "Mobile Food Dispensing Vehicle License",
        description: "Florida DBPR license for food trucks",
        issuingAgency: "Florida Department of Business & Professional Regulation",
        cost: 347,
        costPeriod: "annual",
        annualizedCost: 347,
        requirements: [
          "Food safety training",
          "Pass inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.myfloridalicense.com/",
        infoUrl: "https://www.myfloridalicense.com/",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Orange County Business Tax Receipt",
        description: "Local business license",
        issuingAgency: "Orange County Tax Collector",
        cost: 100,
        costPeriod: "annual",
        annualizedCost: 100,
        requirements: [
          "Register business",
          "Valid state license"
        ],
        documents: [
          "State license",
          "Business registration"
        ],
        applicationUrl: "https://www.octaxcol.com/",
        infoUrl: "https://www.octaxcol.com/",
        processingTime: "1 week",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Florida Department of Business & Professional Regulation",
      phone: "(850) 487-1395",
      website: "https://www.myfloridalicense.com/",
      inspectionRequired: true
    },
    restrictions: [
      "Downtown Disney/Disney Springs restricted",
      "Theme park areas have special rules",
      "Must have property owner permission"
    ],
    notes: [
      "Massive tourist market",
      "Consider hotel and attraction areas",
      "Food Truck Bazaar is popular"
    ],
    sources: [
      "https://www.myfloridalicense.com/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "minneapolis-mn",
    name: "Minneapolis",
    state: "Minnesota",
    stateAbbrev: "MN",
    population: 430000,
    estFoodTrucks: 250,
    permits: [
      {
        type: "Mobile Food Vehicle License",
        description: "Minneapolis Health Department permit",
        issuingAgency: "Minneapolis Health Department",
        cost: 280,
        costPeriod: "annual",
        annualizedCost: 280,
        requirements: [
          "Food manager certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Manager Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.minneapolismn.gov/government/departments/health/",
        infoUrl: "https://www.minneapolismn.gov/government/departments/health/",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Minneapolis Health Department",
      phone: "(612) 673-2301",
      website: "https://www.minneapolismn.gov/government/departments/health/",
      inspectionRequired: true
    },
    restrictions: [
      "Seasonal limitations due to weather",
      "Downtown has designated zones",
      "Must comply with city vending ordinance"
    ],
    notes: [
      "Short season but dedicated customers",
      "Consider events and breweries",
      "Food truck rally events are popular"
    ],
    sources: [
      "https://www.minneapolismn.gov/government/departments/health/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "tampa-fl",
    name: "Tampa",
    state: "Florida",
    stateAbbrev: "FL",
    population: 400000,
    estFoodTrucks: 250,
    permits: [
      {
        type: "Mobile Food Dispensing Vehicle License",
        description: "Florida DBPR license for food trucks",
        issuingAgency: "Florida Department of Business & Professional Regulation",
        cost: 347,
        costPeriod: "annual",
        annualizedCost: 347,
        requirements: [
          "Food safety training",
          "Pass inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.myfloridalicense.com/",
        infoUrl: "https://www.myfloridalicense.com/",
        processingTime: "2-4 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "Hillsborough County Business Tax Receipt",
        description: "Local business license",
        issuingAgency: "Hillsborough County Tax Collector",
        cost: 100,
        costPeriod: "annual",
        annualizedCost: 100,
        requirements: [
          "Register business",
          "Valid state license"
        ],
        documents: [
          "State license",
          "Business registration"
        ],
        applicationUrl: "https://www.hillstax.org/",
        infoUrl: "https://www.hillstax.org/",
        processingTime: "1 week",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Florida Department of Business & Professional Regulation",
      phone: "(850) 487-1395",
      website: "https://www.myfloridalicense.com/",
      inspectionRequired: true
    },
    restrictions: [
      "Ybor City has special rules",
      "Must have property owner permission",
      "Beach areas may have additional permits"
    ],
    notes: [
      "Growing food truck scene",
      "Cuban and Latin cuisine is popular",
      "Consider brewery partnerships"
    ],
    sources: [
      "https://www.myfloridalicense.com/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "charlotte-nc",
    name: "Charlotte",
    state: "North Carolina",
    stateAbbrev: "NC",
    population: 900000,
    estFoodTrucks: 200,
    permits: [
      {
        type: "Mobile Food Unit Permit",
        description: "Mecklenburg County health permit",
        issuingAgency: "Mecklenburg County Health Department",
        cost: 325,
        costPeriod: "annual",
        annualizedCost: 325,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.mecknc.gov/healthdepartment/Pages/default.aspx",
        infoUrl: "https://www.mecknc.gov/healthdepartment/Pages/default.aspx",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      },
      {
        type: "City Business Privilege License",
        description: "City of Charlotte business license",
        issuingAgency: "City of Charlotte",
        cost: 125,
        costPeriod: "annual",
        annualizedCost: 125,
        requirements: [
          "Register business"
        ],
        documents: [
          "Business registration"
        ],
        applicationUrl: "https://charlottenc.gov/",
        infoUrl: "https://charlottenc.gov/",
        processingTime: "1-2 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Mecklenburg County Health Department",
      phone: "(704) 336-4700",
      website: "https://www.mecknc.gov/healthdepartment/",
      inspectionRequired: true
    },
    restrictions: [
      "Uptown has designated food truck zones",
      "Must have property owner permission",
      "Special event permits required"
    ],
    notes: [
      "Charlotte's food truck scene is growing",
      "Consider brewery districts",
      "South End is popular"
    ],
    sources: [
      "https://www.mecknc.gov/healthdepartment/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "boston-ma",
    name: "Boston",
    state: "Massachusetts",
    stateAbbrev: "MA",
    population: 700000,
    estFoodTrucks: 200,
    permits: [
      {
        type: "Mobile Food Vendor License",
        description: "City of Boston mobile food permit",
        issuingAgency: "Boston Inspectional Services Department",
        cost: 500,
        costPeriod: "annual",
        annualizedCost: 500,
        requirements: [
          "ServSafe certification",
          "Pass health inspection",
          "Commissary agreement",
          "Site assignment from city"
        ],
        documents: [
          "ServSafe Certificate",
          "Menu",
          "Commissary agreement",
          "Vehicle inspection"
        ],
        applicationUrl: "https://www.boston.gov/departments/inspectional-services",
        infoUrl: "https://www.boston.gov/departments/inspectional-services",
        processingTime: "4-6 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Boston Inspectional Services Department",
      phone: "(617) 635-5300",
      website: "https://www.boston.gov/departments/inspectional-services",
      inspectionRequired: true
    },
    restrictions: [
      "Very limited vending locations",
      "City assigns specific locations",
      "Many areas restricted",
      "Competitive application process"
    ],
    notes: [
      "Boston is challenging but worth it",
      "Lottery system for some locations",
      "Universities are key markets"
    ],
    sources: [
      "https://www.boston.gov/departments/inspectional-services"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "columbus-oh",
    name: "Columbus",
    state: "Ohio",
    stateAbbrev: "OH",
    population: 900000,
    estFoodTrucks: 200,
    permits: [
      {
        type: "Mobile Food Service Operation License",
        description: "Columbus Public Health food truck permit",
        issuingAgency: "Columbus Public Health",
        cost: 375,
        costPeriod: "annual",
        annualizedCost: 375,
        requirements: [
          "Food safety certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Safety Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://www.columbus.gov/publichealth/",
        infoUrl: "https://www.columbus.gov/publichealth/",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Columbus Public Health",
      phone: "(614) 645-7417",
      website: "https://www.columbus.gov/publichealth/",
      inspectionRequired: true
    },
    restrictions: [
      "Downtown has designated zones",
      "Must have property owner permission",
      "OSU area has special rules"
    ],
    notes: [
      "Columbus is food truck friendly",
      "OSU campus area is huge market",
      "Food truck festivals are popular"
    ],
    sources: [
      "https://www.columbus.gov/publichealth/"
    ],
    lastVerified: "2024-02-01"
  },
  {
    id: "indianapolis-in",
    name: "Indianapolis",
    state: "Indiana",
    stateAbbrev: "IN",
    population: 880000,
    estFoodTrucks: 150,
    permits: [
      {
        type: "Mobile Food Establishment Permit",
        description: "Marion County health permit for food trucks",
        issuingAgency: "Marion County Public Health Department",
        cost: 300,
        costPeriod: "annual",
        annualizedCost: 300,
        requirements: [
          "Food handler certification",
          "Pass health inspection",
          "Commissary agreement"
        ],
        documents: [
          "Food Handler Certificate",
          "Menu",
          "Commissary agreement"
        ],
        applicationUrl: "https://marionhealth.org/",
        infoUrl: "https://marionhealth.org/",
        processingTime: "2-3 weeks",
        renewalPeriod: "annual"
      }
    ],
    healthDept: {
      name: "Marion County Public Health Department",
      phone: "(317) 221-2000",
      website: "https://marionhealth.org/",
      inspectionRequired: true
    },
    restrictions: [
      "Monument Circle has restrictions",
      "Must have property owner permission",
      "Special events require permits"
    ],
    notes: [
      "Indy is becoming more food truck friendly",
      "Indy 500 and events offer big opportunities",
      "Mass Ave and Fountain Square are popular"
    ],
    sources: [
      "https://marionhealth.org/"
    ],
    lastVerified: "2024-02-01"
  }
];

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
