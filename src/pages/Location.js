import React, { useEffect, useState, useRef } from "react";
import Globe from 'react-globe.gl';

import LightBox from "../components/LightBox"
var THREE = require('three');
console.log("Three:::", THREE);
function Location() {
    window.document.title = "Location";
    const globeEl = useRef();

    const labelsTopOrientation = new Set(['India', 'Dubai']); // avoid label collisions
    const [landingSites, setLandingSites] = useState([]);

    useEffect(() => {
        setLandingSites(JSON.parse(localStorage.getItem('chartdata')).locations);

        // Auto-rotate
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.0;
        globeEl.current.controls().Zoom = true;
        globeEl.current.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2 });
    }, [])

    console.log("landigSites:::", landingSites[0])
    return (
        <>
            <div className="map-wrapper">
                <div className="map-inner">
                    <Globe
                        ref={globeEl}
                        globeImageUrl="/images/earth-blue-marble.jpg"
                        //globeImageUrl="/images/earth-day.jpg"
                        // globeImageUrl="/images/earth-night.jpg"
                        // globeImageUrl="/images/earth-topology.png"
                        bumpImageUrl="/images/earth-topology.png"
                        // backgroundImageUrl="/images/night-sky-transparent.png"
                        backgroundColor="rgba(0,0,0,0)"
                        // onZoom={true}
                        showGraticules={true}
                        labelsData={landingSites}

                        labelText="label"
                        labelSize={5}
                        labelResolution={2}
                        labelDotRadius={0.8}

                        labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
                        labelColor={() => 'transparent'}
                        labelLat={d => d.lat}
                        labelLng={d => d.lng}
                        labelLabel={d => `

                            <div class="tooltip-img">
                                <img src="${d.slides[1]}" />
                                <span>${d.label}</span>
                            </div>`
                        }

                        htmlElementsData={landingSites}
                        htmlElement={d => {
                            const el = document.createElement('div');
                            d.slides.map((info, index) => (
                                el.innerHTML = `<img class='solid-img' src=${info} width="50px" height="50px" />`
                            ))

                            el.onclick = () => console.info(d);
                            return el;
                        }}

                        onLabelClick={d => [document.getElementById('triggermodal').setAttribute('data-slides', d.slides)][document.getElementById('triggermodal').click()]
                        }

                    />
                </div>
            </div>

            <div id="triggermodal" data-bs-target="#lightbox" data-bs-toggle="modal"></div>
            <LightBox />
        </>
    )
}
export default Location