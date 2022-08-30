import React, {useEffect, useState, useRef} from "react";
import Globe from 'react-globe.gl';

import LightBox from "../components/LightBox"

function Location(){
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
            onZoom={false}
            showGraticules={true}
            labelsData={landingSites}
            labelText="label"
            labelSize={1.0}
            labelResolution={2}
            labelDotRadius={0.8}
           
            labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
            labelColor={() => 'red'}
            labelLabel={d => `
                <div class="tooltip-img">
                    <img src="${d.slides[1]}" />
                    <span>${d.label}</span>
                </div>
            `}
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