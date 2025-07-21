import React from "react";
import SliderSection from "../components/SliderSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import ProceduresSection from "../components/ProceduresSection";
import WhyChooseSection from "../components/WhyChooseSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialSection from "../components/TestimonialSection";
import InfraSection from "../components/InfraSection";

const home = () => {
  return (
    <>
      {/* Slider Section Start */}
      <SliderSection />
      {/* Slider Section End */}

      {/* Our Benefits Secton Start */}
      <BenefitsSection />
      {/* Our Benefits Secton End */}

      {/* About Us Section Start */}
      <AboutSection />
      {/* About Us Section End */}

      {/* Specialties Section Start */}
      <SpecialtiesSection />
      {/* Specialties Section End */}

      {/* Procedures Section Start */}
      <ProceduresSection />
      {/* Procedures Section End */}

      {/* Why Choose Section Start */}
      <WhyChooseSection />
      {/* Why Choose Section End */}

      {/* Doctors Section Start */}
      <DoctorsSection />
      {/* Doctors Section End */}

      {/* Testimonials Section Start */}
      <TestimonialSection />
      {/* Testimonials Section End */}

      {/* Infra Section Start */}
      <InfraSection />
      {/* Infra Section End */}
    </>
  );
};

export default home;
