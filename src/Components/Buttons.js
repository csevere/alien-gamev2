import React, {Component} from 'react'; 

class Buttons extends Component{

	render(){
		return(

			<div>
				<button className = "btn btn-default" onClick = {this.props.fight}>Fight!</button>
				<button className = "btn btn-default" onClick = {this.props.help}>Get Help!</button>
				<button className = "btn btn-default" onClick = {this.props.escape}>RunAway!</button>
				<button className = "btn btn-default" onClick = {this.props.stamina}>Use Stamina Pack!</button>
				<button className = "btn btn-default" onClick = {this.props.health}>Use Health Pack!</button>
				<button className = "btn btn-default"><a href="javascript:history.go(0)">Replay!</a></button>
			</div>


		)

	}
	
}

export default Buttons; 