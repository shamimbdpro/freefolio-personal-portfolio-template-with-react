import React, { Component } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./includes/Header"
import Footer from "./includes/Footer"

import Home from "./Index"
import About from "./About"
import Team from "./Team"
import Price from "./Price"
import Service from "./Service"
import ServiceSingle from "./ServiceSingle"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import BlogSingle from "./Single"
import Contact from "./Contact"

export default class AppRouter extends Component {
  render() {
    return (
   
        <BrowserRouter>
          <Header/>
          <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/service" element={ <Service /> } />
                  <Route path="service/:slug" exact element={ <ServiceSingle /> } />
                  <Route path="/team" element={ <Team /> } />
                  <Route path="/price" element={ <Price /> } />
                  <Route path="/portfolio" element={ <Portfolio /> } />
                  <Route path="/blog" element={ <Blog /> } />
                  <Route path="/blog-single" element={ <BlogSingle /> } />
                  <Route path="/contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
     
    )
  }
}
