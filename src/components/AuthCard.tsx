"use client";

import Image from "next/image";
import { useState } from "react";

export function AuthCard() {
  const [mode, setMode] = useState<"login" | "register">("register");

  const isLogin = mode === "login";

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/80 shadow-[0_40px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:flex-row">
      <div className="w-full px-8 py-10 sm:px-12 sm:py-12 lg:max-w-md lg:px-14 lg:py-14">
        <div className="mb-8 flex items-center gap-2 text-purple-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-lg font-bold text-white shadow-lg shadow-purple-500/40">
            ⌂
          </span>
          <span className="text-xl font-semibold tracking-tight">WiztecBD</span>
        </div>
        <div className="mb-6 flex gap-2 rounded-full bg-zinc-100 p-1 text-sm font-medium text-zinc-500">
          <button
            onClick={() => setMode("register")}
            className={`flex-1 rounded-full px-3 py-2 transition ${
              !isLogin
                ? "bg-white text-zinc-900 shadow-sm"
                : "hover:text-zinc-900"
            }`}
          >
            Create account
          </button>
          <button
            onClick={() => setMode("login")}
            className={`flex-1 rounded-full px-3 py-2 transition ${
              isLogin ? "bg-white text-zinc-900 shadow-sm" : "hover:text-zinc-900"
            }`}
          >
            Login
          </button>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {isLogin ? "Welcome back" : "Create New Account"}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          {isLogin
            ? "Let’s login to grab amazing deals on top-rated properties."
            : "Join thousands of renters and buyers finding their next home."}
        </p>

        <div className="mt-8 space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:shadow-md">
            <span className="text-lg">🟦</span>
            Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:shadow-md">
            <span className="text-lg"></span>
            Continue with Apple
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:shadow-md">
            <span className="text-lg">✉️</span>
            Continue with Email / Phone
          </button>
        </div>

        <div className="my-6 flex items-center gap-4 text-xs text-zinc-400">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
          <span>or</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <form className="space-y-4">
          <div className="space-y-1.5 text-sm">
            <label htmlFor="email" className="block text-xs font-medium text-zinc-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/60 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-purple-400 focus:bg-white focus:shadow-[0_0_0_1px_rgba(168,85,247,0.35)]"
            />
          </div>
          <div className="space-y-1.5 text-sm">
            <label htmlFor="password" className="block text-xs font-medium text-zinc-500">
              Password
            </label>
            <div className="flex items-center rounded-xl border border-zinc-200 bg-zinc-50/60 px-3.5 py-2.5 text-sm text-zinc-900 focus-within:border-purple-400 focus-within:bg-white focus-within:shadow-[0_0_0_1px_rgba(168,85,247,0.35)]">
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border-none bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                className="ml-2 text-xs font-medium text-zinc-500 hover:text-zinc-800"
              >
                Show
              </button>
            </div>
          </div>

          {isLogin ? (
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-zinc-300 text-purple-600 focus:ring-purple-500"
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="font-medium text-purple-600 hover:text-purple-700">
                Forgot password?
              </button>
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:to-pink-500 hover:shadow-purple-500/50"
          >
            {isLogin ? "Login" : "Create account"}
          </button>
        </form>

        <p className="mt-5 text-xs text-zinc-500">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setMode(isLogin ? "register" : "login")}
            className="font-semibold text-purple-600 hover:text-purple-700"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>

      <div className="relative hidden min-h-[420px] flex-1 bg-sky-100/80 p-4 md:block">
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-sky-500 via-sky-700 to-indigo-900">
          <Image
            src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="City skyline"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 50vw, 640px"
          />
          <div className="absolute inset-6 rounded-[1.8rem] border border-white/30 bg-gradient-to-b from-white/15 via-white/5 to-white/0 p-6 text-white">
            <p className="max-w-xs text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              Browse thousands of properties to buy, sell, or rent with trusted
              agents.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs shadow-lg backdrop-blur">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-[0.7rem] font-semibold">
                LIVE
              </span>
              <span>21,500+ verified properties on WiztecBD</span>
            </div>
            <div className="mt-auto flex gap-4 pt-10 text-xs sm:text-sm">
              <div className="rounded-2xl bg-black/40 px-4 py-3 shadow-md backdrop-blur">
                <p className="text-xs text-white/60">Average rating</p>
                <p className="mt-1 text-lg font-semibold">4.9</p>
                <p className="text-[0.7rem] text-white/60">from 15k+ reviews</p>
              </div>
              <div className="rounded-2xl bg-black/40 px-4 py-3 shadow-md backdrop-blur">
                <p className="text-xs text-white/60">Avg. viewing time</p>
                <p className="mt-1 text-lg font-semibold">4 days</p>
                <p className="text-[0.7rem] text-white/60">to close a deal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


