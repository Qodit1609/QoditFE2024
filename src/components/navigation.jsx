import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/contactus");
  };
  
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link to="/">
            <img
              className="navbar-brand page-scroll"
              src="img/logo1.png"
              alt="logo"
            ></img>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right link-tag">
            <li className="nav-item">
              <Link
                to="/about"
                className={`page-scroll ${activeLink === '/about' ? 'nav-item-underline' : 'hover-underline-animation'}`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`page-scroll  ${activeLink === '/services' ? 'nav-item-underline' : 'hover-underline-animation'}`}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/features"
                className={`page-scroll ${activeLink === '/features' ? 'nav-item-underline' : 'hover-underline-animation'}`}

              >
                Features
              </Link>
            </li>

            <li className="nav-item" >
              <Link
                to="/career"
                className={`page-scroll ${activeLink === '/career' ? 'nav-item-underline' : 'hover-underline-animation'}`}

              >
                Career
              </Link>
            </li>
            <button className="contactusbtn" onClick={handleClick}>
              CONTACT US
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
