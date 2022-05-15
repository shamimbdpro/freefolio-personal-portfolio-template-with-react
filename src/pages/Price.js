import React, { Component } from 'react'

export default class Price extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb-area" style={{backgroundImage:`url(${'assets/img/breadcrumb.jpg'})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content pt-50 pb-50">
                                    <h2>Our Pricing Plane</h2>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Pricing Plane</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Breadcrumb Area -->  */}
                {/* <!-- Start Pricing Plane -->  */}
                <section className="pricing-area pt-100 pb-70">
                    <div className="container">
                        {/* <!-- Section Title --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-headding text-center mb-50">
                                    <h4><span>Pricing</span></h4>
                                    <h2>Our Pricing Plane</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="pricing-single">
                                    <h4>STARTER</h4>
                                    <h2>$149 <span>/month</span></h2>
                                    <ul>
                                        <li>1 GB STORAGE </li>
                                        <li>3 DOMAIN NAMES </li>
                                        <li>5 FTP USERS </li>
                                        <li>FREE SUPPORT </li>
                                    </ul>
                                    <div className="pricing-btn mt-30">
                                        <a className="button-1" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="pricing-single">
                                    <h4>ADVANCED</h4>
                                    <h2>$249 <span>/month</span></h2>
                                    <ul>
                                        <li>1 GB STORAGE </li>
                                        <li>3 DOMAIN NAMES </li>
                                        <li>5 FTP USERS </li>
                                        <li>FREE SUPPORT </li>
                                    </ul>
                                    <div className="pricing-btn mt-30">
                                        <a className="button-1 active" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="pricing-single">
                                    <h4>BUSINESS</h4>
                                    <h2>$299 <span>/month</span></h2>
                                    <ul>
                                        <li>1 GB STORAGE </li>
                                        <li>3 DOMAIN NAMES </li>
                                        <li>5 FTP USERS </li>
                                        <li>FREE SUPPORT </li>
                                    </ul>
                                    <div className="pricing-btn mt-30">
                                        <a className="button-1" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
