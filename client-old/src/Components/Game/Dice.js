import React from 'react';

const Dice = (props) => {
	return(
		<div className = "dice">
		  <img src = {props.dieone} alt = ""/>
		  <img src = {props.dietwo} alt = ""/>
		</div>
	)
}

export default Dice; 