import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">

                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <div className="top-info">
                                        <span><i className="far fa-envelope"></i> info123@gmail.com</span>
                                        <span><i className="fas fa-phone-alt"></i> (+56) 565 5656</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="top-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 align-self-center">
                                    <div className="logo">
                                        <h2><Link to="/">FreeFolio</Link></h2>
                                    </div>
                                    <div className="canvas_open">
                                        <a href="#"><i className="fas fa-bars"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="menu">
                                        <nav>
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="about">About</Link></li>
                                                <li><a href="#">Page</a>
                                                    <ul>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="services.html">Services</a>
                                                    <ul>
                                                        <li><a href="services.html">Services</a></li>
                                                        <li><a href="services-single.html">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="portfolio.html">Portfolio</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-single.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="single.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mobile-menu-area">


                    <div className="off_canvars_overlay">

                    </div>
                    <div className="offcanvas_menu">
                        <div className="offcanvas_menu_wrapper">
                            <div className="canvas_close">
                                <a href="#"><i className="fas fa-times"></i></a>
                            </div>
                            <div className="mobile-logo">
                                <h2><a href="index.html">Logo</a></h2>
                            </div>
                            <div id="menu" className="text-left ">
                                <ul className="offcanvas_main_menu">
                                    <li className="menu-item-has-children">
                                        <a href="Index.html"> Home</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Page</a>
                                        <ul className="sub-menu">
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Services</a>
                                        <ul className="sub-menu">
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="services-single.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Portfolio</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="portfolio-single.html">Portfolio Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="contact.html"> Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
