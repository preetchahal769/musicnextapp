import HeroSection from "@/components/HeroSection";
import FeaturedPlans from "@/components/FeaturedPlans";
import Trainers from "@/components/Trainers";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedPlans />
      <Trainers />
      <Footer />
    </main>
  );
}
