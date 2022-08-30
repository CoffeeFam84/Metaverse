import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";

function LightBox() {
  const [slides, setSlides] = useState("");
  const [slidesNumber, setSlidesNumber] = useState({
    current: 1,
    total: 0,
  });

  useEffect(() => {
    document
      .getElementById("lightbox")
      .addEventListener("show.bs.modal", function (event) {
        setSlides(event.relatedTarget.dataset.slides.split(","));

        new Carousel(document.getElementById("carouselLightBox")).dispose();
        new Carousel(document.getElementById("carouselLightBox"));
        const totalSlider = [
          ...document.querySelectorAll("#carouselLightBox .carousel-item"),
        ].length;
        setSlidesNumber((prevState) => ({
          ...prevState,
          total: totalSlider,
        }));
        document
          .getElementById("carouselLightBox")
          .addEventListener("slide.bs.carousel", function (e) {
            setSlidesNumber((prevState) => ({
              ...prevState,
              current: e.to + 1,
            }));
          });
      });

    document
      .getElementById("lightbox")
      .addEventListener("hidden.bs.modal", function (event) {
        setSlides("");
        setSlidesNumber({
          current: 1,
          total: 0,
        });
      });
  }, []);

  function isUrlValid(userInput) {
    var res = userInput.match(
      `^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$`
    );
    if (res == null) return false;
    else return true;
  }

  return (
    <>
      <div className="modal modal-full fade" id="lightbox" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header border-0 py-2">
              <h5 className="modal-title">
                <Link to="/">
                  <img src="images/logo-white-56.png" alt="Noir Logo" />
                </Link>
              </h5>
              <button
                type="button"
                className="btn border fw-medium"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                CLOSE{" "}
                <svg className="icon icon-4x ms-1">
                  <use href="#icon_cross"></use>
                </svg>
              </button>
            </div>
            <div className="modal-body p-0 d-flex justify-content-center align-items-center">
              <div
                id="carouselLightBox"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-pause="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  {slides && slides.length > 0 && slides !== ""
                    ? slides.map((v, i) => {
                        return (
                          <div
                            className={`carousel-item ${
                              i === 0 ? " active" : ""
                            }`}
                            key={i}
                          >
                            {isUrlValid(v) ? (
                              <div className="iframe-container">
                                <iframe
                                  src={v}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            ) : (
                              <img
                                src={v}
                                className="d-block mx-auto"
                                alt="..."
                              />
                            )}
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                className="btn"
                type="button"
                data-bs-target="#carouselLightBox"
                data-bs-slide="prev"
              >
                <svg className="icon icon-4x">
                  <use href="#icon_leftarrow"></use>
                </svg>
              </button>
              <div className="text-center minw-80">
                {slidesNumber.current} of {slidesNumber.total}
              </div>
              <button
                className="btn"
                type="button"
                data-bs-target="#carouselLightBox"
                data-bs-slide="next"
              >
                <svg className="icon icon-4x">
                  <use href="#icon_rightarrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LightBox;
