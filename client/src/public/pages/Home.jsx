import Banner from "../components/Banner";
import Courses from "../components/courses";
import FeaturesSectionDemo from "@/components/features-section-demo-1";
import Teams from "../components/Teams";
import CircularGallery from "@/Reactbits/CircularGallery/CircularGallery";
import BestCourses from "../components/BestCourses";
import FAQ from "../components/Faq";
import PricingPages from "../components/PricingPages";
import CallToActionSection from "../components/Cta";
import Header2 from "@/components/mvpblocks/header-2";

export default function Home() {
  return (
    <>
      <section className="bg-top">
        <Banner />
      </section>
      <section className="bg-bottom">
        <FeaturesSectionDemo />
      </section>
      <section className="bg-top">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#000000"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
      <section className="bg-bottom">
        <BestCourses />
      </section>
      <section>
        <Courses />
      </section>
      <section className="bg-bottom">
        <Teams />
      </section>
      <section className="bg-top">
        <FAQ />
      </section>
      <section className="bg-bottom">
        <PricingPages />
      </section>
      <section className="bg-top">
        <CallToActionSection />
      </section>
    </>
  );
}
1;
