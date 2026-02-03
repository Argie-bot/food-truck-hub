# 🚚 Food Truck Permit Hub

**Know Before You Roll** — The first comprehensive food truck permit database with live permit status.

Find permit requirements, costs, and deadlines for operating a food truck in any major US city. Stop Googling. Start operating.

![Food Truck Hub](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **25+ Cities** — Comprehensive permit data for all major US food truck markets
- **Real Gov Data** — Sourced directly from official city and county websites
- **Cost Calculator** — See total annual permit costs at a glance
- **Direct Links** — One-click access to official application pages
- **Mobile-First** — Fully responsive design for on-the-go food truckers
- **Fast** — Static generation for instant page loads

## 🎯 Pages

### Home (`/`)
- Hero section with search
- Featured cities grid (top 8 by truck count)
- Value proposition cards

### Cities Directory (`/cities`)
- All 25 cities in a filterable grid
- Filter by state
- Sort by name, truck count, or permit cost

### City Detail (`/cities/[cityId]`)
- Complete permit breakdown
- Cost and renewal information
- Health department contacts
- Operating restrictions
- Local tips and notes
- Links to official sources

### Search (`/search?q=...`)
- City and state search
- Instant results with suggestions

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Deployment:** Vercel (recommended)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Argie-bot/food-truck-hub.git
cd food-truck-hub

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
food-truck-hub/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── cities/
│   │   │   ├── page.tsx          # Directory
│   │   │   └── [cityId]/page.tsx # City detail
│   │   ├── search/page.tsx       # Search results
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── ui/                   # shadcn components
│   │   ├── CityCard.tsx
│   │   ├── PermitCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── cities.ts             # Data loader + types
├── data/
│   ├── cities-1-13.json          # Research data (cities 1-13)
│   └── cities-14-25.json         # Research data (cities 14-25)
└── public/
```

## 🎨 Design System

**Colors:**
- Primary: Orange (`#F97316`) — food/energy vibes
- Secondary: Slate (`#1E293B`) — professional
- Accent: White, light gray backgrounds
- Success: Green for verified badges

**Typography:**
- Font: Inter (system fallback)
- Headings: Bold, clean
- Body: 16px base, readable

## 📊 Data Sources

All permit data is sourced from official government websites:
- City health departments
- County environmental health divisions
- State licensing agencies
- Official fee schedules

**Disclaimer:** Requirements change. Always verify with local authorities before applying.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy!

Or use the Vercel CLI:
```bash
vercel --prod
```

## 📝 License

MIT

## 🤝 Contributing

PRs welcome! If you find outdated permit info, please open an issue.

---

Built with ❤️ for food truckers everywhere.
