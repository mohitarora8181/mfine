import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="w-full h-full pt-20 overflow-y-auto max-sm:overflow-x-hidden scrollbar-thin">
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </div>
  );
}
