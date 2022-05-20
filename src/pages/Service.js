import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Service extends Component {
  render() {
    return (
      <div>
        
        {/* <!-- Start Breadcrumb Area -->  */}
	<section className="breadcrumb-area" style={{backgroundImage:`url(${'assets/img/breadcrumb.jpg'})`}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breadcrumb-content pt-50 pb-50">
						<h2>Services</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Services</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- End Breadcrumb Area -->  */}
	<section className="services-area pt-100 pb-100 section-bg">
		<div className="container">
			{/* <!-- Section Title -->  */}
			<div className="row">
				<div className="col-lg-12">
					<div className="section-headding text-center mb-50">
						<h4><span>Services</span></h4>
						<h2>What We Do</h2>
					</div>
				</div>
			</div>
			<div className="row">
				{/* <!-- Single -->  */}
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
							<Link to="digital-marketing">Read More</Link>
						</div>
					</div>
				</div>
				{/* <!-- Single -->  */}
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
							<Link to="digital-marketing">Read More</Link>
						</div>
					</div>
				</div>
				{/* <!-- Single -->  */}
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
							<Link to="digital-marketing">Read More</Link>
						</div>
					</div>
				</div>
				{/* <!-- Single -->  */}
				<div className="col-xl-4 col-md-6 mb-30">
					<div className="services-item">
						<div className="top">
							<div className="icon">
								<i className="fas fa-chart-pie"></i>
							</div>
							<div className="title">
								<h2>Web Development</h2>
							</div>
						</div>
						<div className="content">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
							<Link to="digital-marketing">Read More</Link>
						</div>
					</div>
				</div>
				{/* <!-- Single -->  */}
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
							<Link to="digital-marketing">Read More</Link>
						</div>
					</div>
				</div>
				{/* <!-- Single -->  */}
				<div className="col-xl-4 col-md-6 mb-30">
					<div className="services-item">
						<div className="top">
							<div className="icon">
								<i className="fab fa-accusoft"></i>
							</div>
							<div className="title">
								<h2>Wordpress Website</h2>
							</div>
						</div>
						<div className="content">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
							<Link to="digital-marketing">Read More</Link>
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
