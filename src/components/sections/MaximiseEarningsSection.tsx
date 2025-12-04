"use client";

import Image from "next/image";
import { useState } from "react";

export function MaximiseEarningsSection() {
  const [selectedRevenue, setSelectedRevenue] = useState("Courses");

  return (
    <section className="bg-gradient-to-br from-purple-50 via-purple-50/50 to-pink-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Trusted By */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
            TRUSTED BY ~10,000 CONSULTANTS & ORGANISATIONS
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
            {["ENFLS", "KODNET", "LIA", "PlanniT", "TERMODO"].map((logo) => (
              <div
                key={logo}
                className="rounded-lg bg-white px-6 py-2 text-sm font-semibold text-purple-600 shadow-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
              DIVERSIFY REVENUE STREAM
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-purple-900 sm:text-5xl">
              Maximise earnings with limitless revenue streams.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-purple-700/80">
              Create diverse products and leverage powerful tools to maximize your
              revenue potential.
            </p>
          </div>

          {/* Revenue Stream Options */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Courses",
              "Communities",
              "Coaching & Consulting",
              "Membership",
              "Products",
              "Events",
              "Packages",
            ].map((stream) => (
              <button
                key={stream}
                onClick={() => setSelectedRevenue(stream)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  selectedRevenue === stream
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-purple-700 hover:bg-purple-50"
                }`}
              >
                {stream}
              </button>
            ))}
          </div>

          {/* Courses Card */}
          {selectedRevenue === "Courses" && (
            <div className="grid gap-6 rounded-2xl bg-white shadow-xl lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
                <h3 className="text-2xl font-bold">Courses</h3>
                <p className="text-purple-100">
                  Turn your knowledge into income. Create comprehensive courses and
                  sell them to your audience with zero marketing overhead.
                </p>
                <button className="mt-4 w-fit rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-purple-600 transition hover:bg-purple-50">
                  Learn More
                </button>
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl lg:rounded-r-2xl lg:rounded-l-none lg:h-auto">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Courses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-600 shadow-lg transition hover:bg-purple-50">
                    Subscribe for FREE course
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

