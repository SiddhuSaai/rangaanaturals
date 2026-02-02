import HeroSection from "@/components/sections/HeroSection";
import ScrollStory from "@/components/sections/ScrollStory";
import OurStory from "@/components/sections/OurStory";
import TempleHeritage from "@/components/sections/TempleHeritage";
import TempleSilhouette from "@/components/sections/TempleSilhouette";
import VisionMission from "@/components/sections/VisionMission";
import QualityPolicy from "@/components/sections/QualityPolicy";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollStory />
      <TempleHeritage />
      <TempleSilhouette />
      <OurStory />
      <VisionMission />
      <Products />
      <QualityPolicy />
    </>
  );
}
