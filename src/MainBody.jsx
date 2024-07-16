import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { LogoSection } from "./components/logoSection";
import { useEffect } from "react";

export const MainBody = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);

  return (
    <div>
      <Header />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <LogoSection />
   
    </div>
  );
};
