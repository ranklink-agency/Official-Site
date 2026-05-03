export default function Stats() {
  return (
    <div
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need custom services?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Our team is ready to craft a custom guest posting or press release strategy that fits your
          unique business goals. Let&apos;s talk!
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-brand-yellow hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg gap-2 mb-20 uppercase"
        >
          Contact Us
        </a>

        <div className="border-t border-white/20 pt-16">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Let us build the bridge between your brand
            <br />
            and customer
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-16">
            We help businesses connect with their audience through powerful content and authoritative
            backlinks. With years of experience and thousands of successful projects, we ensure your
            brand earns trust, visibility, and measurable SEO results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '1,500+', label: 'Project Done' },
              { number: '578+', label: 'Happy Customer' },
              { number: '4.7', label: 'Customer Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-4xl font-extrabold text-cyan-500 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-bold uppercase text-sm tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
