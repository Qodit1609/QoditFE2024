
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toastId, setToastId] = useState(null); 

  const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
    updateToast("Name should only contain letters and spaces", "error");
    return;
  } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    updateToast("Please enter a valid email address.", "error");
    return;
  } else if (name === "message" && !value.trim()) {
    updateToast("Please Fill the Message.", "error");
    return;
  }
  setFormData({ ...formData, [name]: value });
};


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateToast = (message, type) => {
    if (toastId) {
      toast.update(toastId, {
        render: message,
        type: type,
        autoClose: true,
      });
    } else {
      const newToastId = toast[type](message, { autoClose: true });
      setToastId(newToastId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim()) {
      updateToast("Please Fill the Name.", "error");
      return;
    }

    if (!email.trim()) {
      updateToast("Please Fill the Email.", "error");
      return;
    }

    if (!validateEmail(email)) {
      updateToast("Please enter a valid email address.", "error");
      return;
    }

    if (!message.trim()) {
      updateToast("Please Fill the Message.", "error");
      return;
    }

    updateToast("Sending Response ...", "info");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log(response.data);
      updateToast("Your Response Saved Successfully", "success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      updateToast("Error sending message. Please try again later.", "error");
    }
  };

  const handleConfirmation = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim()) {
      updateToast("Please Fill the Name.", "error");
      return;
    }

    if (!email.trim()) {
      updateToast("Please Fill the Email.", "error");
      return;
    }
    if (!validateEmail(email)) {
      updateToast("Please enter a valid email address.", "error");
      return;
    }

    if (!message.trim()) {
      updateToast("Please Fill the Message.", "error");
      return;
    }

    const blurContainer = document.createElement("div");
    blurContainer.style.position = "fixed";
    blurContainer.style.top = "0";
    blurContainer.style.left = "0";
    blurContainer.style.width = "100%";
    blurContainer.style.height = "100%";
    blurContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    blurContainer.style.filter = "blur(26px)";
    blurContainer.style.zIndex = "1000";
    document.body.appendChild(blurContainer);

    Swal.fire({
      title: "Are you sure you want to submit the Contact form?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
      willOpen: () => {
        const popup = Swal.getPopup();
        popup.style.width = '400px'; 
        popup.style.height = '300px';
      }
    }).then((result) => {
      document.body.removeChild(blurContainer);

      if (result.isConfirmed) {
        handleSubmit(e);
      }
    });
  };

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://qodit.io/contact_us" />
      </Helmet>
      <div className="background-svg">
        <img
          className="background-header"
          src="./img/contectus.png"
          width="100%"
          alt=""
        />
      </div>

      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: "relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              {/* <h1 className="fw-light">Contact Us</h1> */}
            </div>
          </div>
        </div>
      </div>

      <div id="contact_us">
        <div className="container">
          <div className="section-title">
            <h2 className="contact-title" style={{ marginTop: "35%" }}>
              Get In Touch
            </h2>
            <p className="contact-title">
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div className="row">
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3>USA Office Address:</h3>
                <h5>a 1309 Coffeen Avenue 1200, Sheridan, WY 82801, USA</h5>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                <h3 className="text-center">India Office Address:</h3>
                <a href="https://www.google.com/maps/place/Qodit+Technology+Pvt.+Ltd/@22.7405821,75.903225,17z/data=!4m6!3m5!1s0x3962e3d4a2f8d07b:0xe7e568886f73dd84!8m2!3d22.7405821!4d75.903225!16s%2Fg%2F11vkjw0bfy?entry=ttu">
                  <h5 className="text-center" style={{ color: "#777" }}>
                    ED3, Scheme 94 Sector ED, Indore, Madhya Pradesh 452010
                  </h5>
                </a>
              </div>
            </div>
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column text-center">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h3 className="text-center">Email:</h3>
                <h5 className="text-center">
                  <a
                    style={{ color: "#777", fontWeight: "800" }}
                    href="mailto:info@qodit.io"
                  >
                    info@qodit.io
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container form-sec">
          <div className="row">
            <div className="col-md-5 justify-content-center contact-info">
              <img src="./img/Contact_us.png" width="100%" alt="" />
            </div>
            <div className="col-md-7 form-contact">
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control contactFormStyle"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" onClick={handleConfirmation}  >
                  Send Message
                </button>
                <ToastContainer/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}