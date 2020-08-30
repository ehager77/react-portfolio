import React from 'react';
import Hamburger from './Hamburger';
import FadeIn from 'react-fade-in';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
	constructor(props){
		super(props);

	};

	componentDidMount(){
		console.log(this.props.className)
	};

	render() {
		return (
			<div className={"header " + this.props.className}>
				<Container>
					<FadeIn delay='1000' transitionDuration='800'>
						<div className="row v-center">
							<div className="logo">
								<img src={require(`../assets/${this.props.className}-header-logo.svg`)}></img>
							</div>
							<div className="nav">
								<Hamburger color={this.props.className}/>
							</div>
						</div>
					</FadeIn>
				</Container>
			</div>
		);
	}
}

export default Header;
