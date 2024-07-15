import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const MoreServices = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="service">
      <Helmet>
        <title>Services |Qodit - IT consulting and IT services</title>
        <link rel="canonical" href="https://qodit.io/services" />
      </Helmet>
      <div className="background-svg">
        <img
          className="background-header"
          src="img/servicespic.png"
          width="100%"
          alt=""
        />
      </div>

      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              {/* <h1 className="fw-light">Our Services</h1> */}
            </div>
          </div>
        </div>
      </div>
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}

      <section className="sec-about sec-service mb-1 servicesection" id="#webdevelopmentsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-content">
                <div className="web-content-h2">
                  <h2>Web Development</h2>
                </div>
                <p>
                  An interactive web application readily amplifies user
                  engagement. Our user-centred web app is feature-rich,
                  intuitive, and performs exceedingly well. We craft your web
                  destination with a clear view of the business goal and ensure
                  that it supports the user-journey.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-image">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src="img/systemdevelopment.png"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-service web-bg" id="#systemdevelopmentsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-image">
                <img
                  data-aos="fade-left "
                  data-aos-duration="1500"
                  src="img/webdevelopment1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="web-service">
                <div
                  className="
  "
                >
               <h2>System Development</h2>
                </div>

                <p>
                  Qodit follows the procedure of defining, designing, testing,
                  and implementing a new software application or program. It
                  includes the internal Development of customized systems, the
                  creation of database systems.Qodit works for the enhancement
                  and productivity of the organization for the satisfaction of
                  its clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-service" id="#productdevelopmentsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-content">
                <div className="">
                  <h2>Product Development</h2>
                </div>
                <p>
                  We believe in bringing new product to the marketplace by
                  implementing innovative businesses thrive by understanding our
                  marketeers wants, making smart product improvements, and
                  developing new products that meet and exceed their customer’s
                  expectations
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-image">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src="img/newproduct.jpg"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-service web-bg" id="#mvpsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-image">
                <img
                  data-aos="fade-left "
                  data-aos-duration="1500"
                  src="img/mvp.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-service">
                <div className="">
                  <h2>Minimum Viable Product (MVP)</h2>
                </div>
                <p>
                  Our team follows MVP development technique in which it
                  introduces a new product in the market with basic features,
                  but enough to get the attention of the Consumers. We launch
                  the final product after sufficient feedback from our product’s
                  initial clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-service" id="#cloudservicesection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-content">
                <div className="web-content-h2">
                  <h2>Cloud Services</h2>
                </div>
                <p>
                  Our cloud services provide the options of availing remote
                  services via cloud computing servers. Services included are
                  computing resources, data resources and communication
                  resources. Furthermore, IaaS, PaaS and SaaS platforms are also
                  available for services.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-image">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src="img/cloudservices.png"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-service web-bg" id="#dataengineeringsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-image">
                <img
                  data-aos="fade-left "
                  data-aos-duration="1500"
                  src="img/data.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-service">
                <div className="">
                  <h2>Data Engineering</h2>
                </div>
                <p>
                  Our cloud services provide the options of availing remote
                  services via cloud computing servers. Services included are
                  computing resources, data resources and communication
                  resources. Furthermore, IaaS, PaaS and SaaS platforms are also
                  available for services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-service mb-1" id="#webdesignersection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-content">
                
                <div className="web-content-services">
                  <h2>WEB DESIGNER</h2>
                </div>
                <p>
                  We are looking for a web designer who will be responsible for
                  creating great websites for our clients. Primary duties
                  include conceptualizing and implementing creative ideas for
                  client websites, as well as creating visual elements that are
                  in line with our clients' branding. You will be working
                  closely with our web development team to ensure proper and
                  hassle-free implementation.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-image">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src="img/design.png"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreServices;
