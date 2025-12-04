import Link from "next/link";
import { HiHeart } from "react-icons/hi";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#6C0443] text-white">
            <span className="text-lg font-bold">⌂</span>
          </div>
          <span className="text-xl font-bold text-[#6C0443]">WiztecBD</span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          <Link href="#" className="hover:text-[#6C0443]">
            Buy
          </Link>
          <Link href="#" className="hover:text-[#6C0443]">
            Rent
          </Link>
          <Link href="#" className="hover:text-[#6C0443]">
            Sell
          </Link>
          <Link href="#" className="hover:text-[#6C0443]">
            Agent
          </Link>
          <Link href="#" className="hover:text-[#6C0443]">
            Blog
          </Link>
          <Link href="#" className="hover:text-[#6C0443]">
            Contact Us
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-[#6C0443] sm:flex">
            <HiHeart className="h-5 w-5" />
            Favourite
          </button>
          <Link
            href="/login"
            className="rounded-lg bg-[#59344F] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#3d2634]"
          >
            Login Now
          </Link>
        </div>
      </div>
    </header>
  );
}
