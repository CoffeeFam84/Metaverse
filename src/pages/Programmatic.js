import React, { useEffect, useState } from "react";
import LightBox from "../components/LightBox"

function Programmatic() {
    window.document.title = "Programmatic"
    const [record, setRecord] = useState('');

    useEffect(() => {
        setRecord(JSON.parse(localStorage.getItem('chartdata')).programmatic[0])
    }, [])

    return (
        <>
            <div className="chart-wrapper">
                <div className="chart-container">

                    <div className="chart-inner">
                        {
                            (record && record !== '') ? Object.entries(record).map((v, i) => {
                                return (
                                    <div className="chart-stack" data-label={v[0]} key={i}>
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
export default Programmatic