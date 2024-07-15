export const Services = (props) => {
  const paraLength = {
    display: " -webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": "5",
    "-webkit-box-orient": "vertical",
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fas fa-code"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-code-slash icondesign"
                viewBox="0 0 16 16"
                id="web"
                placeholder="web"
                onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('webdevelopmentsection').scrollIntoView({ behavior: 'smooth' }); 
}}

              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
              </svg>

              <div className="service-desc">
                <h3>Web Development</h3>
                <p style={paraLength}>
                  An interactive web application readily amplifies user
                  engagement. Our user-centred web app is feature-rich,
                  intuitive, and performs exceedingly well. We craft your web
                  destination with a clear view of the business goal and ensure
                  that it supports the user-journey.
                </p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fas fa-cogs"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-gear-fill icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('systemdevelopmentsection').scrollIntoView({ behavior: 'smooth' }); 
}}
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <div className="service-desc">
                <h3>System Development</h3>
                <p style={paraLength}>
                  Qodit follows the procedure of defining, designing, testing,
                  and implementing a new software application or program. It
                  includes the internal Development of customized systems, the
                  creation of database systems.Qodit works for the enhancement
                  and productivity of the organization for the satisfaction of
                  its clients.
                </p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fa-pie-chart icondesign"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pie-chart-fill icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('productdevelopmentsection').scrollIntoView({ behavior: 'smooth' }); 
}}
              >
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
              </svg>
              <div className="service-desc">
                <h3>Product Development</h3>
                <p style={paraLength}>
                  We believe in bringing new product to the marketplace by
                  implementing innovative businesses thrive by understanding our
                  marketeers wants, making smart product improvements, and
                  developing new products that meet and exceed their customer’s
                  expectations
                </p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fas fa-cloud"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('mvpsection').scrollIntoView({ behavior: 'smooth' }); 
}}
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              <div className="service-desc">
                <h3>Minimum Viable Product (MVP)</h3>
                <p style={paraLength}>
                  {" "}
                  Our team follows MVP development technique in which it
                  introduces a new product in the market with basic features,
                  but enough to get the attention of the Consumers. We launch
                  the final product after sufficient feedback from our product’s
                  initial clients.
                </p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fas fa-cogs"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clouds-fill icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('cloudservicesection').scrollIntoView({ behavior: 'smooth' }); 
}}
              >
                <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z" />
                <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z" />
              </svg>
              <div className="service-desc">
                <h3>Cloud Services</h3>
                <p style={paraLength}>
                  Our cloud services provide the options of availing remote
                  services via cloud computing servers. Services included are
                  computing resources, data resources and communication
                  resources. Furthermore, IaaS, PaaS and SaaS platforms are also
                  available for services.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-up"
                data-aos-duration="1500"
                className="fa fas fa-cogs"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-database icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
  window.location.href = '/services'; 
  document.getElementById('dataengineeringsection').scrollIntoView({ behavior: 'smooth' }); 
}}
              >
                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z" />
              </svg>
              <div className="service-desc">
                <h3>Data Engineering</h3>
                <p style={paraLength}>
                  Our cloud services provide the options of availing remote
                  services via cloud computing servers. Services included are
                  computing resources, data resources and communication
                  resources. Furthermore, IaaS, PaaS and SaaS platforms are also
                  available for services.
                </p> 
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
