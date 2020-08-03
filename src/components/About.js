import React, { Component } from 'react';

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false,
		};
	}
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img
							className="profile-pic"
							src="images/images/Lespron_logo.png"
							alt=""
						/>
						{/* <img className="profile-pic" src="images/profilepic.jpg" alt="" /> */}
					</div>

					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p>{resumeData.aboutme}</p>

						<div className="row">
							<div className="columns">
								<p className="address">
									<h3>Why did I start developing?</h3>
									<p>{resumeData.whyCoding}</p>
									<br />
									<h3>Family</h3>
									<p>{resumeData.family}</p>
									<br />
									<h3>Interests</h3>
									<p>{resumeData.interests}</p>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
