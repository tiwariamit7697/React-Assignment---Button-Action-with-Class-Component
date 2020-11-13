import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={isParaShown:false};
		this.showpara=this.showpara.bind(this);
	};
	showpara()
	{
		this.setState({isParaShown:true});
	} 
	
    render() {
    	return(
    		<div id="main">
					<button id="click" onClick={this.showpara}>Show Para</button>
					{this.state.isParaShown ? (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>) :null}
    		</div>
    	);
    }
}


export default App;

