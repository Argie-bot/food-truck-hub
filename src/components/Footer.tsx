import Link from "next/link";
import { Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Food Truck<span className="text-orange-500">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              The first comprehensive food truck permit database. 
              Know the requirements, costs, and deadlines before you roll.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cities" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  Browse All Cities
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  Search Permits
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cities/los-angeles-ca" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="/cities/austin-tx" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  Austin
                </Link>
              </li>
              <li>
                <Link href="/cities/portland-or" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  Portland
                </Link>
              </li>
              <li>
                <Link href="/cities/new-york-ny" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                  New York
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Food Truck Hub. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Data sourced from official government websites. Always verify with local authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}
