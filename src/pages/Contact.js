import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
              
                <section class="breadcrumb-area" style={{background:`url(${'assets/img/breadcrumb.jpg'})`}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb-content pt-50 pb-50">
                                    <h2>Contact Us</h2>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="contact-area pt-100 pb-100">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-headding text-center mb-50">
                                    <h4><span> Get Quote </span></h4>
                                    <h2>Get A Free Qutation</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="contact-form">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" name="number" placeholder="Phone Number" />
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" name="subject" placeholder="Subjects" />
                                            </div>
                                            <div class="col-lg-12">
                                                <textarea name="message" placeholder="Write A Message"></textarea>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="button-1">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact-map"></div>
            </div>
        )
    }
}
