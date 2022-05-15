import React, { Component } from 'react'

export default class Single extends Component {
  render() {
    return (
      <div>
        
        {/* <!-- Start Breadcrumb Area -->  */}
	<section className="breadcrumb-area" style={{backgroundImage:`url(${'assets/img/breadcrumb.jpg'})`}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breadcrumb-content pt-50 pb-50">
						<h2>Blog Details</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>Blog Details</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Start Blog Area -->  */}
	<section className="blog-area pt-100 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="blog-details">
						<div className="blog-details-content">
							<div className="blog-item">
								<div className="thumnail">
									<img src="assets/img/blog/3.jpg" alt="blog" />
								</div>
								<div className="content">
									<div className="post-date">
		                                <span>20</span>
		                                jun
		                            </div>
		                            <div className="blog-meta">
		                            	<a href="#"><i className="fas fa-user"></i> Admin</a>
		                            	<a href="#"><i className="fas fa-tags"></i> Business</a>
		                            	<a href="#"><i className="far fa-comment-alt"></i> 03 Comments</a>
		                            </div>
		                            <h3>The dramatically visualize on customer directed</h3>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		                            <div className="row">
		                            	<div className="col-md-6 mb-30">
		                            		<img src="assets/img/blog/2.jpg" alt="blog" />
		                            	</div>
		                            	<div className="col-md-6 mb-30">
		                            		<img src="assets/img/blog/3.jpg" alt="blog" />
		                            	</div>
		                            </div>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
						<div className="comments-list">
							<h4>03 Comments</h4>
							<ul>
								<li className="single-comment">
									<img src="assets/img/t1.jpg" alt="img" />
									<div className="comt-content">
										<h5><a href="#">Admin</a></h5>
										<span><i className="fa fa-clock-o"></i> 25 dec, 2021</span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
										<a className="reply" href="#">Reply</a>
									</div>
									<ul className="comment-relpy">
										<li className="single-comment">
											<img src="assets/img/t1.jpg" alt="img" />
											<div className="comt-content">
												<h5><a href="#">Admin</a></h5>
												<span><i className="fa fa-clock-o"></i> 25 dec, 2021</span>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio.</p>
												<a className="reply" href="#">Reply</a>
											</div>
										</li>
									</ul>
								</li>
								<li className="single-comment">
									<img src="assets/img/t1.jpg" alt="img" />
									<div className="comt-content">
										<h5><a href="#">Admin</a></h5>
										<span><i className="fa fa-clock-o"></i> 25 dec, 2021</span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
										<a className="reply" href="#">Reply</a>
									</div>
								</li>
							</ul>
						</div>
						<div className="comments-form">
							<h4>leave your comments</h4>
							<form action="#">
								<textarea name="message" placeholder="Write A Message"></textarea>
								<input type="text" name="name" placeholder="Name" />
								<input type="email" name="email" placeholder="Email" />
								<input type="text" name="sbject" placeholder="Subject" />
								<button className="button-1" type="submit">Submit</button>
							</form>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					{/* <!-- Single -->  */}
					<div className="widgets-single">
						<h2>Search</h2>
						<div className="seacrh-form-wi">
							<form action="#">
								<input type="search" name="search" placeholder="Search here.." />
								<button type="submit"><i className="fas fa-search"></i></button>
							</form>
						</div>
					</div>
					{/* <!-- Single -->  */}
					<div className="widgets-single">
						<h2>Category</h2>
						<ul>
							<li><a href="#">Web Design</a></li>
							<li><a href="#">UI & UX Design</a></li>
							<li><a href="#">Web Development</a></li>
							<li><a href="#">Web Development</a></li>
							<li><a href="#">Search Engine Optimization</a></li>
						</ul>
					</div>
					{/* <!-- Single -->  */}
					<div className="widgets-single">
						<h2>Latest News</h2>
						<ul>
							<li><a href="#">Lorem ipsum dolor sit cing elit, sed do.</a></li>
							<li><a href="#">Duis aute irure dolor in repreh enderit</a></li>
							<li><a href="#">Ut enim ad minim veniam.</a></li>
							<li><a href="#">Lorem ipsum dolor sit amet.</a></li>
							<li><a href="#">Back to the future: Quality education through.</a></li>
						</ul>
					</div>
					{/* <!-- Single -->  */}
					<div className="widgets-single">
						<h2>Tags</h2>
						<div className="tag">
							<a href="#">html</a>
							<a href="#">css</a>
							<a href="#">design</a>
							<a href="#">development</a>
							<a href="#">ui & ux</a>
							<a href="#">php</a>
						</div>
					</div>
					{/* <!-- Single -->  */}
					<div className="widgets-single">
						<h2>Subscribe</h2>
						<div className="subscribe-form-wi">
							<form action="#">
								<input type="email" name="email" placeholder="Subscribe Now.." />
								<button type="submit"><i className="fas fa-paper-plane"></i></button>
							</form>
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
