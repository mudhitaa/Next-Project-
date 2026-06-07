import Link from "next/link";
import Image from "next/image";
import aboutimg1 from "@/public/about1.jpg";
import aboutimg2 from "@/public/about2.jpg";

export const AboutSection = () => {
  return (
    <section className="bg-[#1b1714] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-96 lg:h-120">
            <div className="absolute top-0 left-0 w-3/5 h-4/5 rounded-2xl overflow-hidden">
            <Image
              src={aboutimg1}
              alt="Arts"
              fill
              className="object-cover"
            />
            </div>
            <div className="absolute bottom-0 right-0 w-2/5 h-3/5 rounded-2xl overflow-hidden border-4 border-[#130f0c]">
              <Image
                src={aboutimg2}
                alt="Painting detail"
                fill
                className="object-cover"
              />
            </div>
  
          </div>

          
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">Who We Are</span>
            <h2 className="mt-4 text-4xl font-bold text-white font-serif leading-tight">
              A Space Where Art Breathes &amp; Artists Flourish
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed">
              StrokeWorks was founded on the belief that painting is one of humanity's most powerful languages. We curate immersive exhibitions and build genuine community around the canvas — from intimate studio sessions to large-scale shows.
            </p>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Whether you're an established painter, an emerging talent, or simply someone who finds joy in color and form, you belong here.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 mt-8 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              Learn more about us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};