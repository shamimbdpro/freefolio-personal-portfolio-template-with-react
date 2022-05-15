import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>

{/* <!-- Start Breadcrumb Area -->  */}
	<section className="breadcrumb-area" style={{backgroundImage:`url(${'assets/img/breadcrumb.jpg'})`}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breadcrumb-content pt-50 pb-50">
						<h2>Portfolio</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Our Portfolio</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Start Portfolio Area -->  */}
	<section className="portfolio-area pt-100 pb-70 section-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-headding text-center mb-50">
						<h4><span>Portfolio</span></h4>
						<h2>Our Works</h2>
					</div>
				</div>
			</div>
			<div className="row">
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single --> */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
			
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
				{/* <!-- Single -->  */}
				<div className="col-lg-4 col-md-6 mb-30">
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
				</div>
			</div>
		</div>
	</section>
        
      </React.Fragment>
    )
  }
}
