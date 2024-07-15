import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="intro">
        <div className="background-svg">
     <video
        className="overlay video-player"
        autoPlay
        muted
        onEnded={(e) => {
          e.target.play();
        }}
        ref={(videoRef) => {
          if (videoRef) {
            const resizeVideo = () => {
              const { innerWidth } = window;
              const aspectRatio = 16 / 9; 
              let videoWidth = innerWidth;

              videoRef.style.width = `${videoWidth}px`;
              videoRef.style.height = `${videoWidth / aspectRatio}px`;
            };

            resizeVideo();
            window.addEventListener('resize', resizeVideo);

            return () => {
              window.removeEventListener('resize', resizeVideo);
            };
          }
        }}
      >
        <source src="./img/Home_Screen_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>WEB DEVELOPMENT</span>
            </h1>
            <br />
            <p>An interactive web application readily amplifies user engagement. Our user-centered web app is feature-rich.</p>
            <br />
            <a href="#features" className="btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
      <video
        className="overlay video-player"
        autoPlay
        muted
        onEnded={(e) => {
          e.target.play();
        }}
        ref={(videoRef) => {
          if (videoRef) {
            const resizeVideo = () => {
              const { innerWidth } = window;
              const aspectRatio = 16 / 9; 
              let videoWidth = innerWidth;

              videoRef.style.width = `${videoWidth}px`;
              videoRef.style.height = `${videoWidth / aspectRatio}px`;
            };

            resizeVideo();
            window.addEventListener('resize', resizeVideo);

            return () => {
              window.removeEventListener('resize', resizeVideo);
            };
          }
        }}
      >
        <source src="./img/Home_Screen_Video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>System Development</span>
            </h1>
            <br />
            <p>With a broad selection of web application services, we guarantee to meet all of your business needs. Our web developer.</p>
            <br />
            <a href="#features" className="btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
      <video
        className="overlay video-player"
        autoPlay
        muted
        onEnded={(e) => {
          e.target.play();
        }}
        ref={(videoRef) => {
          if (videoRef) {
            const resizeVideo = () => {
              const { innerWidth } = window;
              const aspectRatio = 16 / 9; 
              let videoWidth = innerWidth;

              videoRef.style.width = `${videoWidth}px`;
              videoRef.style.height = `${videoWidth / aspectRatio}px`;
            };

            resizeVideo();
            window.addEventListener('resize', resizeVideo);

            return () => {
              window.removeEventListener('resize', resizeVideo);
            };
          }
        }}
      >
        <source src="./img/Home_Screen_Video_2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>Product Development</span>
            </h1>
            <br />
            <p>We believe in bringing new product to the marketplace by implementing innovative businesses.</p>
            <br />
            <a href="#features" className="btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div className="intro">
    <div className="background-svg">
          <video
        className="overlay video-player"
        autoPlay
        muted
        onEnded={(e) => {
          e.target.play();
        }}
        ref={(videoRef) => {
          if (videoRef) {
            const resizeVideo = () => {
              const { innerWidth } = window;
              const aspectRatio = 16 / 9; 
              let videoWidth = innerWidth;

              videoRef.style.width = `${videoWidth}px`;
              videoRef.style.height = `${videoWidth / aspectRatio}px`;
            };

            resizeVideo();
            window.addEventListener('resize', resizeVideo);

            return () => {
              window.removeEventListener('resize', resizeVideo);
            };
          }
        }}
      >
        <source src="./img/Home_Screen_Video_3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              <span>Cloud Services</span>
            </h1>
            <br />
            <p>Our cloud services provide the options of availing remote services via cloud computing servers.</p>
            <br />
            <a href="#features" className="btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
];

export const Header = (props) => {
  return (
    <header id="header">
      <div className="alicesec">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          buttonsDisabled={false}
        />
      </div>
    </header>
  );
};
