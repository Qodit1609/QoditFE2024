import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export const SideBar = (({ location }) => {
  function checkRouter(){
    if(location){
      switch (location.pathname){
        case '/login':
          return true
        case '/admin/dashboard':
          return true;
        case '/hr/dashboard':
          return true;
        case '/sales/dashboard':
          return true;
        default :
          return false;
      }
    }
  }

  if (checkRouter()){
    return null;
  } return (
    <div className="icon-bar">
      <a
        href="https://www.facebook.com/profile.php?id=100091484453584"
        target="_blank"
        className="facebook"
      >
        <FontAwesomeIcon className="icon_resize" icon={faFacebook} />
      </a>
      <a href="https://twitter.com/qodit_?s=20" className="twitter"   target="_blank">
        
        {/* <FontAwesomeIcon icon={faTwitter} /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
</svg>
        
      </a>
      <a href="https://www.instagram.com/qodit_/" className="google"   target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/company/qodit_/"
        className="linkedin"   target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.youtube.com/@user-mv7lf6bn6o/featured"
        className="youtube"   target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>
      </a>

    </div>


  );
}
)