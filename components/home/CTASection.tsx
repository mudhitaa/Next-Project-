import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-[#1b1714] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-br from-amber-900/40 via-stone-900 to-stone-950 border border-amber-800/30 overflow-hidden px-8 py-16 sm:px-16 text-center">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-900/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative">
            <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">Join the Community</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white font-serif max-w-2xl mx-auto leading-tight">
              Ready to Experience Art Differently?
            </h2>
            <p className="mt-6 text-stone-400 max-w-xl mx-auto leading-relaxed">
              Subscribe to our newsletter for exhibition announcements, artist spotlights, and exclusive behind-the-scenes content.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:flex-1 px-5 py-3 rounded-full bg-stone-900 border border-stone-700 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500/60 transition-colors"
              />
              <button className="w-full sm:w-auto px-7 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/gallery"
                className="px-7 py-3 bg-white/5 hover:bg-white/10 border border-stone-700 text-stone-300 rounded-full text-sm font-medium transition-colors"
              >
                Browse Gallery
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 border border-amber-700/50 text-amber-400 hover:bg-amber-500/10 rounded-full text-sm font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};