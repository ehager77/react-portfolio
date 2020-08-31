import React from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
        title: '',
        subtitle: '',
        hero:'',
		error: null,
	};

	componentDidMount = async () => {
		try {
            const response = await axios.get('http://localhost:1337/projects');
            this.setState({
                title: response.data[0].title, 
                subtitle: response.data[0].subtitle,
                hero: response.data[0].hero.url
            })    
		} catch(error){
            this.setState({error})
        }
	};

	render() {
        console.log(this.state)
		return (
			<Card className="project-card">
				<Card.Img className="project-hero grow" variant="top" src={require('../assets/feed-hero-png.png')} />
				<Card.Body className="project-card-body">
					<Card.Title className="project-title">{this.state.title}</Card.Title>
					<Card.Text className="project-subtitle">
						{this.state.subtitle}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default ProjectCard;
