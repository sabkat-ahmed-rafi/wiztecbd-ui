"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2716391/pexels-photo-2716391.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

interface PropertyGalleryModalProps {
  open: boolean;
  onClose: () => void;
}

export function PropertyGalleryModal({ open, onClose }: PropertyGalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-5xl rounded-3xl bg-white shadow-2xl shadow-black/20 animate-modal-in">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-600 shadow-sm transition hover:bg-white hover:text-zinc-900"
            aria-label="Close gallery"
          >
            ✕
          </button>
          <div className="relative h-[260px] xs:h-[320px] md:h-[420px] lg:h-[460px] w-full overflow-hidden">
            <Image
              src={galleryImages[activeIndex]}
              alt="Featured property"
              fill
              className="object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
          <div className="flex gap-3 overflow-x-auto border-t border-zinc-100 bg-white px-6 py-4">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                onClick={() => setActiveIndex(index)}
                className={`group relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 ${
                  index === activeIndex
                    ? "border-[#6C0443] shadow-[0_0_0_2px_rgba(147,51,234,0.15)]"
                    : "border-zinc-200 hover:border-purple-300 hover:shadow-md"
                }`}
              >
                <Image
                  src={src}
                  alt={`Property thumbnail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="112px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


