import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import './CareerForm.css';
import Jobroles from "./Jobroles";

export const CareerForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
    phoneNumber: "",
    jobrole: "",
    technology: "",
    file: null,
    fileSize: 0, 
  });

  const [toastId, setToastId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      updateToast("Name should only contain letters and spaces", "error");
      return;
    } else if ((name === "email" || name === "message") && !value.trim()) {
      const fieldName = name === "email" ? "Email" : "Message";
      updateToast(`Please fill the ${fieldName} field.`, "error");
      return;
    } else if (name === "file") {
      const selectedFile = files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB > 25) {
          alert("File size should not exceed 25MB.");
          e.target.value = null;
          setFormData({ ...formData, file: null, fileSize: 0 });
          return;
        }
        setFormData({ ...formData, file: selectedFile, fileSize: fileSizeInMB.toFixed(2) });
      } else {
        setFormData({ ...formData, file: null, fileSize: 0 });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

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
    const { name, email, message, phoneNumber, jobrole, technology, file } = formData;

    if (!name || !email || !message || !phoneNumber || !jobrole || !technology || !file) {
      updateToast("Please fill in all the required fields.", "error");
      return;
    }
if (!name) {
    toast.error("Please fill the Name field.");
    return;
     }
    if (!validateEmail(email)) {
      updateToast("Please enter a valid email address.", "error");
      return;
    }
    if (!email) {
    toast.error("Please fill the Email field.");
    return;
  }

  if (!message) {
    toast.error("Please fill the Message field.");
    return;
  }
  if (!phoneNumber) {
    toast.error("Please fill the Mobile Number.");
    return;
  }
  if (!jobrole) {
    toast.error("Please select a Job Role.");
    return;
  }
  if (!technology) {
    toast.error("Please fill the Technology.");
    return;
  }
  if (!file) {
    toast.error("Please upload your Resume.");
    return;
  }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("message", message);
    formDataToSend.append("email", email);
    formDataToSend.append("phoneNumber", phoneNumber);
    formDataToSend.append("jobrole", jobrole);
    formDataToSend.append("technology", technology);
    formDataToSend.append("attachment", file);

    const loadingToast = toast.info("Sending Response ...");
    try {
      const response = await axios.post("http://localhost:5000/send-email-with-attachments", formDataToSend);
      console.log(response.data);
      toast.update(loadingToast, {
        render: "Your Response Saved Successfully",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
      setFormData({
        name: "",
        message: "",
        email: "",
        phoneNumber: "",
        jobrole: "",
        technology: "",
        file: null,
        fileSize: 0,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  const handleJobRoleSelect = (e) => {
    setFormData({ ...formData, jobrole: e.target.value });
  };

  const handleCountryChange = (country) => {
    setFormData({ ...formData, phoneNumber: "" });
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    const { name, email, message, phoneNumber, jobrole, technology, file } = formData;

    if (!name || !email || !message || !phoneNumber || !jobrole || !technology || !file) {
      updateToast("Please fill in all the required fields.", "error");
      return;
    }

    const messageContent = `Dear ${name},\n\nThank you for expressing interest in our company.\n\nHere are the details you provided:\n\nName: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nJob Role: ${jobrole}\nTechnology: ${technology}`;

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
      title: "Are you sure you want to Submit the Career Form?",
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
        axios.post("http://localhost:5000/send-email", { email: formData.email, message: messageContent });
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="background-svg">
        <img
          className="background-header"
          src="./img/careerpic.png"
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
            <div className="col-12 text-center" data-aos="zoom-in">
              {/* <h1 className="fw-light">career</h1> */}
            </div>
          </div>
        </div>
      </div>

      <div id="contact_us">
        <div className="container careersec">
          <div className="row">
            <div className="col-md-5 justify-content-center contact-info">
              <img src="./img/car-1.png" width="100%" alt="" height="600px" />
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
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <input
                    name="message"
                    id="message"
                    className="form-control contactFormStyle"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
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
        <label htmlFor="phoneNumber" style={{ marginBottom: '10px' }}>Mobile Number</label>
        <div style={{ paddingTop: '25px' }} className="phone-input-container">
          <PhoneInput
            inputProps={{
              id: "phoneNumber",
              name: "phoneNumber",
              required: true,
              autoFocus: false,
              className: "form-control"
            }}
            country={"in"} 
            value={formData.phoneNumber}
            onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
            countryCodeEditable={false}
            onCountryChange={handleCountryChange} 
          />
        </div>
        <p className="help-block text-danger"></p>
      </div>


               <div className="form-group">
        <label htmlFor="jobrole">Job Role</label>
        <select
          id="jobrole"
          name="jobrole"
          className="form-control"
          value={formData.jobrole}
          onChange={handleJobRoleSelect}
        >
          <option value="">Select Job Role</option>
          {Jobroles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
        <p className="help-block text-danger"></p>
      </div>

                <div className="form-group">
                  <label htmlFor="technology">Technology</label>
                  <input
                    type="text"
                    id="technology"
                    name="technology"
                    className="form-control"
                    placeholder="Technology"
                    value={formData.technology}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name="file"
          id="resume"
          className="form-control"
          placeholder="Resume"
          onChange={handleChange}
        />
        {formData.fileSize > 0 && (
          <p className="file-size">File Size: {formData.fileSize} MB</p>
        )}
        <p className="help-block text-danger"></p>
      </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" onClick={handleConfirmation}>
                  Send Message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
