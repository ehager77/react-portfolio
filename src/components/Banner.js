import React from 'react';
import FadeIn from 'react-fade-in';
import { Container } from 'react-bootstrap';

class Banner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main">
				<Container>
					<div className="row">
						<FadeIn transitionDuration="800" delay="500">
							<p className={'title ' + this.props.className}>Eric G. Hager</p>
						</FadeIn>
						<FadeIn transitionDuration="800" delay="200">
							<h2>Multi-disciplinary technologist</h2>
							<h2>deploying innovative solutions to</h2>
							<h2>pressing global challenges.</h2>
						</FadeIn>
					</div>
				</Container>
			</div>
		);
	}
}

export default Banner;
