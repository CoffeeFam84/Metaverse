import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Career() {
  window.document.title = "Career";
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [data, setData] = useState({
    inputValue: "",
    validateInput: null,
    validateInputMsg: "",
  });
  const urlRegex = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  const validateLinkInput = (value, flagValue) => {
    const regexResult = urlRegex.test(value);
    let validMsg = "";
    if (value.length === 0 && value.length === null) {
      flagValue = false;
      validMsg = "Link is required.";
    } else if (!regexResult) {
      flagValue = false;
      validMsg = "Please enter valid link";
    } else {
      flagValue = true;
    }
    return { valid: flagValue, message: validMsg };
  };
  const handle_LinkInput = (val) => {
    val.preventDefault();
    const value = val.target.value;
    var res = validateLinkInput(value, data.validateInput);
    setData({
      ...data,
      inputValue: value,
      validateInput: res.valid,
      validateInputMsg: res.message,
    });
  };

  function handleSubmitLink(e) {
    e.preventDefault();
    if (data.validateInput) {
      setIsApiLoading(true);
      emailjs
        .send(
          "service_qboc5ul",
          "template_vc62elx",
          { message: data.inputValue },
          "gWnK_bGahzDvkuB0i"
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Document submitted successfully");
            setData({
              ...data,
              inputValue: "",
            });
            setIsApiLoading(false);
          } else {
            toast.error("Please try again");
            setIsApiLoading(false);
          }
          //   console.log(res);
        })
        .catch((err) => {
          setIsApiLoading(false);
          throw err;
        });
    } else {
      setData({
        ...data,
        validateInput: false,
        validateInputMsg: "Link is required",
      });
    }
  }

  return (
    <>
      <div className="cover-box press-box hide-nav bg-dark2">
        <div className="container">
          <div className="row align-items-center justify-content-between pt-4">
            <div className="col-md-5 col-xl-4 order-md-1">
              <img
                src="images/career.png"
                alt="Working Illustration"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 text-white">
              <h2 className="display-5 fw-normal">
                We welcome the very best talent.
              </h2>
              <p className="opacity-75">
                Noir is a dynamic, multidisciplinary practice driven by
                innovation and collaboration. We offer a diverse selection of
                roles across various departments in design.{" "}
              </p>
              <p className="opacity-75">
                Our work is underpinned by a sustainable approach to design and
                engineering. We are committed to supporting diversity and
                inclusivity and strive to create a working environment that is
                responsive to different cultures. We value the contributions of
                our diverse team and are proud to offer equal opportunities for
                all, regardless of age, disability, gender reassignment,
                marriage and civil partnership, race, religion or belief, sex
                and sexual orientation.
              </p>
              <div className="mt-5 mb-5 mb-md-0">
                <form onSubmit={(e) => handleSubmitLink(e)}>
                  <div className="mb-3 col-lg-8 col-md-10">
                    <label htmlFor="linkInput" className="opacity-75 mb-2">
                      Upload your documents here:
                    </label>
                    <input
                      type="text"
                      name="resume_link"
                      id="linkInput"
                      className={
                        !data.validateInput && data.validateInput !== null
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      placeholder="Enter Resume Link"
                      value={data.inputValue}
                      onChange={(val) => handle_LinkInput(val)}
                    />
                    {!data.validateInput && data.validateInput !== null && (
                      <div className="text-danger">{data.validateInputMsg}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary px-4 mt-2 ${
                      isApiLoading && "disabled"
                    }`}
                  >
                    {isApiLoading && (
                      <div
                        className="spinner-border spinner-border-sm text-light me-2"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Career;
