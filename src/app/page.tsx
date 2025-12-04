"use client";

import { useState } from "react";
import { PropertyFilters } from "@/components/PropertyFilters";
import { PropertyGrid } from "@/components/PropertyGrid";
import { CreatorSection } from "@/components/CreatorSection";
import { PropertyGalleryModal } from "@/components/PropertyGalleryModal";
import { MainHeader } from "@/components/MainHeader";
import { MainFooter } from "@/components/MainFooter";

export default function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <PropertyGalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

      <MainHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* Property Listing Section */}
        <section className="mb-16 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)]">
          <PropertyFilters />
          <PropertyGrid onOpenGallery={() => setGalleryOpen(true)} />
        </section>
      </main>

      {/* Creator Sections */}
      <CreatorSection />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

