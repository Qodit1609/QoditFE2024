import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainBody } from "./MainBody";
import FooterPage from "./components/Footer";
import { SideBar } from "./components/Side_bar";
import { Navigation } from "./components/navigation";
import NewAboutUs from "./components/Pages/About/AboutUs";
import MoreServices from "./components/Pages/MoreServices/MoreServices";
import { ContactUs } from "./components/Pages/ContactUs/ContactUs";
import NewFeature from "./components/Pages/Features/NewFeatures";
import { CareerForm } from "./components/Pages/CareerForm/CareerForm";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qodit",
    url: "https://qodit.io/",
    logo: "https://qodit.io/img/logo1.png",
    sameAs: [
      "https://www.facebook.com/qoditio",
      "https://twitter.com/qodit_",
      "https://www.instagram.com/qodit_/",
      "https://www.linkedin.com/qodit_",
    ],
  };
  const schemaOrganization_JSON = JSON.stringify(schemaOrganization);
 
  const schemawebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Qodit",
    url: "https://qodit.io/",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://qodit.io/career{search_term_string}https://qodit.io/contact_us",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaWebsite_JSON = JSON.stringify(schemawebsite);

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">{schemaOrganization_JSON}</script>
        <script type="application/ld+json">{schemaWebsite_JSON}</script>
      </Helmet>
      <div>
        <BrowserRouter>
          <SideBar />
          <Navigation />
            <Routes>                                                                                                                                                                                 
            <Route exact path="/" element={<MainBody/>}></Route>
            <Route exact path="/about" element={<NewAboutUs />}></Route>
            <Route exact path="/services" element={<MoreServices />}></Route>
            <Route exact path="/contactus" element={<ContactUs />}></Route>
            <Route exact path="/features" element={<NewFeature />}></Route>
            <Route exact path="/career" element={<CareerForm />}></Route>
          </Routes>
          <FooterPage />
          <ScrollToTop smooth/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
