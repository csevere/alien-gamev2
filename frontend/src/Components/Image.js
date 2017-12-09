import React from 'react';

function Image(props){
	return(

		<div  className = "text-center" id = "alien">
            <img src = {props.image} name = "alienImage" alt = ""/>
         </div>
         



	)
}

export default Image; 