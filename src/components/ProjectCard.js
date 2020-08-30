import React from 'react';
import { Card } from 'react-bootstrap';

class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card border="light" style={{ width: '30rem', top:-25}}>
					<Card.Img variant="top" src={require('../assets/h2grow.png')} />
					<Card.Body style={{paddingLeft:'0px'}}>
						<Card.Title style={{fontFamily:'Bentham', fontSize: '1.3rem', color: '##202226', paddingBottom:'7px'}}>Card Title</Card.Title>
						<Card.Text style={{fontFamily:'Raleway', color: 'grey', fontSize:'.8rem'}}>
							Some quick example text to build on the card title.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default ProjectCard;
