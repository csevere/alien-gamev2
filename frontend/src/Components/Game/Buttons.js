import React, {Component} from 'react'; 

class Buttons extends Component{
    render(){
        return(

            <div className = "buttons">
                <span className = "start-btn" onClick = {this.props.fight}>Attack</span>
                <span className = "start-btn">Health Boost</span>
                <span className = "start-btn">Stamina Boost</span>
                <span className = "start-btn">Use Items</span>
            </div>
    
        )

    }
	
}

export default Buttons;