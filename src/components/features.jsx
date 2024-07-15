import { useEffect } from "react";

export const Features = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paraLength = {
    display: " -webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": "5",
    "-webkit-box-orient": "vertical",
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <a   style={{ color: "#777777" }} >
              <i
                data-aos="flip-right"
                data-aos-duration="1500"
                className="fa fa-pencil-square-o"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-pencil-square icondesign"
                viewBox="0 0 16 16"
                onClick={() => { 
                window.location.href = '/features'; 
                document.getElementById('availabilitysection').scrollIntoView({ behavior: 'smooth' }); 
                }}

              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>

              <h3>Availability all the Time</h3>
              <p style={paraLength}>
                We have been giving multidimensional IT organizations to our
                clients including electronic exhibiting and online webpage
                arranging solutions.we Offer monetarily wise and quick solutions
                for our clients, we work with a right attitude and thusly
                execute fittingly. It's not by and large you, it's us.
              </p>
            </a>
          </div>
          <div className="col-xs-12 col-md-3">
            <a style={{ color: "#777777" }}>
              <i
                data-aos="flip-right"
                data-aos-duration="1500"
                className="fa fa-group"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-people-fill icondesign"
                viewBox="0 0 16 16"
                 onClick={() => { 
                window.location.href = '/features'; 
                document.getElementById('diversesection').scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>

              <h3>Diverse Technology</h3>
              <p style={paraLength}>
                Our team helps you to increase control over your small business
                with software designed to grow with you. Streamline all
                processes, gain greater insight into your business, and make
                decisions based on real-time information to drive profitable
                growth.We have faith in making long haul relationships with our
                customers making a superior association each time we connect..
              </p>
            </a>
          </div>
          <div className="col-xs-12 col-md-3">
            <a style={{ color: "#777777" }} >
              <i
                data-aos="flip-right"
                data-aos-duration="1500"
                className="fa fa-microchip"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-cpu-fill icondesign"
                viewBox="0 0 16 16"
                onClick={() => { 
                window.location.href = '/features'; 
                document.getElementById('researchsection').scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
              </svg>
              <h3>Research and development</h3>
              <p style={paraLength}>
                We employ best practice processes and development methodologies
                as a foundation for rapid building of cutting-edge technology
                solutions in a structured and methodical way.We keep elevated
                expectations to contend in the high speed worldwide market and
                give refined programming answers for our customers.
              </p>
            </a>
          </div>
          <div className="col-xs-12 col-md-3">
            <a style={{ color: "#777777" }} >
              <i
                data-aos="flip-right"
                data-aos-duration="1500"
                className="fa fa-cogs"
              ></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-gear-fill icondesign"
                viewBox="0 0 16 16"
                onClick={() => { 
                window.location.href = '/features'; 
                document.getElementById('experiencedsection').scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <h3>Experienced Team</h3>
              <p style={paraLength}>
                Qodit furnishes a complete answer for you with inventive
                methodology and high trustworthiness,We let you stay ahead in
                this computerized promoting world through changed
                administrations forthcoming on the lookout and which are as of
                now settled too. With an extraordinary energy for what we work
                on, we permit fervor to remain with us to produce powerful
                answers for our clients.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
