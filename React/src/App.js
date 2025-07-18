import "./App.css";

import Navbar from "./components/Navbar.js";
// import HeroSection from "./components/HeroSection.js";
import SliderSection from "./components/SliderSection.js";
import BenefitsSection from "./components/BenefitsSection.js";
import AboutSection from "./components/AboutSection.js";
import SpecialtiesSection from "./components/SpecialtiesSection.js";
import ProceduresSection from "./components/ProceduresSection.js";
import WhyChooseSection from "./components/WhyChooseSection.js";
import DoctorsSection from "./components/DoctorsSection.js";
import TestimonialSection from "./components/TestimonialSection.js";
import InfraSection from "./components/InfraSection.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      {/* Header Start */}
      <Navbar />
      {/* Header End */}

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

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}

export default App;
