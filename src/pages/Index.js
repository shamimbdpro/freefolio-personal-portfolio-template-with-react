import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>


        <div className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="hero-caption">
                  <h4 className="left-border-s">Hello</h4>
                  <h2>I'm <span>Manilla</span> <br /> UI & UX Designer</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content .</p>
                  <a className="button-1 mt-20" href="#">Explore Now </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img">
                  <img src="assets/img/banner-man.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="services-area pt-100 pb-100 section-bg">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="section-headding text-center mb-50">
                  <h4><span>Services</span></h4>
                  <h2>What We Do</h2>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-xl-4 col-md-6 mb-30">
                <div className="services-item">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className="title">
                      <h2>Digital Marketing</h2>
                    </div>
                  </div>
                  <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    <a href="services-single.html">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 mb-30">
                <div className="services-item">
                  <div className="top">
                    <div className="icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="title">
                      <h2>Search Engine Optimization</h2>
                    </div>
                  </div>
                  <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    <a href="services-single.html">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 mb-30">
                <div className="services-item">
                  <div className="top">
                    <div className="icon">
                      <i className="far fa-chart-bar"></i>
                    </div>
                    <div className="title">
                      <h2>UIX Product Design</h2>
                    </div>
                  </div>
                  <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    <a href="services-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt-10">
                <a className="button-2" href="services.html">More Services</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="assets/img/about_left.png" alt="about img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="left-border-s">About Us</h4>
                  <h2>A house of creative & Intelligent</h2>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through</p>
                  <p className="active">the cites of the word in classNameical literature, discovered the undoubtable source. </p>
                  <div className="about-area-btn mt-30">
                    <a className="button-3" href="team.html">Our Team</a>
                    <a className="button-1" href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-work pt-100 pb-100 section-bg">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-headding text-center mb-50">
                <h4><span>Portfolio</span></h4>
                <h2>Latest Works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="latest-projects-full owl-carousel">

              <div className="portfolio-item">
                <img src="assets/img/portfolio/1.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/1.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <img src="assets/img/portfolio/2.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/2.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <img src="assets/img/portfolio/3.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/3.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <img src="assets/img/portfolio/4.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/4.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <img src="assets/img/portfolio/5.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/5.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <img src="assets/img/portfolio/6.jpg" alt="portfolio" />
                <div className="content">
                  <div className="content-full">
                    <div className="btn">
                      <a className="zoom" href="assets/img/portfolio/6.jpg"><i className="fas fa-search"></i></a>
                      <a href="portfolio-single.html"><i className="fas fa-link"></i></a>
                    </div>
                    <h3><a href="#">Project Title</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="team-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-headding text-center mb-50">
                  <h4><span>Team</span></h4>
                  <h2>Meet our team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t1.jpg" alt="team" />
                  </div>
                  <div className="content">
                    <h3> Sr. Joy Roy </h3>
                    <p>Designer</p>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t2.jpg" alt="team" />
                  </div>
                  <div className="content">
                    <h3> Ismail Chouduri  </h3>
                    <p>It Support</p>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t3.jpg" alt="team" />
                  </div>
                  <div className="content">
                    <h3> Salman Ahmed </h3>
                    <p>Designer</p>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-area pt-100 pb-100 section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-headding text-center mb-50">
                  <h4><span>Testimonials</span></h4>
                  <h2>Client Feedbacks</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testmonial-full owl-carousel">
                  <div className="testimonial-single">
                    <div className="testimonial-single-header">
                      <div className="thumbnail">
                        <img src="assets/img/t1.jpg" alt="testimonial" />
                      </div>
                      <div className="testimonial-title">
                        <h4>Rachel Adams</h4>
                        <p>Regular Clients</p>
                        <div className="ratting">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-single-footer">
                      <p>We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.</p>
                    </div>
                  </div>
                  <div className="testimonial-single">
                    <div className="testimonial-single-header">
                      <div className="thumbnail">
                        <img src="assets/img/t2.jpg" alt="testimonial" />
                      </div>
                      <div className="testimonial-title">
                        <h4>Rachel Adams</h4>
                        <p>Regular Clients</p>
                        <div className="ratting">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-single-footer">
                      <p>We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.</p>
                    </div>
                  </div>
                  <div className="testimonial-single">
                    <div className="testimonial-single-header">
                      <div className="thumbnail">
                        <img src="assets/img/t3.jpg" alt="testimonial" />
                      </div>
                      <div className="testimonial-title">
                        <h4>Rachel Adams</h4>
                        <p>Regular Clients</p>
                        <div className="ratting">
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                          <span><i className="fas fa-star"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-single-footer">
                      <p>We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-blog pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-headding text-center mb-50">
                  <h4><span>Blog & News</span></h4>
                  <h2>Latest Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="blog-item">
                  <div className="thumnail">
                    <a href="single.html">
                      <img src="assets/img/blog/1.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-date">
                      <span>20</span>
                      jun
                    </div>
                    <div className="blog-meta">
                      <a href="#"><i className="fas fa-user"></i> Admin</a>
                      <a href="#"><i className="fas fa-tags"></i> Business</a>
                    </div>
                    <h3><a href="single.html">The dramatically visualize on customer directed</a></h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="blog-item">
                  <div className="thumnail">
                    <a href="single.html">
                      <img src="assets/img/blog/3.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-date">
                      <span>20</span>
                      jun
                    </div>
                    <div className="blog-meta">
                      <a href="#"><i className="fas fa-user"></i> Admin</a>
                      <a href="#"><i className="fas fa-tags"></i> Business</a>
                    </div>
                    <h3><a href="single.html">The dramatically visualize on customer directed</a></h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="blog-item">
                  <div className="thumnail">
                    <a href="single.html">
                      <img src="assets/img/blog/2.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="post-date">
                      <span>20</span>
                      jun
                    </div>
                    <div className="blog-meta">
                      <a href="#"><i className="fas fa-user"></i> Admin</a>
                      <a href="#"><i className="fas fa-tags"></i> Business</a>
                    </div>
                    <h3><a href="single.html">The dramatically visualize on customer directed</a></h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
