import React, { Component } from 'react';
import Cards from './Card';
import projects from './Projects.json';

export class Projects extends Component {
	render() {
		return (
			<section id="portfolio">
				<h2>Projects</h2>
				<h4>
					Not all the projects shown are considered 'production ready'. I have
					decided to display some of my early work to illustrate how quickly I
					can pick up new concepts.{' '}
				</h4>
				{projects.map((el, ind) => (
					<Cards key={ind} content={el} />
				))}
			</section>
		);
	}
}

export default Projects;
