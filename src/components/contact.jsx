import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const whiteText = {
    color: "white",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("hrlll");
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      toast.error("Please fill in all fields.");
    } else {
      try {
        await axios.post("your_api_endpoint", formData);

        // Clear form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        toast.success("Message sent successfully!");
      } catch (error) {
        toast.error("An error occurred while sending the message.");
      }
    }
  };

  return (
    <div>
      <div id="contact_us">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 style={whiteText}>Get In Touch</h2>
                <p style={whiteText}>
                  Please fill out the form below to send us an email, and we
                  will get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
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
                  </div>
                </div>
                <div className="form-group">
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
                {/* <div id="success"></div> */}
                <div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 justify-content-center contact-info">
            <img src="./img/Contact_us.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
