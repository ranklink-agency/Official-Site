import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Rank Link Agency',
  description: 'Get in touch with Rank Link Agency for premium guest post and backlink services.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader title="Contact Us" subtitle="We would love to hear from you." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="w-full lg:w-5/12 bg-[#2D2B4A] p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BCD4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <h3 className="text-[#00BCD4] font-bold uppercase tracking-widest text-sm mb-4">
              GET IN TOUCH
            </h3>
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Don&apos;t hesitate to contact us for more information.
            </h2>
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Head Office', desc: 'Chnadar Nagar chak no 2, district Nankana sahib' },
                { icon: Mail, title: 'Email Us', desc: 'admin@ranklinkagency.com' },
                { icon: Phone, title: 'Call us', desc: '+92 321 7765490' },
                { icon: MessageSquare, title: 'Skype', desc: 'live:.cid.a413a776fa56584b' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-[#00BCD4] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-10 lg:p-12 bg-white">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Send us a message</h2>
            <p className="text-gray-500 mb-8">Please fill out the form below and we will get back to you.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54752.61864147748!2d73.61902804863281!3d30.165261399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391807d9280d531b%3A0x7d066c1901c51883!2sMinchinabad%2C%20Bahawalnagar%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709664000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
