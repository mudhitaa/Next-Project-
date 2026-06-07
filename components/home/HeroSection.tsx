import Link from "next/link";
import Image from "next/image";
import hero1 from "@/public/hero1.avif";
import heromain from "@/public/heromain.avif";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] bg-[#1b1714] flex items-center overflow-hidden">
     

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-150 h-150 rounded-full bg-amber-600/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-125 h-125 rounded-full bg-rose-900/10 blur-[100px]" />
        

        <svg className="absolute top-10 right-10 w-64 h-64 opacity-5" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 Q80 20 160 80 Q200 110 180 160" stroke="#c9a84c" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M10 140 Q60 60 140 100" stroke="#c9a84c" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
        <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-5" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#c9a84c" strokeWidth="3" />
          <path d="M40 100 Q100 40 160 100 Q100 160 40 100Z" stroke="#c9a84c" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs tracking-[0.3em] text-amber-400 uppercase mb-6 border border-amber-500/30 px-3 py-1 rounded-full">
              Current Exhibition Open
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-serif leading-[1.1] mb-6">
              Where Every{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
                Stroke
              </span>{" "}
              Tells a Story
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-lg">
              Welcome to a vibrant community of painters, collectors, and art lovers. Discover curated exhibitions, connect with artists, and find your next masterpiece.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-colors duration-200 text-sm"
              >
                Explore Gallery
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3.5 border border-stone-700 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 font-medium rounded-full transition-colors duration-200 text-sm"
              >
                Our Story
              </Link>
            </div>

            
            <div className="flex gap-10 mt-14 pt-10 border-t border-stone-800">
              {[
                { value: "240+", label: "Artworks" },
                { value: "80+", label: "Artists" },
                { value: "12", label: "Exhibitions" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white font-serif">{stat.value}</p>
                  <p className="text-xs text-stone-500 mt-1 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative h-120 hidden lg:block">
            <div className="absolute top-8 right-16 w-64 h-80 rounded-2xl bg-stone-800/60 border border-stone-700/50 rotate-6 overflow-hidden">
              <Image
              src={hero1}
              alt="Arts"
              fill
              className="w-full h-full object-cover opacity-80"
            />
            </div>
            <div className="absolute top-4 left-8 w-64 h-80 rounded-2xl  border border-stone-700/50 -rotate-3 overflow-hidden shadow-2xl">
              <Image
                src={heromain}
                alt="Main Hero Image"
                fill
                className="w-full h-full object-cover"
              />
              
            </div>

            {/* label */}
            <div className="absolute bottom-10 left-2 bg-[#0f0d0b]/90 backdrop-blur border border-amber-900/40 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-amber-400 font-medium">Featured This Month</p>
              <p className="text-white text-sm font-semibold mt-0.5">Autumn Reverie Series</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};