"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800">
              Food Truck<span className="text-orange-500">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/cities" 
              className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
            >
              Browse Cities
            </Link>
            <Link 
              href="/search" 
              className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
            >
              Search
            </Link>
            <Button asChild variant="default" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/cities">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-600" />
            ) : (
              <Menu className="h-6 w-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/cities" 
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Cities
              </Link>
              <Link 
                href="/search" 
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Button asChild variant="default" className="bg-orange-500 hover:bg-orange-600 w-full">
                <Link href="/cities" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
