import Footer from "./components/Footer";
import { Navbar } from "./components/Header";
import {
  FieldExpertise,
  HeroSection,
  HowWeWork,
  OurWork,
  Services,
} from "./components/Section";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="mt-8 ">
          <HeroSection />
          <div className="mt-4 space-y-4">
            <HowWeWork />
            <FieldExpertise />
          </div>
        </div>
      </div>
      <OurWork />
      <Services />
      <Footer />
    </>
  );
}

export default App;
