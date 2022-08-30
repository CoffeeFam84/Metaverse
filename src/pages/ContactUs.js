import React from "react";
import OwlCarousel from "react-owl-carousel";
import Mailer from "../components/mailer.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ContactUs = () => {
  window.document.title = "Contact Us";
  const options = {
    margin: 20,
    nav: false,
    dots: false,
    lazyLoad: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 2,
      },
      567: {
        items: 4,
      },
      992: {
        items: 3,
      },
      1180: {
        items: 4,
      },
      1400: {
        items: 5,
      },
      1575: {
        items: 6,
      },
    },
  };

  return (
    <>
      <div className="cover-box press-box hide-nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row mx-0">
            <div className="col-md-10 col-lg-6 col-xl-5">
              <div className="bg-danger p-4 rounded-10">
                <h3 className="display-3 text-white lh-1 mb-41">
                  Let's
                  <br />
                  collaborate.
                </h3>
                <p>
                  Noir
                  <br />
                  63, Noir, 288-C, Kaloor - Kadavanthara Rd, Menaka Kochi, Kerala
                  682018
                </p>
                <address className="text-white">
                  Mob:{" "}
                  <a href="tel:9019262043" className="text-link">
                    +91 9019262043
                  </a>
                  <br />
                  <a href="tel:9063221257" className="text-link">
                        +91 9063221257
                  </a>
                  <br />
                  Tel:{" "}
                  <a href="tel:04843500797" className="text-link">
                   04843500797
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:admin@ateliernoir.co.in" className="text-link">
                    admin@ateliernoir.co.in
                  </a>
                </address>
                <Mailer />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="h-100 border-lg-start border-white my-5 my-lg-0 p-lg-4">
                <div className="mb-5">
                  <h3 className="display-3 text-white lh-1 mb-41">Clients</h3>
                </div>
                <div className="clients-slide-wrapper">
                  <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/kochi-metro-rail.jpg"
                            alt="Kochi Metro Rail Limited"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Kochi Metro Rail Limited
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/banglore-municipal.jpg"
                            alt="Bruhat Bengaluru Mahanagara Palike"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Bruhat Bengaluru Mahanagara Palike
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/kochin-shipyard.jpg"
                            alt="Cochin Shipyard"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          cochin shipyard
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/cochin.jpg"
                            alt="Cochin Smart Mission Limited"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Cochin Smart Mission Limited
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/fluentgrod.jpg"
                            alt="Fluentgrid Limited"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Fluentgrid Limited
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/better-kochi-responsse-group.jpg"
                            alt="Better Kochi Response Group"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Better Kochi Response Group
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden p-2">
                          <img
                            src="./images/contact-us/india.jpg"
                            alt="Government of India"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Government of India
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/ministry-of-housing.jpg"
                            alt="Ministry of Housing and Urban Affairs"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Ministry of Housing and Urban Affairs
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/karnataka.jpg"
                            alt="Government of Karnataka"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Government of Karnataka
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="contact-us-client me-4 mb-4">
                        <div className="bg-white rounded overflow-hidden">
                          <img
                            src="./images/contact-us/kerala.jpg"
                            alt="Government of Kerala"
                            className="img-fluid"
                          />
                        </div>
                        <p className="mb-0 mt-1 title text-white text-capitalize">
                          Government of Kerala
                        </p>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
