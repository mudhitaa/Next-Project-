import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Blog3 from "@/public/blog3.jpg";
import blog1 from "@/public/war.avif";
import blog2 from "@/public/team.avif";

type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string | StaticImageData;
};

const posts: Post[] = [
  {
    category: "Technique",
    title: "Mastering Light and Shadow in Oil Painting",
    excerpt:
      "Understanding how light falls across a subject is the single most transformative skill a painter can develop. Here's how to study it.",
    date: "May 28, 2025",
    readTime: "5 min read",
    image: blog1,
  },
  {
    category: "Community",
    title: "Meet the Artists: Our Summer Cohort",
    excerpt:
      "Six remarkable painters joined our residency programme this summer. We sat down with each of them to talk process, inspiration, and what's next.",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: blog2,
  },
  {
    category: "Exhibition",
    title: "Behind the Scenes: Staging 'Colour & Silence'",
    excerpt:
      "How do you hang 60 paintings in a way that creates an emotional journey? Our curator walks you through every decision.",
    date: "April 30, 2025",
    readTime: "6 min read",
    image: Blog3,
  },
];

export const BlogPreview = () => {
  return (
    <section className="bg-[#130f0c] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">
              Insights &amp; Stories
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white font-serif">
              From the Blog
            </h2>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            All articles
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

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href="/blogs"
              key={post.title}
              className="group block rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-800 hover:border-amber-700/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-3 left-3 z-10 text-xs bg-amber-500 text-black font-semibold px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold leading-snug group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 mt-4 text-xs text-stone-600">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};