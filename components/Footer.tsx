import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 to-orange-100 pt-32 pb-10 text-slate-800">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-full h-16 md:h-24 fill-[#fff7ed]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            transform="scale(1, -1) translate(0, -120)"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/rank_link_logo_nobg.png"
                alt="Rank Link Agency Logo"
                width={44}
                height={44}
                className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 object-contain"
              />
              <span className="font-bold text-xl md:text-2xl text-slate-900 transition-colors group-hover:text-red-600">
                Rank Link Agency
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-600 font-medium">
              RANK LINK AGENCY offers fast, and cheaper High-Quality Contextual
              Guest Post with dofollow or nofollow backlinks from High Authority
              relevant niche websites.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2.5 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2.5 bg-white text-pink-600 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:bg-pink-600 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2.5 bg-white text-blue-400 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:bg-blue-400 hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="p-2.5 bg-white text-red-600 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="font-bold text-lg text-slate-900 mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy",
                "Delivery Policy",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-brand-cyan transition-all text-sm font-medium flex items-center gap-2 group hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg text-slate-900 mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#00BCD4] group-hover:text-white">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:bg-white"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Company
                  </h4>
                  <p className="text-slate-900 font-bold text-lg group-hover:text-[#00BCD4] transition-colors">
                    Rank Link Agency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600 transition-all group-hover:bg-[#00BCD4] group-hover:text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Address
                  </h4>
                  <p className="text-gray-700 font-medium text-sm leading-snug group-hover:text-gray-900 transition-colors">
                    Chnadar Nagar chak no 2, district Nankana sahib
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600 transition-all group-hover:bg-[#00BCD4] group-hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Admin Email
                  </h4>
                  <a
                    href="mailto:admin@ranklinkagency.com"
                    className="text-gray-700 font-medium text-sm break-all group-hover:text-[#00BCD4] transition-colors"
                  >
                    admin@ranklinkagency.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 transition-all group-hover:bg-green-600 group-hover:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                    WhatsApp/Phone
                  </h4>
                  <a
                    href="tel:+923217765490"
                    className="text-gray-700 font-bold text-lg group-hover:text-green-600 transition-colors"
                  >
                    +92 321 7765490
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-orange-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            Copyright © 2026 Rank Link Agency, All rights reserved
          </p>
          <div className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
            <div
              className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm hover:shadow-md transition-shadow cursor-default"
              title="Visa"
            >
              <span className="font-bold text-blue-800 italic text-lg">
                VISA
              </span>
            </div>
            <div
              className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm hover:shadow-md transition-shadow cursor-default"
              title="Mastercard"
            >
              <div className="flex -space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80"></div>
              </div>
            </div>
            <div
              className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm hover:shadow-md transition-shadow cursor-default"
              title="Amex"
            >
              <span className="font-bold text-blue-500 text-sm">AMEX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
