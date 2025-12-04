
import { Testimonial } from '@/types/types';
import { FaPlay, FaStar } from 'react-icons/fa';


export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full bg-white sm:rounded-3xl p-8 hover:shadow-3xl transition-all duration-300 hover:scale-95 silka">
      <div className="flex gap-6 h-full">
        <div className="relative shrink-0 w-64 h-64 rounded-2xl overflow-hidden group">
          <img
            src={testimonial.videoThumbnail}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="w-6 h-6 text-[#2d1b4e] ml-1" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1 clash-bold">
                {testimonial.name}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>{testimonial.role}</span>
                <span className="font-semibold flex items-center gap-1">
                  {testimonial.company}
                  {testimonial.companyIcon}
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {testimonial.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1">
            {testimonial.testimonial}
          </p>

          <div className="flex items-end justify-between">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1 clash-bold">
                {testimonial.earnings}
              </div>
              <div className="text-xs text-gray-500 font-semibold tracking-wider">
                {testimonial.earningsSubtext}
              </div>
            </div>

            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              {testimonial.platformIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}