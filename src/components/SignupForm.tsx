"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function SignupForm() {
  return (
    <div className="flex min-h-screen">
      {/* Left Column - Sign Up Form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 sm:px-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C0443] text-xl font-bold text-white">
              <FaArrowUp />
            </span>
            <span className="text-xl font-semibold text-[#6C0443]">WiztecBD</span>
          </div>

          {/* Heading */}
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Create New Account
          </h1>
          <p className="mb-8 text-sm text-zinc-600">
            Let's login to grab amazing deal
          </p>

          {/* Social Sign Up Buttons */}
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
              <FcGoogle size={26} />
              Continue with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
              <GrApple size={26} />
              Continue with Apple
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
              <MdOutlineAlternateEmail size={26} />
              Continue with Email/Phone
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-zinc-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#6C0443] underline hover:text-[#6C0443]">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column - Hero Section */}
      <div className="hidden lg:relative lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:overflow-hidden lg:bg-linear-to-br lg:from-[#6C0443] lg:via-[#6C0443] lg:to-indigo-900 xl:bg-linear-to-br xl:from-[#6C0443] xl:via-[#6C0443] xl:to-indigo-900">
        {/* Irregular blob shape */}
        <div className="relative h-full w-full">
          {/* City skyline background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="City skyline"
              fill
              className="object-cover opacity-60"
              sizes="50vw"
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-purple-900/80 via-purple-800/70 to-indigo-900/80" />

          {/* Irregular blob shape using clip-path - organic curved shape */}
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 75%, 95% 90%, 88% 98%, 0% 100%)",
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="City skyline"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/70 via-purple-800/60 to-indigo-900/70" />
            </div>
          </div>

          {/* Door frame in center - slightly ajar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-72 w-56 sm:h-96 sm:w-72">
              {/* Door frame - light blue-gray */}
              <div className="absolute inset-0 rounded-xl border-10 border-blue-200/90 bg-blue-100/30 backdrop-blur-md shadow-2xl" />
              {/* Open doors effect - slightly ajar */}
              <div className="absolute inset-0 flex">
                <div className="h-full w-[48%] rounded-l-xl border-r-4 border-blue-300/60 bg-blue-50/20" />
                <div className="h-full w-[52%] rounded-r-xl border-l-4 border-blue-300/60 bg-blue-50/20" />
              </div>
              {/* City view through doors */}
              <div className="absolute inset-3 overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="City view"
                  fill
                  className="object-cover brightness-110"
                  sizes="(max-width: 640px) 224px, 288px"
                />
              </div>
            </div>
          </div>

          {/* Marketing text at top-right */}
          <div className="absolute right-8 top-12 max-w-xs text-left">
            <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
              Browse thousands of properties to buy, sell, or rent with trusted
              agents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

