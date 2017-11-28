//required dependencies 
import React, {Component} from 'react';


class Progress extends Component{
	render(){
		
		return(
			<div className = "text-center">	
				<div id = "bars" name = "progress">
		            Your Health
		            <progress id = "userHealth" value = "500" max = "500"></progress>
		            Your Action Points
		            <progress id = "actionPoints" value = "100" max = "100"></progress>
		            Aliens' Health
		            <progress id = "alienHealth" value = "1000" max = "1000"></progress>
		            Aliens' Action Points
		            <progress id = "a_actionPoints" value = "30" max = "30"></progress>
		        </div>
	     	</div>  

		)
	}
}

export default Progress