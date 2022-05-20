import React, { Component } from 'react'

export default class ServiceSingle extends Component {
  render() {
    return (
      <div>
        

        {/* <!-- Start Breadcrumb Area -->  */}
        <section classNameName="breadcrumb-area" style={{backgroundImage:`url(${'assets/img/breadcrumb.jpg'})`}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breadcrumb-content pt-50 pb-50">
						<h2>Services Details</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Services Details</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Breadcrumb Area -->  */}
	<section className="services-area services-detail pt-100 pb-100">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="services-detail-img">
						<img src="assets/img/website.jpg" alt="img" />
					</div>
				</div>
				<div className="col-lg-6 align-self-center">
					<div className="services-details-content">
						<h4 className="left-border-s"> Core Features </h4>
						<h2>A house of creative & Intelligence</h2>
						<p>In social science, agency is defined as the capacity of individuals to act independently and to make their own free choices.</p>
						<ul>
							<li><i className="fas fa-check"></i> Our vision is to inspire businesses to put employee</li>
							<li><i className="fas fa-check"></i> Wellbeing at the heart of everything they do.</li>
							<li><i className="fas fa-check"></i> Our mission is to use employee wellbeing as a tool</li>
							<li><i className="fas fa-check"></i> To champion positive change in the modern</li>
							<li><i className="fas fa-check"></i> employee at the heart of everything app</li>
							<li><i className="fas fa-check"></i> employee at the heart of everything app</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 mt-30">
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through</p>
					<p className="mt-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through</p>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Start Tools Area -->  */}
	<div className="our-tools-wrapper section-bg pt-100 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-headding text-center mb-50">
						<h4><span>Tools</span></h4>
						<h2>We Using Full Power</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-sm-6 mb-30">
					<div className="tools-item">
						<div className="icon">
							<img src="assets/img/ai.png" alt="img" />
						</div>
						<a className="button-3" href="#">Download</a>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 mb-30">
					<div className="tools-item">
						<div className="icon">
							<img src="assets/img/ae.png" alt="img" />
						</div>
						<a className="button-3" href="#">Download</a>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 mb-30">
					<div className="tools-item">
						<div className="icon">
							<img src="assets/img/ps.png" alt="img" />
						</div>
						<a className="button-3" href="#">Download</a>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 mb-30">
					<div className="tools-item">
						<div className="icon">
							<img src="assets/img/adr.png" alt="img" />
						</div>
						<a className="button-3" href="#">Download</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- End Tools Area -->  */}


      </div>
    )
  }
}
