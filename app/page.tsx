import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { BlogPreview } from "@/components/home/BlogsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GalleryPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}