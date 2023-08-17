import HeroSection from "./_components/Hero";

import Features from "./_components/Features";

import Testimonials from "./_components/Testimonials";

import Faq from "./_components/Faq";
import ModalsWrapper from "./_components/Modal/variants";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <ModalsWrapper />
      <HeroSection />
      <Features />
      <Testimonials />
      {/*       <Stats />
       */}
      <Faq />
    </div>
  );
}
