import React, { Component } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./includes/Header"
import Footer from "./includes/Footer"

import Home from "./Index"
import About from "./About"
import Contact from "./Contact"

export default class AppRouter extends Component {
  render() {
    return (
   
        <BrowserRouter>
          <Header/>
          <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
     
    )
  }
}
