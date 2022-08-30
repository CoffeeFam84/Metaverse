import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import OwlCarousel, { Options } from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Press(){
    window.document.title = "Press";

    const  [state] = useState({
        options: {
            loop: true,
            margin: 20,
            nav: false,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                800: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
                1300: {
                    items: 5,
                },
            },
        }
    })


    return (
        <>
        <div className="cover-box press-box hide-nav">
            <div className="container-fluid">
                <div className="row align-items-center mx-0">
                    <div className="col-lg-12">
                        <h2 className="display-6 fw-normal text-white">Press</h2>
                        <OwlCarousel className='owl-carousel owl-theme' {...state.options}>
                            <div className='item'>
                                <div className="press-item bg-warning mt-4">
                                 <p><a href="https://www.newindianexpress.com/cities/kochi/2020/jun/12/pinarayi-vijayan-inaugurates-ic4-of-cochin-smart-mission-2155395.html"target="_blank">
                                    <img src="/images/press/1.png" alt="press 1"  /></a></p>
                                    <p>
                                    Chief Minister Pinarayi Vijayan inaugurates IC4 of Cochin Smart Mission
                                    </p>
                                   
                                </div>
                            </div>
                            <div className='item'>
                                <div className="press-item bg-primary text-white">
                                    <p><a href="https://www.thedecorjournalindia.com/projects/peek-a-box-by-atelier-noir-in-kochi/"target="_blank">
                                    <img src="/images/press/2.png" alt="press 1"/></a></p>
                                    <p>
                                    Peek-a-Box by Atelier Noir in Kochi
                                    </p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="press-item bg-danger text-white mt-5">
                                   <p> <a href="https://www.newindianexpress.com/cities/kochi/2017/sep/18/klean-toilet-to-be-launched-today-1659190.html"target="_blank">
                                    <img src="/images/press/3.png" alt="press 1"/></a></p>                                    
                                    <p>
                                    Better Kochi Response Group (BKRG) launches the concept of  ‘Klean toilet’ built in containers.
                                    </p>
                                </div>
                            </div>
                            
                            <div className='item'>
                                <div className="press-item bg-primary text-white">
                                    <p><a href="https://www.nytimes.com/2021/05/23/world/asia/coronavirus-kerala.html?unlocked_article_code=AAAAAAAAAAAAAAAACEIPuonUktbfqohkTVUZACbKWsIjolqPnvnGh7c7nHj4JTaUUytZiucYGYGE8gHNea9nLZMV7giseeVgYvUpVeAgiahWJVBsQA2l5cDZxMpfL3xo7N2-UjNzgs-dBfUxoDK6K2PmcrYjlba05EnYOnL4G_CKiQ1XLw5vopVifFGq2mVZhfuWV74ohaQtmKspFZt4RjwfZSKVvvaOCxx2ONiOaxq0-RBhEqgCGmmVxYjAnupGJAZCClvGT2d94nI86b5fOdAUOaX5LX0waTq_5c74x83ihcQ1GvSEBf8&referringSource=articleShare"target="_blank">
                                    <img src="/images/press/5.png" alt="press 1"/></a></p>                                   
                                    <p>
                                    As India Stumbles, One State Charts Its Own Covid Course
                                    </p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="press-item bg-danger text-white mt-5">
                                    <p><a href="https://www.buildofy.com/projects/peek-a-box-kakkanad-kochi-atelier-noir-architects" target="_blank">
                                    <img src="/images/press/6.png" alt="press 1"/></a></p>                               
                                    <p>
                                    This beautiful house is an architectural statement on the current housing needs
                                    </p>
                                </div>
                            </div>
                            
                            
                            
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Press