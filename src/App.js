import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './pages/Projects';

class App extends React.Component {
	constructor(props){
		super(props);
		this.changeBackground = this.changeBackground.bind(this);
		this.onScroll = this.onScroll.bind(this);
	};
	
	state = { backgroundColor: 'blue'};

	changeBackground(){
		if(window.scrollY >= 72){
			this.setState({backgroundColor: 'white'});
		}
		else{
			this.setState({backgroundColor: 'blue'})
		}
	};

	onScroll(){
		window.addEventListener('scroll', this.changeBackground)
	}

	componentDidMount(){
		this.onScroll();
	}
	
	render(){
		return (
			<div className={'App ' + this.state.backgroundColor}>
				<Header className={this.state.backgroundColor}/>
				<Banner className={this.state.backgroundColor}/>
				<Projects className={this.state.backgroundColor}/>
			</div>
		);
	}
}

export default App;
