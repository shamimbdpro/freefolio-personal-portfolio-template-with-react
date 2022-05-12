import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
            <footer className="footer">
          <div className="footer-top pt-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-30">
                  <div className="footer-widgets">
                    <h2><a href="index.html">Logo</a></h2>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The standard chunk of Lorem Ipsum used since .</p>
                  </div>
                </div>
                <div className="col-lg-3 mb-30">
                  <div className="footer-widgets">
                    <h3>Usefull Links</h3>
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Services Page</a></li>
                      <li><a href="#">News</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 mb-30">
                  <div className="footer-widgets">
                    <h3>Category</h3>
                    <ul>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">UI & UX Design</a></li>
                      <li><a href="#">Web Development</a></li>
                      <li><a href="#">Digital Marketing</a></li>
                      <li><a href="#">Search Engine Optimization</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 mb-30">
                  <div className="footer-widgets">
                    <h3>Subscribe Form</h3>
                    <p>Subscribe Our Newslatter.</p>
                    <form action="#">
                      <input type="email" name="email" placeholder="Email" />
                      <button className="button-1" type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p>Copyright ©2021 <a href="#">FreeFolio</a> All Rights Reserved by <a href="https://www.codepopular.com">CodePopular</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="scroll-area">
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    )
  }
}
