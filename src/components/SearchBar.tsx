"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const isLarge = size === "large";

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex gap-2 ${className}`}
    >
      <div className="relative flex-1">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 ${isLarge ? 'h-5 w-5' : 'h-4 w-4'}`} />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`pl-10 ${isLarge ? 'h-14 text-lg' : 'h-10'}`}
        />
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
