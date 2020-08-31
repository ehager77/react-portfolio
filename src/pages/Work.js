import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Row, Col, Container } from 'react-bootstrap';

const Work = () => {
	return (
		<Container style={{marginTop: '16px'}}>
			<Row style={{justifyContent:'space-between'}}>
				<Col  xs ={12} s={12} md={6}>
					<ProjectCard/>
				</Col>
				<Col style={{marginRight:'0'}} xs ={12} s={12} md={6}>
					<ProjectCard/>
				</Col>
			</Row>
		</Container>
	);
};

export default Work;
