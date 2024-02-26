import HeroSection from "./_components/Hero";

import Features from "./_components/Features";

import Testimonials from "./_components/Testimonials";

import Faq from "./_components/Faq";
import ModalsWrapper from "./_components/Modal/variants";

export default function Home() {
  return (
    <div className="flex flex-col">
      <ModalsWrapper />
      <HeroSection />
      <Features />
      <Testimonials />
      <Faq />
    </div>
  );
}
