import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "bootstrap";

import NavBar from "../components/NavBar";

function AboutUs() {
  window.document.title = "About Us";

  useEffect(() => {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl, {
        container: "body",
      });
    });
  }, []);

  return (
    <>
      <div className="cover-box press-box hide-nav d-flex align-items-center bg-dark2">
        <div className="container-fluid">
          <div className="row align-items-center mx-0">
            <div className="col-sm-12 text-center mmt-md-60 mb-md-5">
              <small className="text-white">The Symbiosis</small>
              <div className="px-lg-5 text-white opacity-60 ">
                <br></br>
                <p>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We
                  are a symbiosis of architects, engineers, and artisans
                  tackling socially
                  <br></br>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relevant
                  issues using our expertise founded on architectural
                  principles.
                </p>
              </div>
            </div>

            <div className="px-lg-5 text-white opacity-60"></div>
            <div className="col-md-12 col-lg-4 col-xl-5">
              <div className="d-flex align-items-end ps-lg-5 mb-4">
                <h3 className="text-white display-4">
                  <span className="d-block">Architect</span>
                  <span className="d-block">Led</span>
                  <span className="d-block">Design</span>
                  <span className="d-block">Build</span>
                </h3>
                <img
                  src="images/gif/1.gif"
                  className="maxw-120 mb-2"
                  width="180"
                  height="130"
                />
              </div>
              <div className="px-lg-5 text-white opacity-60">
                <div className="two-hlines">
                  <a href="#">
                    <svg className="icon fs-2" role="button">
                      <use href="#icon_northeast"></use>
                    </svg>
                  </a>
                  <p>
                    The Edge of Noir lies in its innovative conceptual thinking
                    backed by demonstrated experience, skills and technical
                    expertise to competently translate ideas into reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-7 text-center">
              <div className="d-inline-block position-relative">
                <img src="images/world-map.png" className="worldmap" />
                <button
                  className="animation-dot map-dot1"
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-content="<img src='images/rahul-nair.jpg' class='map_popoper_image'/><h5 class='pt-1 pb-1 text-uppercase m-0'>Rahul Nair</h5><h6 class='pt-1 pb-1 text-uppercase m-0'> Founder</h6><p class='m-0 opacity-80 map_popoper_text'>AN ASSOCIATE MEMBER OF THE INDIAN INSTITUTE OF ARCHITECTS AND REGISTERED UNDER THE COUNCIL OF ARCHITECTURE, INDIA, AR.NAIR IS A SELF-TAUGHT ARTIST AND AN ARCHITECT WHO GRADUATED FROM MANIPAL UNIVERSITY WITH A CGPA OF 8.11.HIS WORK EXPERIENCE HAS SPREAD ACROSS INDIA AND THE MIDDLE-EAST SINCE 2016, LEADING TO ESTABLISHING NOIR AS A BRAND. APART FROM HIS ENGAGEMENT WITH THE DESIGN OF BUILDINGS, RAHUL HAS BEEN ACTIVELY INVOLVED IN CIVIC AND URBAN AFFAIRS IN KOCHI, HAVING SERVED ON COMMISSIONS FOR MODULAR PUBLIC TOILETS AND URBAN NEIGHBORHOOD DEVELOPMENT WITH VARIOUS ORGANIZATIONS.</p>"
                  data-bs-html="true"
                ></button>

                <button
                  className="animation-dot map-dot3"
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-content="<img src='images/akshay-dev.jpg' class='map_popoper_image'/><h5 class='pt-1 pb-1 text-uppercase m-0'>Akshay Dev</h5><h6 class='pt-1 pb-1 text-uppercase m-0'>Founder</h6><p class='m-0 opacity-80 map_popoper_text'>REGISTERED UNDER THE COUNCIL OF INDIA, AR.DEV GRADUATED FROM SALEM SCHOOL OF ARCHITECTURE IN 2018. GROWN FROM THE ROOT LEVEL AT NOIR, AR. DEV CURRENTLY LEADS NOIR OFFICE, COK. HIS PRIMARY RESPONSIBILITIES INCLUDE MANAGING THE OVERALL OPERATIONS AND RESOURCES OF THE NOIR GROUP. APART FROM ARCHITECTURE, AKSHAY IS A BLACK BELT HOLDER IN KARATE AND AN AVID TRAVELER. HIS CONTRIBUTIONS TO NOIR CONTINUE TO FUEL THE GROWING TEAM.</p>"
                  data-bs-html="true"
                ></button>

                <button
                  className="animation-dot map-dot4"
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-content="<img src='images/jaison-joseph.jpg' class='map_popoper_image'/><h5 class='pt-1 pb-1 text-uppercase m-0'>Jaison Joseph</h5><h6 class='pt-1 pb-1 text-uppercase m-0'>partner</h6><p class='m-0 opacity-80 map_popoper_text'>THE PARACLETE GROUP, REPRESENTED BY JAISON JOSEPH, HAS GARNERED A FORTY-YEAR REPUTATION IN THE CONSTRUCTION INDUSTRY. THE GROUP HAS EARNED RECOGNITION FOR UNDERTAKING LARGE, COMPLEX PROJECTS, ENCOURAGING INNOVATION, AND EMBRACING EMERGING TECHNOLOGIES.PARACLETE GROUP REPRESENTS THE BUILDER AND DEVELOPER DIVISION FOR NOIR PAN INDIA.</p>"
                  data-bs-html="true"
                ></button>

                <button
                  className="animation-dot map-dot5"
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-content="<img src='images/user4.jpg' class='map_popoper_image'/><h5 class='pt-1 pb-1 m-0 text-uppercase'>Altaf Arakkal</h5><h6 class='pt-1 pb-1 m-0 text-uppercase'>Partner</h6><p class='m-0 opacity-80 map_popoper_text'>MR.ARAKKAL HAS AN INTERNATIONAL PRESENCE WITH OVER TWO DECADES OF BUSINESS ACUMEN IN THE FURNITURE INDUSTRY. APART FROM HIS FURNITURE BUSINESS IN INDIA, UAE, AND THE UK, MR.ARAKKAL IS NOW FOCUSED ON HOSPITALITY SERVICES BASED OUT OF INDONESIA. MR.ARAKKAL ACTS AS A CULTURAL PORTAL TO INDONESIA'S RICH HERITAGE AND HIGHLY SKILLED CRAFTSMANSHIP FOR NOIR TO EXPLORE FURTHER IN DESIGN.</p>"
                  data-bs-html="true"
                ></button>

                <button
                  className="animation-dot map-dot6"
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-content="<img src='images/ngo-viet-quoc-hung.jpg' class='map_popoper_image'/><h5 class='pt-1 pb-1 m-0 text-uppercase'>Ngo Viet Quoc Hung</h5><h6 class='pt-1 pb-1 text-uppercase m-0'>Associate</h6><p class='m-0 opacity-80 map_popoper_text'>H&T VISUAL STUDIO, FOUNDED BY QUOC HUNG, HAS BEEN A LONG-TERM VISUALIZATION PARTNER WITH NOIR. AR. HUNG IS AN ARCHITECT AND 3D VISUALIZER WHO GRADUATED FROM DA NANG UNIVERSITY OF SCIENCE AND TECHNOLOGY. HIS EXPERTISE LIES IN BRINGING IDEAS TO LIFE, USING PLANS, ILLUSTRATIONS, AND OTHER REFERENCE MATERIALS TO PRODUCE HIGH-END PHOTO-REALISTIC VISUALS AND ANIMATIONS FOR VARIOUS DESIGN AGENCIES GLOBALLY.</p>"
                  data-bs-html="true"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
