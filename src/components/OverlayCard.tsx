import { FaPlay } from "react-icons/fa";

export default function OverlayCard() {
  return (
    <div className="w-full max-w-md mx-auto p-3 bg-white rounded-2xl shadow-md relative scale-50 md:scale-90 left-14 md:left-0 top-6 md:top-0">
      {/* Subscribe Button */}
      <div className="absolute -top-17 -right-4 bg-white p-4 rounded-xl shadow-lg shadow-slate-400">
        <button className="rounded-full px-6 py-2 text-white shadow-lg bg-blue-500">Subscribe for $5.00/mo</button>
      </div>

      <div className="rounded-2xl shadow-sm bg-white">
        <div className="p-3 flex items-center gap-3">
          {/* Left ID Box */}
          <div className="bg-blue-100 text-blue-700 rounded-xl px-3 py-2 text-center">
            <p className="text-xs font-semibold">PT</p>
            <p className="text-lg font-bold">01</p>
          </div>

          {/* Middle Content */}
          <div className="flex-1">
            <h2 className="text-base font-semibold">Lady Dentaa Amoateng MBE</h2>
            <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
              <span>54 min</span>
              <span>•</span>
              <span>Oct 17, 2026</span>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3">
              <div className="bg-blue-400 h-1.5 rounded-full w-1/3"></div>
            </div>
          </div>

          {/* Play Button */}
          <button className="bg-blue-100 p-2 rounded-full text-blue-600 shadow-sm">
            <FaPlay size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
