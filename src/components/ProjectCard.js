import React from 'react';
import { Card} from 'react-bootstrap';

class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Card className="project-card">
					<Card.Img className="project-hero" variant="top" src={require('../assets/h2grow.png')} />
					<Card.Body className="project-card-body" >
						<Card.Title className="project-title" >CardTitle</Card.Title>
						<Card.Text className="project-subtitle">
							Some quick example text to build on the card title.
						</Card.Text>
					</Card.Body>
				</Card>	
		);
	}
}

export default ProjectCard;
