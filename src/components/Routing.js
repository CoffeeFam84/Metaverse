import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Location from "../pages/Location";
import Chronological from "../pages/Chronological";
import Programmatic from "../pages/Programmatic";
import Status from "../pages/Status";
import Career from "../pages/Career";
import Press from "../pages/Press";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
// 
import Task from '../pages/Task';
// 
function Routing() {

    useEffect(() => {
        fetch('data/data.json').then(response => response.json())
            .then((data) => {
                localStorage.setItem('chartdata', JSON.stringify(data));
                document.querySelector('.loader').classList.add('active')
            });
        fetch('data/testData.json').then(response => response.json())
            .then((data) => {
                localStorage.setItem('testData', JSON.stringify(data));
                document.querySelector('.loader').classList.add('active')
            });

    }, []);

    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
           
                <Route path="/" element={<Task />} />
                
                
                <Route path="chronological" element={<Chronological />} />
                <Route path="programmatic" element={<Programmatic />} />
                <Route path="status" element={<Status />} />
                { <Route path="/" element={<Location />} /> }
                <Route path="location" element={<Location />} />
                
                <Route path="about-us" element={<AboutUs />} />
                <Route path="career" element={<Career />} />
                <Route path="press" element={<Press />} />
                <Route path="contact-us" element={<ContactUs />} />
              
                <Route path="task" element={<Task />} />
                
            </Route>
        </Routes>
    )
}
export default Routing