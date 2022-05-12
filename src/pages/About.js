import React, { Component } from 'react'



export default class About extends Component {


 
  breadcrumbPhoto(){
    return "assets/img/breadcrumb.jpg"
  }

  render() {
    return (
      <React.Fragment>

      
        <section className="breadcrumb-area" style={{ background: `url(${this.breadcrumbPhoto()})`, }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content pt-50 pb-50">
                  <h2>About Us</h2>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>About Us</li>
                  </ul>
                </div>
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


        <section className="counter-area pt-100 pb-70 section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="counter-item">
                  <i className="fas fa-tasks"></i>
                  <h2 className="counter">256</h2>
                  <p>Projects done</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="counter-item">
                  <i className="far fa-smile"></i>
                  <h2 className="counter">25</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="counter-item">
                  <i className="far fa-clock"></i>
                  <h2 className="counter">8</h2>
                  <p>Years of experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-30">
                <div className="counter-item">
                  <i className="fas fa-award"></i>
                  <h2 className="counter">17</h2>
                  <p>Awards</p>
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

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t4.jpg" alt="team" />
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

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t5.jpg" alt="team" />
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

              <div className="col-lg-4 col-md-6 mb-30">
                <div className="team-single">
                  <div className="thumbnail">
                    <img src="assets/img/t1.jpg" alt="team" />
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

      </React.Fragment>
    )
  }
}
