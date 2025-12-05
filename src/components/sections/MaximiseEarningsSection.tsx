'use client';

import Image from 'next/image';
import { MdGroup, MdSchool, MdStorefront, MdMic, MdEvent, MdTrendingUp } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import OverlayCard from '../OverlayCard';

const tabs = [
  { id: 'courses', label: 'Courses', icon: BiBook },
  { id: 'communities', label: 'Communities', icon: MdGroup },
  { id: 'coaching', label: 'Coaching & Consulting', icon: MdSchool },
  { id: 'merchandise', label: 'Merchandise', icon: MdStorefront },
  { id: 'podcasts', label: 'Podcasts', icon: MdMic },
  { id: 'events', label: 'Events', icon: MdEvent },
  { id: 'brokerage', label: 'Brokerage', icon: MdTrendingUp },
];

export function MaximiseEarningsSection() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="w-full bg-linear-to-b from-[#F9C4FE00] via-[#FCDDFF80] to-[#F9C4FE00]">
      {/* Trust Banner */}
      <div className="text-center pt-16 pb-5  border-gray-100">
        <p className="text-xs md:text-sm text-gray-600 font-medium tracking-wide silka">
          TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
        </p>
      </div>

      {/* Company Logos */}
        <Marquee className='bg-linear-to-r from-white via-zinc-100 to-white marquee-fade'>
      <div className="flex items-center justify-center gap-6 md:gap-12 py-8 px-4 overflow-x-auto silka">
        <div className="text-gray-500 font-bold text-xl md:text-2xl whitespace-nowrap">LEVELS</div>
        <div className="text-gray-500 font-bold text-xl md:text-2xl whitespace-nowrap">KDONET</div>
        <div className="text-gray-500 font-semibold text-lg md:text-xl whitespace-nowrap">UIA</div>
        <div className="text-gray-500 font-semibold text-lg md:text-xl whitespace-nowrap">PlannIT</div>
        <div className="text-gray-500 text-sm md:text-base whitespace-nowrap">FASHION STUDIOS</div>
        <div className="text-gray-500 text-sm md:text-base whitespace-nowrap">NEWS</div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">RMO</span>
          </div>
          <span className="text-gray-500 font-semibold">BOX</span>
        </div>
        <div className="text-gray-500 font-bold text-xl md:text-2xl whitespace-nowrap">LEVELS</div>
        <div className="text-gray-500 font-bold text-xl md:text-2xl whitespace-nowrap">KDONET</div>
        <div className="text-gray-500 font-semibold text-lg md:text-xl whitespace-nowrap">UIA</div>
        <div className="text-gray-500 font-semibold text-lg md:text-xl whitespace-nowrap">PlannIT</div>
        <div className="text-gray-500 text-sm md:text-base whitespace-nowrap">FASHION STUDIOS</div>
        <div className="text-gray-500 text-sm md:text-base whitespace-nowrap">NEWS</div>
        <div className="flex items-center gap-1 whitespace-nowrap">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">RMO</span>
          </div>
          <span className="text-gray-500 font-semibold">BOX</span>
        </div>
      </div>
        </Marquee>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-linear-to-r from-[#FAC1FD] to-[#F75EFF] silka text-xs px-3 py-2 rounded-full uppercase tracking-wide font-bold">
            Diversify Revenue Stream
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6  clash-bold">
          Maximise earnings with
          <br />
          limitless revenue streams.
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12 silka">
          Create and sell courses, consulting services, and communities - with Zero
          <br className="hidden md:block" />
          marketing cost and a built-in sales network.
        </p>

        {/* Tabs */}
        <div className='flex justify-center items-center'>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 bg-white py-2 md:rounded-t-2xl lg:rounded-t-full md:rounded-b-2xl lg:rounded-b-full lg:w-[1150px]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all silka font-bold ${
                  isActive
                    ? 'bg-linear-to-b from-[#2A0019] to-[#5C0639] text-white shadow-lg'
                    : ' text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`w-7 h-7 flex items-center justify-center rounded-full  ${isActive ? 'text-blue-500 bg-white' : 'bg-linear-to-r from-slate-100 via-slate-200 to-slate-300'}`}>
                  <Icon className={`${isActive ? 'text-blue-500' : ''}`} />
                </div>
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
        </div>

        {/* Course Card */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative bg-linear-to-r from-[#4C002D] to-[#2A001975] lg:rounded-l-full  overflow-hidden shadow-2xl lg:pl-20">
            <div className="lg:grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 silka">
                <h2 className="text-3xl md:text-4xl font-bold text-white clash">
                  Courses
                </h2>

                <p className="text-purple-100 text-base leading-relaxed">
                  Turn your knowledge into structured, sellable products.
                </p>

                <p className="text-purple-100 text-base leading-relaxed">
                  Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement.
                </p>

                <p className="text-purple-100 text-base leading-relaxed">
                  Every course is optimised to deliver value and generate recurring income.
                </p>

                <div className="pt-4">
                  <button className="bg-[#2A0019] text-white font-semibold px-8 py-3 rounded-4xl hover:shadow-xl transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - Image and Card */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full aspect-video lg:rounded-l-full overflow-hidden shadow-xl rounded-lg mt-10 lg:mt-0">
                  <Image
                    src="https://images.pexels.com/photos/3727509/pexels-photo-3727509.jpeg"
                    alt="Person working on laptop"
                    fill
                    className="object-cover scale-110"
                  />

                  {/* Overlay Card */}
                  <div className='md:pt-32 md:pl-40'>
                    <OverlayCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
