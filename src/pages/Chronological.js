import React, { useEffect, useState } from "react";
import LightBox from "../components/LightBox"

function Chronological() {
    window.document.title = "Chronological";
    const [record, setRecord] = useState('');

    useEffect(() => {
        setRecord(JSON.parse(localStorage.getItem('chartdata')).chronological[0])
    }, []);

    return (
        <>
            <div className="chart-wrapper">
                <div className="chart-container">

                    <div className="chart-inner" style={{ aspectRatio: "auto" }}>
                        {
                            (record && record !== '') ? Object.entries(record).map((v, i) => {
                                return (
                                    <div className="chart-stack" key={i}>
                                        <label>{v[0]}</label>
                                        <div className="chart-stack-inside">
                                            {
                                                v[1].map((iv, ind) => {
                                                    return (
                                                        <div className="stack-box" key={ind}>
                                                            <div className="stack-avatar" data-slides={iv.slides} data-bs-target="#lightbox" data-bs-toggle="modal">
                                                                <img className="stack-icon" src={iv.icon} alt="chart" />
                                                                <img className="stack-thumb" src={iv.thumbnail} alt="thumb" />
                                                            </div>
                                                            <div className="stack-text">{iv.code}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }) : ''
                        }
                    </div>
                </div>
            </div>

            <LightBox />

        </>
    )
}
export default Chronological