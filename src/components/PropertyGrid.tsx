"use client";

import Image from "next/image";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { GiResize } from "react-icons/gi";

const heroProperties = [
  {
    id: 1,
    title: "Maple Grove Garden House",
    price: "$280",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    size: "3500sft",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Sunset Towers Elclosbet",
    price: "$960",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    size: "2800sft",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Riverside Retreat",
    price: "$280",
    location: "New York, USA",
    beds: 4,
    baths: 3,
    size: "3500sft",
    image:
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Golden Meadows",
    price: "$280",
    location: "New York, USA",
    beds: 6,
    baths: 4,
    size: "4500sft",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Ocean Sea Breeze",
    price: "$450",
    location: "New York, USA",
    beds: 3,
    baths: 2,
    size: "2200sft",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "The Urban Nest Lofts",
    price: "$380",
    location: "New York, USA",
    beds: 2,
    baths: 2,
    size: "1800sft",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

interface PropertyGridProps {
  onOpenGallery: () => void;
}

export function PropertyGrid({ onOpenGallery }: PropertyGridProps) {
  const [sortBy, setSortBy] = useState("Low to High");

  return (
    <section className="w-full space-y-5 silka">
      {/* Header with count and sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-zinc-800">
          <span className="text-lg font-semibold">Property</span> <span className="text-sm text-slate-400">--- Showing  result - (12)</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm focus:border-[#6C0443] focus:outline-none focus:ring-1 focus:ring-[#6C0443]"
          >
            <option>Low to High</option>
            <option>High to Low</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroProperties.map((property) => (
          <article
            key={property.id}
            className="group flex flex-col overflow-hidden rounded-xl border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <button
                onClick={onOpenGallery}
                className="absolute inset-0 bg-black/0 transition hover:bg-black/5"
              />
            </div>
            <div className="flex flex-col gap-2.5 px-4 pb-4 pt-3">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                <div className="flex items-center space-x-1">
                  <IoBedOutline />
                  <span>Bed-{property.beds.toString().padStart(2, "0")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineBathroom />
                  <span>Bathroom-{property.baths.toString().padStart(2, "0")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GiResize />
                  <span>{property.size}</span>
                </div>

              <div className=" items-start justify-evenly gap-2">
                <p className="text-[16px] font-semibold text-zinc-900">
                  {property.title}
                </p>
                <div className="flex items-center space-x-3">
                  <h3 className="text-[16px] font-semibold text-zinc-900">
                    {property.price}<span className="text-slate-500 text-[11px] font-medium">/Week</span>
                  </h3>
                  <p className="text-lg">.</p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {property.location}
                  </p>
                </div>
              </div>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`h-8 w-8 rounded-lg text-xs font-semibold transition ${
              num === 1
                ? "bg-[#6C0443] text-white"
                : "bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {num}
          </button>
        ))}
        <button className="h-8 rounded-lg bg-white px-3 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100">
          Next &gt;
        </button>
      </div>
    </section>
  );
}
