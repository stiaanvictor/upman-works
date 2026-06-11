import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyUs from "@/components/WhyUs";
import GalleryPreview from "@/components/GalleryPreview";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <GalleryPreview />
      <CtaBanner />
    </>
  );
}
