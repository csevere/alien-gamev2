//required dependencies 
import React, {Component} from 'react';
import alienassets from './alien-assets/d1.gif';
import Buttons from './Buttons';


function Dice(props){		
	return(
		
		<div id = "dice" className = "text-center">
            <img src = {props.die1} name = "die1Image"/>
            <img src = {props.die2} name = "die2Image"/>
      	</div> 

	)
	
}

export default Dice 