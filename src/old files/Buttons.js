//required dependencies 
//all the smart things will happen here so will need a constructor
import alienassets from './alien-assets/d1.gif';
import Dice from './Dice';

import React, {Component} from 'react';


class Buttons extends Component{

	constructor(props) {
		super(props);
		this.state = {
			diceChange: true
		}
		console.log(this.state.diceChange)
		this.rollDice = this.rollDice.bind(this)

	}
	
	rollDice(){
		this.setState({
			diceChange: !this.state.diceChange
		})
		console.log("it works")  
	}

	//when state changes, it rerenders; decide what to show 

	render(){

		var randomDie1 = Math.ceil(Math.random() * 6);
        var randomDie2 = Math.ceil(Math.random() * 6);

        var die1 = "alien-assets/d" + randomDie1 + ".gif";
        var die2 = "alien-assets/d" + randomDie2 + ".gif";
		
		return(
			<div id = "buttons" className = "text-center">
	            <button className = "btn btn-default" onClick = {this.rollDice}>Fight!</button>
	            <Dice src = {die1}/>
	            <Dice src = {die2}/>  
          	</div>


		)
	}
}

export default Buttons