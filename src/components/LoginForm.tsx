"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { FaArrowUp, FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("sabkatahmedrafi@gmail.com");

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Login Form */}
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
            Wellcome Back
          </h1>
          <p className="mb-8 text-sm text-zinc-600">
            Let's login to grab amazing deal
          </p>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
              <FcGoogle size={26} />
              Continue with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50">
              <GrApple size={26} />
              Continue with Apple
            </button>
          </div>

          {/* Separator */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-300" />
            <span className="text-xs text-zinc-500">Or</span>
            <div className="h-px flex-1 bg-zinc-300" />
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#6C0443] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-zinc-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  defaultValue="a;sldfjal;skdfj"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2.5 pr-10 text-sm text-zinc-900 outline-none transition focus:border-[#6C0443] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300 text-[#6C0443] focus:ring-[#6C0443]"
                />
                <span>Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-medium text-[#6C0443] hover:text-[#6C0443]"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#6C0443] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#480f31]"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-zinc-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#6C0443] underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column - Hero Section */}
      <div className="hidden lg:relative lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:overflow-hidden lg:bg-linear-to-br lg:from-purple-900 lg:via-purple-800 lg:to-indigo-900 xl:bg-linear-to-br xl:from-purple-900 xl:via-purple-800 xl:to-indigo-900">
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

