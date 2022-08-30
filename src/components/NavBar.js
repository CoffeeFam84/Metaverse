import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header>
                <div className="topleft-menu">
                    <button type="button" data-bs-toggle="dropdown">
                        <svg className="icon icon-5x"><use href="#icon_menubars"></use></svg>
                    </button>
                    <div className="dropdown-menu shadow-lg">
                        <div className="dropdown-inner">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about-us">About Us</NavLink>
                            <NavLink to="/career">Career</NavLink>
                            <NavLink to="/press">Press</NavLink>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
                <Link to="/" className="header-logo">
                    <img src="images/logo-white-56.png" alt="Noir Logo" />
                </Link>
                <div className="top-plus dropdown">
                    <button className="btn btn-plus text-white p-0 shadow-none" data-bs-toggle="dropdown">
                        <svg className="icon fs-2" role="button">
                            <use href="#icon_circleplus"></use>
                        </svg>
                    </button>
                    <ul className="dropdown-menu bg-transparent border-0">
                        <li className="my-1">
                            <a href="https://instagram.com/eidolon_clairaudience?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                                <img src="images/eidolonnn.png" className="maxw-40" alt="Eidolon" />
                            </a>
                        </li>
                        <li className="my-1">
                            <a href="https://www.wayfarerapp.com" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                                <img src="images/wayfarer.png" className="maxw-40" alt="Eidolon" />
                            </a>
                        </li>
                      
                    </ul>
                </div>
            </header>

            <Outlet />

           

            <footer>
                <div className="container-fluid">

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            Copyright &copy; 2022 Noir. All Rights Reserved.
                            <div>Registered under Council of Architecture, India</div>

                        </div>
                        <div className="col-md-6 text-md-end social-icons">
                            <a href="https://www.linkedin.com/company/atelier-noir" target="_blank" title="Linkedin">
                                <img src="images/social/linkedin.png" alt="Linkedin" />
                            </a>
                            <a href="https://wa.me/+919019262043" target="_blank" title="Whatsapp">
                                <img src="images/social/1.png" alt="whatsapp" />
                            </a>
                            <a href="https://youtube.com/channel/UCnuUImQSGpLtWkkADYJ9Dkg"target="_blank" title="Youtube">
                                <img src="images/social/youtube.png" alt="Youtube" />

                            </a>
                           

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default NavBar