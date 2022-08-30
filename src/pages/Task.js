import React, { useEffect, useState, useRef, useCallback } from "react";
import LightBox from "../components/LightBox";
import Location from "./Location";

let basic = [];

function groupCreat(array, query) {
  const groupBy = array.reduce((group, product) => {
    let current;
    if (query === "chronology") {
      current = product.chronology;
    } else if (query === "status") {
      current = product.status;
    } else if (query === "programmatic") {
      current = product.program;
    }
    group[current] = group[current] ?? [];
    group[current].push(product);
    return group;
  }, {});
  return groupBy;
}

function addRef(array) {
  array.forEach((element, index) => {
    element.ref = index;
  });
  return array;
}

function Task() {
  const [record, setRecord] = useState("");
  const [forceRerender, startRerender] = useState();
  const posRefs = useRef([]);

  const activeRef = useRef("programmatic");
  const chartRef = useRef();
  window.document.title = activeRef.current;

  useEffect(async() => {
    let data = JSON.parse(localStorage.getItem("testData"));
    if (data === null) {
      data = await fetch("data/testData.json")
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    }

     basic = addRef(data);
    //  basic = addRef(JSON.parse(localStorage.getItem("testData")));
    const recordData = groupCreat(basic, activeRef.current);
    setRecord(recordData);
  }, []);

  useEffect(() => {
    if (posRefs.current.length > 0) {
      setinitial(false);
    }
    if (value < 2) setValue((value) => value + 1);
  });

  const [initial, setinitial] = useState(true);
  const [value, setValue] = useState(0); // integer state

  const handleGroupType = (type) => {
    const recordData = groupCreat(basic, type);
    setRecord(recordData);
    if (activeRef.current === "location") {
      setinitial(true);
    } else {
      setinitial(false);
    }
    activeRef.current = type;
    setValue(0);
  };

  return (
    <>
      {activeRef.current === "location" ? (
        <Location />
      ) : (
        <div className="chart-wrapper">
          <div className="chart-container">
            <div className="chart-inner" ref={chartRef}>
              {record &&
                record !== "" &&
                Object.entries(record).map((v, i) => {
                  return (
                    <div className="chart-stack" data-label={v[0]} key={i}>
                      <label>{v[0]}</label>
                      <div className="chart-stack-inside">
                        {v[1].map((iv, ind) => {
                          return (
                            <div key={ind}>
                              <>
                                <div
                                  className="stack-box-canva desktop-hide"
                                  ref={(element) =>
                                    (posRefs.current[iv.ref] = element)
                                  }
                                >
                                  {initial && (
                                    <div
                                      className="stack-box"
                                      style={{ position: "relative" }}
                                    >
                                      <div
                                        className="stack-avatar"
                                        data-slides={iv.slides}
                                        data-bs-target="#lightbox"
                                        data-bs-toggle="modal"
                                      >
                                        <img
                                          className="stack-icon"
                                          src={iv.icon}
                                          alt="chart"
                                        />
                                        <img
                                          className="stack-thumb"
                                          src={iv.thumbnail}
                                          alt="thumb"
                                        />
                                      </div>
                                      <div className="stack-text">
                                        {iv.code}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="card-container mobile-card">
                                  <div className="flip_box">
                                    <div className="front">
                                      <p className="stack-text">{iv.code}</p>
                                    </div>
                                    <div className="back">
                                      <img
                                        className="stack-thumb1"
                                        src={iv.thumbnail}
                                        alt="thumb"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              {!initial &&
                basic.map((item) => {
                  const bodyRect = document.body.getBoundingClientRect();
                  const elemRect =
                    posRefs.current[item.ref].getBoundingClientRect();

                  let offsetY = elemRect.top - bodyRect.top + 60;
                  let offsetX = elemRect.left - bodyRect.left;
                  return (
                    <div
                      className="stack-box desktop-hide"
                      style={{ top: offsetY, left: offsetX }}
                      key={item.ref}
                    >
                      <div
                        className="stack-avatar"
                        data-slides={item.slides}
                        data-bs-target="#lightbox"
                        data-bs-toggle="modal"
                      >
                        <img
                          className="stack-icon"
                          src={item.icon}
                          alt="chart"
                        />
                        <img
                          className="stack-thumb"
                          src={item.thumbnail}
                          alt="thumb"
                        />
                      </div>
                      <div className="stack-text">{item.code}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <nav className="desktop-hide">
        <div className="changer-chart">
          <p
            onClick={() => {
              handleGroupType("location");
            }}
            className={activeRef.current === "location" ? "active" : ""}
          >
            <svg className="icon">
              <use href="#icon_location"></use>
            </svg>
            <span>Location</span>
          </p>
          <p
            onClick={() => {
              handleGroupType("chronology");
            }}
            className={activeRef.current === "chronology" ? "active" : ""}
          >
            <svg className="icon">
              <use href="#icon_calendar"></use>
            </svg>
            <span>Chronological</span>
          </p>
          <p
            onClick={() => {
              handleGroupType("programmatic");
            }}
            className={activeRef.current === "programmatic" ? "active" : ""}
          >
            <svg className="icon">
              <use href="#icon_game"></use>
            </svg>
            <span>Programmatic</span>
          </p>
          <p
            onClick={() => {
              handleGroupType("status");
            }}
            className={activeRef.current === "status" ? "active" : ""}
          >
            <svg className="icon">
              <use href="#icon_graph"></use>
            </svg>
            <span>Status</span>
          </p>
        </div>
      </nav>

      <LightBox />
    </>
  );
}

export default Task;
