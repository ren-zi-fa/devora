import { useRef } from "react";
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
  const refService = useRef<HTMLDivElement | null>(null);
  const refWork = useRef<HTMLDivElement | null>(null);
  const refExpertise = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar
        refExpertise={refExpertise}
        refService={refService}
        refWork={refWork}
      />
      <div className="wrapper">
        <div className="mt-8 ">
          <HeroSection />
          <div className="mt-4 space-y-4">
            <HowWeWork />
            <FieldExpertise ref={refExpertise} />
          </div>
        </div>
      </div>
      <OurWork ref={refWork} />
      <Services ref={refService} />
      <Footer />
    </>
  );
}

export default App;
