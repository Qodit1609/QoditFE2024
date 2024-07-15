import { useEffect } from "react";
import { BackgroundSVG } from "../BackgroundSVG";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

export const NewAboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const style = {
    h3: {
      color: "#fff",
    },
  };

  return (
    <div>
      <Helmet>
        <title>About us| Qodit -IT consulting and IT services</title>
        <link rel="canonical" href="https://qodit.io/about " />
      </Helmet>
      <div id="new-about">
        <div className="background-svg">
          <img
            className="background-header"
            src="./img/Aboutuspic.png"
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
              <div className="col-12 text-center" data-aos="zoom-in">
                {/* <h1 className="fw-light">About us</h1> */}
              </div>
            </div>
          </div>
        </div>
        <section className="sec-about">
          <div className="element">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-7">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    src="img/about_us.png"
                    className="img-responsive"
                    alt="s1"
                  />
                </div>
                <div className="col-sm-12 col-md-5">
                  <div className="feature-list">
                    <div className="feature-details">
                      <h1>About Us</h1>
                      <p className="fontsection">
                        Qodit is a software development and IT outsourcing
                        company based in India. Qodit takes an energetic,
                        collaborative strategy to create and customize solutions
                        across the digital value chain.We aim to create a
                        network of businesses that help each other to acquire
                        more customers. Giving a better idea of making your
                        online presence better, QODIT company helps you with
                        quality service at minimal prices and complimentary with
                        great satisfaction.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="who-we">
                  <h1>WHO WE ARE</h1>
                  <p>
                    Qodit is a software development and IT outsourcing company
                    based in India. Qodit takes an energetic, collaborative
                    strategy to create and customize solutions across the
                    digital value chain.We aim to create a network of businesses
                    that help each other to acquire more customers. Giving a
                    better idea of making your online presence better, QODIT
                    company helps you with quality service at minimal prices and
                    complimentary with great satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <img
                  src="img/whoweare1.jpg"
                  data-aos={"fade-up"}
                  data-aos-duration="3000"
                  className="img-fluid who-img"
                  alt="whoWe"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-sec about-bg">
          <div className="container">
            <div className="why-choose ">
              <h1>Why Choose Us</h1>
            </div>

            <div className="row pt-5">
              <div className="col-md-3 choose__us">
                <div
                  className="img_circle"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="img/client.png"
                    className="img-fluid"
                    alt="chooseus"
                  />
                </div>
                <h3>Client Oriented</h3>
                <p>
                  Being customer-oriented is an approach in which, rather than
                  solving for the business’s needs, our company solves the
                  customer’s problems first.
                </p>
              </div>
              <div className="col-md-3 choose__us">
                <div
                  className="img_circle"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="img/creativityy.png"
                    className="img-fluid"
                    alt="chooseus"
                  />
                </div>
                <h3>Creativity</h3>
                <p>
                  Our Creative thinking can also lead to innovation that will
                  grow our business through increased productivity. When we
                  “focus on what things we can streamline and what things we
                  need to cut out”
                </p>
              </div>
              <div className="col-md-3 choose__us">
                <div
                  className="img_circle"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="img/deadline.png"
                    className="img-fluid"
                    alt="chooseus"
                
                />
                </div>0
                <h3>Meeting Deadlines</h3>
                <p>
                  Meeting Deadlines help us to collaborate toward achieving a
                  shared goal, and to keep complex,we work multistage projects
                  on track. we set all expectations
                </p>
              </div>
              <div className="col-md-3 choose__us">
                <div
                  className="img_circle"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <img
                    src="img/sucess.png"
                    className="img-fluid"
                    alt="chooseus"
                  />
                </div>
                <h3>A Plan for Success</h3>
                <p>
                  Our Planning helps to critically assess the goal to see in
                  realistic. It facilitates decision making and allows setting a
                  time frame by predicting when our company can achieve its
                  goal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="vision-mission-content">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    src="img/vision.png"
                    alt="Vision"
                    className="img-fluid"
                  />
                  <h3 style={style.h3}>Our Vision</h3>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={70}
                      readMoreText={"Read more "}
                      readLessText={"Read less "}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      Qodit will inspire its employees to be the best they can
                      be. We will engage in sustainable practices and anticipate
                      the needs of our customers. Our vision is to bring our
                      employees into the 21st century through innovation and
                      modern technology. Learning will be enhanced with computer
                      software and all technologies that will allow employees to
                      proceed at their own rate according to their ability.
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="vision-mission-content">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    src="img/mission.png"
                    alt="Vision"
                    className="img-fluid"
                  />
                  <h3 style={style.h3}>Our Mission</h3>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={70}
                      readMoreText={"Read more "}
                      readLessText={"Read less "}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      Our mission is to provide a supercilious support to our
                      customer through our service. We are always aware of new
                      trends in the field of security and are committed to
                      applying it in our solution. We always improvise our
                      services by surveying the interest of our customer. Our
                      goal is to attain massive upgrades and improvements being
                      honest to our principle. Qodit has set certain standards
                      and regulations to be followed so that we will always be
                      giving our priorities to the standards and will always
                      work according to the guidelines set by the govt. and
                      other corresponding authority.
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="vision-mission-content">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    src="img/value.png"
                    alt="Vision"
                    className="img-fluid"
                  />
                  <h3 style={style.h3}>Our Value</h3>
                  <p>
                    <ReactReadMoreReadLess
                      charLimit={70}
                      readMoreText={"Read more "}
                      readLessText={"Read less "}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      Having clear company values helps us ensure that all our
                      employees are working towards the same goals. Our core
                      values support the company's vision and shape its culture.
                      That's why our business decision should be aligned with
                      these values.
                    </ReactReadMoreReadLess>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    </div>
  );
};
export default NewAboutUs;



