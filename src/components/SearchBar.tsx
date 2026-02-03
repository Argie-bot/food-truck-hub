"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cities, type City } from "@/data/cities";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: "default" | "large";
  initialValue?: string;
}

export function SearchBar({ 
  placeholder = "Search by city (e.g., Austin, Chicago, Miami)", 
  className = "",
  size = "default",
  initialValue = ""
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filter cities as user types
  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = cities.filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        city.state.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limit to 8 suggestions
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          selectCity(suggestions[selectedIndex]);
        } else if (query.trim()) {
          router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const selectCity = (city: City) => {
    setQuery(city.name);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    router.push(`/cities/${city.id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndex >= 0) {
      selectCity(suggestions[selectedIndex]);
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(document.activeElement)) {
        setShowSuggestions(false);
      }
    }, 150);
  };

  const isLarge = size === "large";

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex gap-2 ${className}`}
    >
      <div className="relative flex-1">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 ${isLarge ? 'h-5 w-5' : 'h-4 w-4'} z-10`} />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onFocus={() => query.trim() && setSuggestions(suggestions)}
          placeholder={placeholder}
          className={`pl-10 ${isLarge ? 'h-14 text-lg' : 'h-10'}`}
          autoComplete="off"
        />
        
        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div 
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-md shadow-lg z-50 mt-1 max-h-64 overflow-y-auto"
          >
            {suggestions.map((city, index) => (
              <button
                key={city.id}
                type="button"
                className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors border-b border-slate-100 last:border-b-0 ${
                  index === selectedIndex ? 'bg-orange-50' : ''
                }`}
                onClick={() => selectCity(city)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-800">{city.name}</div>
                    <div className="text-sm text-slate-500">{city.state}</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {city.permits.length} permits
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <Button 
        type="submit" 
        className={`bg-orange-500 hover:bg-orange-600 ${isLarge ? 'h-14 px-8 text-lg' : ''}`}
      >
        Search
      </Button>
    </form>
  );
}
