import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const About = () => {
 
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              data-aos="fade-up-right"
              data-aos-duration="3000"
              src='img/aboutus1.jpg'
              className="img-responsive"
              alt="about"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>ABOUT US</h2>
              <p>Qodit.io is a software development and IT outsourcing company based in India. Qodit.io takes an energetic, collaborative strategy to create and customize solutions across the digital value chain.We aim to create a network of businesses that help each other to acquire more  customers. Giving a better idea of making your online presence better, QODIT.io company helps you with quality service at minimal prices and complimentary with great satisfaction</p>
              {/* <h3>{aboutUs ? aboutUs.title1 : "loading..."}</h3>. */}
              <div className="list-style">
              
                        
                          <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Assured Services</li>
                            </ul>
                          </div>
                      
                          <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Worldwide Clients</li>
                            </ul>
                          </div>

                          <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Next-Gen Technology Provider</li>
                            </ul>
                          </div> <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>It’s All About Technology</li>
                            </ul>
                          </div> <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Creating ideas with passion</li>
                            </ul>
                          </div> <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>On-Time</li>
                            </ul>
                          </div>
                          </div>
                           <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Reliable</li>
                            </ul>   
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                            <ul>
                              <li>Dedicated development team
</li>
                            </ul>   
                            </div>
              
                          
                          
                   

              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};




