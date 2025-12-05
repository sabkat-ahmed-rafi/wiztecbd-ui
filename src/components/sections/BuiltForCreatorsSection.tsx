"use client";

import Marquee from "react-fast-marquee";
import FloatingEllipse from "../FloatingEllipse";
import styles from "./growhubs-hero.module.css";


export function BuiltForCreatorsSection() {

  const centerX = 500;
  const centerY = 50;
  const orbitRadius = 360;

  return (
    <section className="relative overflow-hidden bg-[#2A0019] text-white pb-40 pt-32 silka">
      
      {/* Glowing Ellipse #1 */}
      <FloatingEllipse
        className={`${styles.ellipseBase} ${styles.ellipse1}`}
        speed={1}
        radius={orbitRadius}
        baseX={centerX}
        baseY={centerY}
        offset={0}
      />

      <FloatingEllipse
        className={`${styles.ellipseBase} ${styles.ellipse2}`}
        speed={1}
        radius={orbitRadius}
        baseX={centerX}
        baseY={centerY}
        offset={Math.PI / 2}
      />

      <FloatingEllipse
        className={`${styles.ellipseBase} ${styles.ellipse3}`}
        speed={1}
        radius={orbitRadius}
        baseX={centerX}
        baseY={centerY}
        offset={Math.PI}
      />

      <FloatingEllipse
        className={`${styles.ellipseBase} ${styles.ellipse4}`}
        speed={1}
        radius={orbitRadius}
        baseX={centerX}
        baseY={centerY}
        offset={Math.PI * 1.5}
      />

      {/* Left stars */}
      <div className="absolute left-40 inset-0 z-0 pointer-events-none">
        <span className="absolute left-10 top-40 text-white text-xl">󠁯•󠁏</span>
        <span className="absolute left-24 top-64 text-white/70 text-2xl">󠁯•󠁏</span>
        <span className="absolute left-8 top-96 text-white/40 text-lg">󠁯•󠁏</span>
        <span className="absolute left-16 top-108 text-white/20 text-lg">󠁯•󠁏</span>
      </div>

      {/* Right stars */}
      <div className="absolute right-40 inset-0 z-0 pointer-events-none">
        <span className="absolute right-10 top-44 text-white text-lg">󠁯•󠁏</span>
        <span className="absolute right-24 top-72 text-white/20 text-xl">󠁯•󠁏</span>
        <span className="absolute right-14 top-96 text-white/50 text-2xl">󠁯•󠁏</span>
      </div>


      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <span className="text-sm tracking-wide bg-[#1B162699] px-4 py-1 rounded-full backdrop-blur ">
          BUILD FOR YOU
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight clash-bold bg-linear-to-r from-[#FFFFFF] to-[#A5C5DD] bg-clip-text text-transparent">
           <span className="">Built for Creators</span>.<br />
           <span className="">Powered for Profit</span>
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
          Create and sell courses, consulting services, and communities – 
          with zero marketing cost and a built-in sales network.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative w-full sm:max-w-xl">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 pr-36 py-5  bg-[#3B3B4B]  text-white rounded-l-full rounded-r-full"
            />

            <button className="absolute top-1/2 -translate-y-1/2 right-0 px-4 py-2 rounded-md bg-linear-to-b from-[#693FFFFC] to-[#C02EE5] text-white text-sm font-medium hover:opacity-90 transition whitespace-nowrap scale-95 rounded-l-full rounded-r-full">
                  Start for Free <br />
                  <span className="text-xs">No credit card required</span>
            </button>
          </div>
        </div>


        <p className="mt-2 text-xs text-white/50">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
      </div>

      {/* Stats Box */}
      <div className="relative z-10 max-w-5xl mx-auto mt-24 bg-transparent bg-blend-color-burn border border-white/10 rounded-3xl py-10 backdrop-blur-xl">
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold clash">
            Sell from day one – even with zero audience
          </h2>

          <button className="px-4 py-2 rounded-4xl border border-white text-sm hover:bg-white/10 transition">
            Open calculator
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-3xl font-semibold clash">21,500+</p>
            <p className="text-white/60 text-sm mt-1">People who can co-promote</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-3xl font-semibold clash">86</p>
            <p className="text-white/60 text-sm mt-1">With zero personal audience</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-3xl font-semibold clash">US$774</p>
            <p className="text-white/60 text-sm mt-1">From membership sales</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-3xl font-semibold clash">US$300</p>
            <p className="text-white/60 text-sm mt-1">Just by co-selling</p>
          </div>
        </div>
        </div>

        <p className="mt-8 py-3 text-center w-full text-sm text-[#695F4C] bg-[#FFF3D8]">
        <Marquee direction="right">
          Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
          clients inside the platform so you can sell from day one.
        </Marquee>
        </p>
      </div>

    </section>
  );
}
