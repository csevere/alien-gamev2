//required dependencies 
import React, {Component} from 'react';



function Alien(props) {
	return(
		
		<div  className = "text-center" id = "alien">
            <img src = {props.image} name = "alienImage" alt = ""/>
        </div>  

	)

}

export default Alien