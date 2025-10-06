import { useRef } from "react";
import Footer from "./components/Footer";
import { Navbar } from "./components/Header";
import {
  FieldExpertise,
  HeroSection,
  OurWork,
  Services,
} from "./components/Section";
import { useSearchParams } from "react-router-dom";
import type { Lang } from "./data/data";
import About from "./components/About";

function App() {
  const refService = useRef<HTMLDivElement | null>(null);
  const refWork = useRef<HTMLDivElement | null>(null);
  const refExpertise = useRef<HTMLDivElement | null>(null);
  const refAbout = useRef<HTMLDivElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const lang = (searchParams.get("lang") as Lang) || "id";
  return (
    <>
      <Navbar
        refExpertise={refExpertise}
        refAbout={refAbout}
        lang={lang}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        refService={refService}
        refWork={refWork}
      />
      <div className="wrapper">
        <div className="mt-8 ">
          <HeroSection />
          <div className="mt-4 space-y-4">
            <About ref={refAbout} />
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
