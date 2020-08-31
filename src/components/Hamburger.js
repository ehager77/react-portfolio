import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class Hamburger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: [false, true, false, true],
			color: 'white'
		};
	}

	componentDidUpdate(){
		console.log(this.props.color)
		if(this.props.color == 'blue'){
			this.state.color = 'white'
		}

		else if(this.props.color == 'white'){
			this.state.color = '#202226'
		}
	}

	handleClick(id) {
		let { open } = this.state;
		this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
		});
	}
	render() {
		let color = this.state.color;

		return (
			<div className="menu-row">
				<HamburgerMenu
					isOpen={this.state.open[0]}
					menuClicked={this.handleClick.bind(this, 0)}
					width={26}
					height={16}
					strokeWidth={2}
					rotate={0}
					color={color}
					animationDuration={0.3}
				/>
			</div>
		);
	}
}

export default Hamburger;
