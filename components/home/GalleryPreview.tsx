import Link from "next/link";

const artworks = [
  {
    src: "/heromain.avif",
    title: "Golden Horizon",
    artist: "Maya Chen",
    medium: "Oil on Canvas",
  },
  {
    src: "/hero1.avif",
    title: "Urban Echoes",
    artist: "Daniel Reeves",
    medium: "Acrylic",
  },
  {
    src: "/emptyhall.avif",
    title: "Silent Forest",
    artist: "Priya Nair",
    medium: "Watercolour",
  },
  {
    src: "/hand.jpg",
    title: "Blue Reverie",
    artist: "Leo Fontaine",
    medium: "Mixed Media",
  },
];

export const GalleryPreview = () => {
  return (
    <section className="bg-[#130f0c] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">
              Curated Works
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white font-serif">
              Featured Gallery
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            View full gallery
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {artworks.map((art) => (
            <Link
              href="/gallery"
              key={art.title}
              className="group block rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <p className="text-white font-semibold text-sm">
                  {art.title}
                </p>
                <p className="text-stone-500 text-xs mt-1">
                  {art.artist} · {art.medium}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};