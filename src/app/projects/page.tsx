"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ProjectSidebar } from "@/components/sections/ProjectSidebar";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <div className="pt-0 flex min-h-screen">
        <ProjectSidebar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectGrid activeFilter={activeFilter} />
      </div>
    </div>
  );
}
