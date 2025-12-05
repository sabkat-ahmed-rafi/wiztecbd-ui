'use client'

import { Testimonial } from "@/types/types";
import { FaYoutube } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import TestimonialCard from "../TestimonialCard";
import { useEffect, useRef, useState } from "react";

const testimonials: Testimonial[] = [
{
  id: 1,
  name: 'Iva Ryan',
  role: 'Marketing manager at',
  company: 'Adobe',
  companyIcon: <SiAdobe className="w-4 h-4" />,
  tags: ['Content Creator', 'YouTuber', 'Growth Expert'],
  testimonial:
    'I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!',
  earnings: '$2M',
  earningsSubtext: 'EARNED IN HELENUL',
  rating: 5,
  videoThumbnail: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
  platformIcon: <FaYoutube className="w-6 h-6 text-red-600" />,
},
{
  id: 2,
  name: 'Sarah Mitchell',
  role: 'Digital Strategist at',
  company: 'Adobe',
  companyIcon: <SiAdobe className="w-4 h-4" />,
  tags: ['Content Creator', 'YouTuber', 'Growth Expert'],
  testimonial:
    'The analytics dashboard is incredibly powerful. It has helped me understand my audience better and optimize my content strategy effectively.',
  earnings: '$1.5M',
  earningsSubtext: 'EARNED IN HELENUL',
  rating: 5,
  videoThumbnail: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
  platformIcon: <FaYoutube className="w-6 h-6 text-red-600" />,
},
{
  id: 3,
  name: 'James Peterson',
  role: 'Growth Lead at',
  company: 'Adobe',
  companyIcon: <SiAdobe className="w-4 h-4" />,
  tags: ['Content Creator', 'YouTuber', 'Growth Expert'],
  testimonial:
    'This platform transformed how I approach content monetization. The community support and tools provided are unmatched in the industry.',
  earnings: '$3M',
  earningsSubtext: 'EARNED IN HELENUL',
  rating: 5,
  videoThumbnail: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
  platformIcon: <FaYoutube className="w-6 h-6 text-red-600" />,
},
{
  id: 4,
  name: 'Emily Chen',
  role: 'Creative Director at',
  company: 'Adobe',
  companyIcon: <SiAdobe className="w-4 h-4" />,
  tags: ['Content Creator', 'YouTuber', 'Growth Expert'],
  testimonial:
    'Working with this platform has been an absolute pleasure. The flexibility and control it gives creators is unprecedented in the market.',
  earnings: '$2.2M',
  earningsSubtext: 'EARNED IN HELENUL',
  rating: 5,
  videoThumbnail: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
  platformIcon: <FaYoutube className="w-6 h-6 text-red-600" />,
},
];

export function TestimonialsSection() {

  const CARD_WIDTH = 720;
  const GAP = 24;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isInitialized) return;

    const middleCardIndex = Math.floor(testimonials.length / 2) - 1;
    const scrollPosition = middleCardIndex * (CARD_WIDTH + GAP);
    scrollContainer.scrollLeft = scrollPosition;
    setIsInitialized(true);
  }, [isInitialized]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 5.8;
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <section className="bg-linear-to-b from-[#2A0019] to-[#3C4C5AD4] py-5 md:py-16 lg:py-12">
      <div className="md:space-y-10">
        <div className="text-center">
          <span className="inline-block rounded-full bg-purple-100 px-3 py-2 text-xs font-bold bg-linear-to-r from-[#FAC1FD] to-[#F75EFF] silka">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl text-white clash-bold font-extrabold">
            Trusted by Creators <br /> & Proven by Results.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white silka" >
            See how others grow with Growhube - real stories, real success.
          </p>
        </div>

        <div className="relative flex-1 flex items-center overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex md:gap-6 overflow-x-auto scrollbar-hide w-full"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="shrink-0 scale-50 md:scale-none"
              style={{
                width: `${CARD_WIDTH}px`,
                marginLeft: index === 0 ? 'calc(50vw - 360px)' : '0',
                marginRight: index === testimonials.length - 1 ? 'calc(50vw - 360px)' : '0',
               
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      </div>
     
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

