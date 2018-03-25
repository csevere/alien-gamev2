import React, {Component} from 'react'; 

const Buttons = (props) =>{
	return(

		<div className = "buttons">
			<button className = "btn btn-default" onClick = {this.props.fight}>Attack</button>
			<button className = "btn btn-default" onClick = {this.props.stamina}>Health Boost</button>
			<button className = "btn btn-default" onClick = {this.props.health}>Stamina Boost</button>
			<button className = "btn btn-default" onClick = {this.props.health}>Use Items</button>
		</div>


	)
	
}

export default Buttons;

// <button className = "btn btn-default" onClick = {this.props.help}>Get Help!</button>
// <button className = "btn btn-default" onClick = {this.props.escape}>RunAway!</button> 
// <button className = "btn btn-default"><a href="javascript:history.go(0)">Replay!</a></button>