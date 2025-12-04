"use client";

import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

export function PropertyFilters() {
  const [budgetRange, setBudgetRange] = useState([1500, 5000]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([
    "Villa",
    "Acreage",
  ]);
  const [selectedSuburbs, setSelectedSuburbs] = useState<string[]>([
    "90/10 BROWNS RD, Cranbrook",
  ]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleSuburb = (suburb: string) => {
    setSelectedSuburbs((prev) =>
      prev.includes(suburb)
        ? prev.filter((s) => s !== suburb)
        : [...prev, suburb]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <aside className="silka">
      <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm mb-5">
        <p className="flex-1 rounded-lg text-black text-xs font-semibold transition silka">
          Property Preference
        </p>
        <button className="flex justify-around space-x-1 items-center rounded-lg bg-[#F4F6F8] hover:bg-slate-200 px-3 py-3 text-xs font-semibold text-zinc-700 transition cursor-pointer">
          <span>Reset Filter</span> <GrPowerReset />
        </button>
      </div>
      <div className="w-full space-y-6 rounded-xl bg-white p-5 shadow-sm">
      {/* Property Overview and Saved Filters buttons */}

      {/* Rent Budget */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-900">Rent Budget</h3>
        <div className="mt-4">
          <div className="relative h-2 rounded-full bg-zinc-200">
            {/* Active range */}
            <div
              className="absolute inset-y-0 rounded-full bg-[#6C0443]"
              style={{
                left: `${((budgetRange[0] - 300) / (10000 - 300)) * 100}%`,
                width: `${((budgetRange[1] - budgetRange[0]) / (10000 - 300)) * 100}%`,
              }}
            />
            {/* Min slider */}
            <input
              type="range"
              min="300"
              max="10000"
              value={budgetRange[0]}
              onChange={(e) =>
                setBudgetRange([
                  Math.min(Number(e.target.value), budgetRange[1] - 100),
                  budgetRange[1],
                ])
              }
              className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6C0443] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-white"
            />
            {/* Max slider */}
            <input
              type="range"
              min="300"
              max="10000"
              value={budgetRange[1]}
              onChange={(e) =>
                setBudgetRange([
                  budgetRange[0],
                  Math.max(Number(e.target.value), budgetRange[0] + 100),
                ])
              }
              className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6C0443] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-white"
            />
          </div>
          <div className="mt-2 flex justify-between text-xs font-semibold text-zinc-700">
            <span>${budgetRange[0].toLocaleString()}</span>
            <span>${budgetRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Suburb */}
      <div>
        <p className="text-sm font-semibold text-zinc-800">Suburb</p>
        <div className="mt-3 space-y-2.5 text-xs text-zinc-600">
          {[
            "Patterson Drive, Cranbrook",
            "2-6 Shelby Dr, Greenvale",
            "90/10 BROWNS RD, Cranbrook",
          ].map((suburb) => (
            <label
              key={suburb}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <input
                type="checkbox"
                checked={selectedSuburbs.includes(suburb)}
                onChange={() => toggleSuburb(suburb)}
                className="h-4 w-4 rounded border-zinc-300 text-[#2A0019] focus:ring-[#2A0019]"
              />
              <span>{suburb}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type - Checkboxes */}
      <div>
        <p className="text-sm font-semibold text-zinc-800">Property</p>
        <div className="mt-3 space-y-2.5 text-xs text-zinc-600">
          {["House", "Unit", "Apartment", "Townhouse", "Villa", "Acreage"].map(
            (type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-2.5"
              >
                <input
                  type="checkbox"
                  checked={selectedPropertyTypes.includes(type)}
                  onChange={() => {
                    setSelectedPropertyTypes((prev) =>
                      prev.includes(type)
                        ? prev.filter((t) => t !== type)
                        : [...prev, type]
                    );
                  }}
                  className="h-4 w-4 rounded border-zinc-300 text-[#2A0019] focus:ring-[#2A0019]"
                />
                <span>{type}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <p className="text-sm font-semibold text-zinc-800">Amenities</p>
        <div className="mt-3 space-y-2.5 text-xs text-zinc-600">
          {["Pet Friendly", "Parking", "Private Pool"].map((amenity) => (
            <label
              key={amenity}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="h-4 w-4 rounded border-zinc-300 text-[#6C0443] focus:ring-[#6C0443]"
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>
      </div>
    </aside>
  );
}
