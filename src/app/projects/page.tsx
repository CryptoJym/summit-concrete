"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectSidebar } from "@/components/sections/ProjectSidebar";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <main id="main" className="pt-0 flex flex-1">
        <ProjectSidebar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectGrid activeFilter={activeFilter} />
      </main>
      <Footer />
    </div>
  );
}
