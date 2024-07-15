import React from "react";
import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 6,
  autoplay: true,
  autoPlay: true,
  autoplayTimeout: 1000,
  nav: false,
  loop: true,
  dots: false,
  animateIn: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
};
export const LogoSection = (props) => {
  return (
    <div className="testimonialCarousel">
      <OwlCarousel options={options}>
       
            <div>
              <img id="logoImg" src="BrandSvg/angular-icon.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/bootstrap-4.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/django.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/docker.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/graphql.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/java-4.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/jquery-2.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/laravel-2.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/less.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/logo-javascript.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/php-1.svg" alt="logo" />

            </div>
                      <div>
            <img id="logoImg" src="BrandSvg/python-5.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/react-2.svg" alt="logo" />

            </div>
            <div>
            <img id="logoImg" src="BrandSvg/redux.svg" alt="logo" />

            </div>

            <div>
            <img id="logoImg" src="BrandSvg/spring-3.svg" alt="logo" />

            </div>






          
          
          
       
      </OwlCarousel>
    </div>
  );
};
