"use client";

import { useState } from "react";
import { projectFilters } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

interface ProjectSidebarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectSidebar({ activeFilter, onFilterChange }: ProjectSidebarProps) {
  return (
    <aside className="w-80 fixed top-20 bottom-0 left-0 border-r-2 border-asphalt bg-cured z-30 overflow-y-auto hidden lg:flex flex-col p-8 justify-between">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-display text-4xl font-bold mb-6 leading-none uppercase">
            PROJECT<br />LOG
          </h2>
          <div className="h-1 w-20 bg-asphalt mb-8" />
          <form className="flex flex-col gap-3 font-mono">
            {projectFilters.map((filter) => (
              <label key={filter.id} className="cursor-pointer group relative block">
                <input
                  type="radio"
                  name="filter"
                  checked={activeFilter === filter.id}
                  onChange={() => onFilterChange(filter.id)}
                  className="peer sr-only brutalist-checkbox"
                />
                <div className="border-2 border-asphalt p-3 flex items-center justify-between bg-white hover:bg-gray-100 transition-colors peer-checked:bg-primary peer-checked:text-asphalt">
                  <span className="font-bold text-sm tracking-tight">{filter.label}</span>
                  <MaterialIcon name={filter.icon} className="check-icon opacity-0 peer-checked:opacity-100 text-lg" />
                </div>
              </label>
            ))}
          </form>
        </div>
      </div>
      <div className="border-t-2 border-asphalt pt-6">
        <div className="font-mono text-xs text-rebar mb-2">DATABASE STATUS</div>
        <div className="flex items-center gap-2 mb-2">
          <div className="size-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-bold text-sm">LIVE CONNECTION</span>
        </div>
        <div className="font-mono text-sm border border-asphalt bg-surface p-2">
          TOTAL YARDS: 1.2M<br />
          RECORDS: 842
        </div>
      </div>
    </aside>
  );
}
