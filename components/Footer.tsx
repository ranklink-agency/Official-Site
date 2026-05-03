import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowRight, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon, FiverrIcon, UpworkIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100085432185763&mibextid=ZbWKwL",
    icon: Facebook,
    color: "hover:bg-blue-600 hover:text-white text-blue-600",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/linkfuel_agency?igsh=YXh4aWd6MzNwMnM0",
    icon: Instagram,
    color: "hover:bg-pink-600 hover:text-white text-pink-600",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hafiz-mueen-8a4819296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: LinkedInIcon,
    color: "hover:bg-blue-700 hover:text-white text-blue-700",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923157588685",
    icon: WhatsAppIcon,
    color: "hover:bg-green-500 hover:text-white text-green-500",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/akNP2eK",
    icon: FiverrIcon,
    color: "hover:bg-[#1DBF73] hover:text-white text-[#1DBF73]",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01638af1e4b87142f3?mp_source=share",
    icon: UpworkIcon,
    color: "hover:bg-[#6FDA44] hover:text-white text-[#6FDA44]",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 to-orange-100 pt-32 pb-10 text-slate-800">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full pointer-events-none">
        <svg
          className="relative block w-full h-16 md:h-24 fill-[#fff7ed]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            transform="scale(1, -1) translate(0, -120)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
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
              RANK LINK AGENCY offers fast, affordable High-Quality Contextual
              Guest Posts with dofollow backlinks from High Authority
              relevant niche websites.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  title={label}
                  className={`p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-lg text-slate-900 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-yellow rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Refund Policy", href: "#" },
                { name: "Delivery Policy", href: "#" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-brand-cyan transition-all text-sm font-medium flex items-center gap-2 group hover:translate-x-1 w-fit"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg text-slate-900 mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-yellow rounded-full" />
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#00BCD4]">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:bg-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Company</h4>
                  <p className="text-slate-900 font-bold group-hover:text-[#00BCD4] transition-colors">Rank Link Agency</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600 transition-all group-hover:bg-[#00BCD4] group-hover:text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Address</h4>
                  <p className="text-gray-700 font-medium text-sm leading-snug group-hover:text-gray-900 transition-colors">
                    Chnadar Nagar chak no 2, district Nankana sahib
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600 transition-all group-hover:bg-[#00BCD4] group-hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</h4>
                  <a
                    href="mailto:admin@ranklinkagency.com"
                    className="text-gray-700 font-medium text-sm break-all group-hover:text-[#00BCD4] transition-colors"
                  >
                    admin@ranklinkagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 transition-all group-hover:bg-green-500 group-hover:text-white">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">WhatsApp</h4>
                  <a
                    href="https://wa.me/923157588685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-bold text-lg group-hover:text-green-600 transition-colors"
                  >
                    +92 315 7588685
                  </a>
                </div>
              </div>

              {/* Freelance Platforms */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.fiverr.com/s/akNP2eK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-[#1DBF73] hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <FiverrIcon className="w-4 h-4" />
                  Fiverr
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01638af1e4b87142f3?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-[#6FDA44] hover:bg-[#6FDA44] hover:text-white hover:border-[#6FDA44] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <UpworkIcon className="w-4 h-4" />
                  Upwork
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-orange-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            Copyright © 2025 Rank Link Agency. All rights reserved.
          </p>
          <div className="flex gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm" title="Visa">
              <span className="font-bold text-blue-800 italic text-lg">VISA</span>
            </div>
            <div className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm" title="Mastercard">
              <div className="flex -space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500 opacity-80" />
                <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80" />
              </div>
            </div>
            <div className="h-8 bg-white px-3 border border-gray-200 rounded flex items-center shadow-sm" title="Amex">
              <span className="font-bold text-blue-500 text-sm">AMEX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
