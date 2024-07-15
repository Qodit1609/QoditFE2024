import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { LogoSection } from "./components/logoSection";
import { Helmet } from "react-helmet";

export const MainBody = () => {
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
