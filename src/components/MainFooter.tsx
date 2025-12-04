import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';

export function MainFooter() {
  return (
    <footer className="bg-linear-to-b from-[#251621] to-[#42233A] text-white relative overflow-hidden silka">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:mb-64 mb-16 relative z-10">
          <div>
            <h3 className="text-lg font-bold mb-6">About Us</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">hello.abc@gmail.com</li>
              <li className="text-gray-300 text-sm">+012233445667</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="Threads"
              >
                <SiThreads className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-white hover:text-[#3d2d47] transition-all"
                aria-label="TikTok"
              >
                <FaTiktok className="text-lg" />
              </a>
            </div>
            <p className="text-xs text-gray-400 md:mt-20 mt-10">
              © 2025 Havenix. All rights reserved.
            </p>
          </div>
        </div>

       <div className="absolute bottom-0 left-1/2 -translate-x-1/2  pointer-events-none whitespace-nowrap">
        <h2 className="text-[5rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none bg-linear-to-r from-[#8A7384] to-white bg-clip-text text-transparent alexandria">
          WiztecBD
        </h2>
       </div>

      </div>
    </footer>
  );
}
