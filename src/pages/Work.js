import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Work = () => {
	return (
		<div className="container">
			<div className="row" style={{ padding: '0 2.5%', height: '100vh'}}>
				<ProjectCard/>
				<ProjectCard/>
			</div>
		</div>
	);
};

export default Work;
