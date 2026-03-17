import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedRooms from "@/components/rooms/FeaturedRooms";
import CTA from "@/components/CTA";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <FeaturedRooms />
      <HomeHowItWorks />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}