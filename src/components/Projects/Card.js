import React from 'react';
import parse from 'react-html-parser';

export default function card(props) {
	const { title, description, date, tech, image, github, site } = props.content;
	return (
		<div className="projectCard">
			<div className="infoBox">
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}>
					<h2>{title}</h2>
					<p>({date})</p>
				</div>

				<span>{parse(description)}</span>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
				<ul>
					<p>Technologies</p>
					{tech.map((el, ind) => (
						<li key={ind}>{el}</li>
					))}
				</ul>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						minWidth: '10.4vw',
					}}>
					<a
						href={github}
						rel="noopener noreferrer"
						target="_blank"
						className={`fa fa-github`}>
						{/* <img
							className="icons"
							alt="github button"
							src="/images/images/GitHub_icon.png"
						/> */}
					</a>
					<a
						href={site}
						rel="noopener noreferrer"
						target="_blank"
						className={`fa fa-external-link`}>
						{/* <img
							className="icons"
							alt="preview site"
							src={'/images/images/preview_site.png'}
						/> */}
					</a>
				</div>
			</div>
			<img alt="preview project" src={image} />
		</div>
	);
}
