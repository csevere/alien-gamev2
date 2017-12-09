import React from 'react';

function Dice(props){
	return(
		<div className = "row" id = "dice">
		  <img src = {props.dieone} alt = ""/>
		  <img src = {props.dietwo} alt = ""/>
		</div>
	)
}

export default Dice; 