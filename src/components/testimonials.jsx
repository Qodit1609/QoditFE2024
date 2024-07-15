import React from "react";
import Carousel from "react-elastic-carousel";

export const Testimonials = (props) => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(props.data.length);
    }
  };
  return (
    <div id="testimonials" style={{ marginTop: "40px" }}>
      <div className="container">
        <div className="row ">
          <div
            className="col-md-12  section-title"
            style={{ textAlign: "center" }}
          >
            <h2>WHAT OUR CLIENTS SAY</h2>
          </div>
        </div>
      </div>

      {/* <Carousel
        enableAutoPlay
        showArrows={true}
        pagination={false}
        autoPlaySpeed={4000}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        isInfinite={true}
        className="container justify-content-center"
      > */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="testimonialsCenter">
                <img
                  style={{
                    borderRadius: "50%",
                  }}
                  height="100px"
                  src="img/nandakumar.jpg"
                  alt="ron"
                />
                <h3 style={{ color: "white" }} id="testimonialH3">
                  Nanda Kumar
                </h3>
                <h4 id="testimonialH3">V.P.Sales, Mistminds</h4>
                <p>
                  A successful project always requires the best team. Together
                  with Qodit, we at Qodit have already been able to work on
                  various projects with highly professional, flexible, and
                  motivated people who deliver first-class results in complex
                  environments.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonialsCenter">
                <img
                  style={{
                    borderRadius: "50%",
                  }}
                  height="100px"
                  src="img/ManjunathRao.jpg"
                  alt="lavon"
                />
                <h3 style={{ color: "white" }} id="testimonialH3">
                  Manjunath Rao
                </h3>
                <h4 id="testimonialH3">HR Manager, Kloud9</h4>
                <p>
                  We would like to express our satisfaction on the co-operation
                  regarding the development of our web application. Qodit and
                  the development team did a very professional job. We are
                  satisfied with the solution given to us and with the
                  communication flow through the project.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonialsCenter">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "35%",
                  }}
                  height="100px"
                  src="img/pradeepjaiswal.jpg"
                  alt="linh"
                />
                
                <h3 style={{ color: "white" }} id="testimonialH3">
                  Pradeep Jaiswal
                </h3>
                <h4 id="testimonialH3">Director - Sales, Softude2e</h4>
                <p>
                  Qodit.io captured our needs from the start and helped us
                  create the webstore we had in mind. Always very quick to
                  respond and make adjustments where and when we needed it. make
                  adjustments where and when we needed it. make adjustments
                  where and when we needed it.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Carousel> */}
    </div>
  );
};
