import { MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { WhatsAppIcon, FiverrIcon, UpworkIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Rank Link Agency for premium guest post and backlink services.',
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100085432185763&mibextid=ZbWKwL",
    icon: Facebook,
    bg: "bg-blue-600",
    desc: "Follow us on Facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/linkfuel_agency?igsh=YXh4aWd6MzNwMnM0",
    icon: Instagram,
    bg: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
    desc: "@linkfuel_agency",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hafiz-mueen-8a4819296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: LinkedInIcon,
    bg: "bg-blue-700",
    desc: "Hafiz Mueen",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923157588685",
    icon: WhatsAppIcon,
    bg: "bg-green-500",
    desc: "+92 315 7588685",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/akNP2eK",
    icon: FiverrIcon,
    bg: "bg-[#1DBF73]",
    desc: "Hire us on Fiverr",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01638af1e4b87142f3?mp_source=share",
    icon: UpworkIcon,
    bg: "bg-[#6FDA44]",
    desc: "Coming soon",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-24">
      <PageHeader title="Contact Us" subtitle="We would love to hear from you." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">

        {/* Main contact card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 mb-12">

          {/* Left panel */}
          <div className="w-full lg:w-5/12 bg-[#2D2B4A] p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BCD4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 animate-pulse pointer-events-none" />
            <h3 className="text-[#00BCD4] font-bold uppercase tracking-widest text-xs mb-3">
              GET IN TOUCH
            </h3>
            <h2 className="text-2xl font-bold mb-8 leading-tight">
              Don&apos;t hesitate to contact us for more information.
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-[#00BCD4] transition-colors">Head Office</h4>
                  <p className="text-gray-300 text-sm mt-0.5">T&amp;T Aabpara Society Lahore Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-110">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-[#00BCD4] transition-colors">Email Us</h4>
                  <a href="mailto:admin@ranklinkagency.com" className="text-gray-300 text-sm mt-0.5 hover:text-[#00BCD4] transition-colors break-all">
                    admin@ranklinkagency.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-110">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-green-400 transition-colors">WhatsApp</h4>
                  <a href="https://wa.me/923157588685" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm mt-0.5 hover:text-green-400 transition-colors">
                    +92 315 7588685
                  </a>
                </div>
              </div>
            </div>

            {/* Social links inside panel */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Find us on</p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-7/12 p-10 lg:p-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Send us a message</h2>
            <p className="text-gray-500 text-sm mb-8">Fill out the form below and we will get back to you shortly.</p>
            <ContactForm />
          </div>
        </div>

        {/* Social platforms row */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Connect with us</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, bg, desc }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-700">{label}</span>
                <span className="text-xs text-gray-400 text-center leading-tight">{desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.020482388996!2d74.2327896748091!3d31.413561752412612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900337dac6ae3%3A0xaabcdc5b0af3c8c4!2sT%20%26%20T%20Aabpara%20Housing%20Society%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1778191499670!5m2!1sen!2s"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: '14px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </div>
    </div>
  );
}
