import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

class Buttons extends Component{
    render(){
        return(

            <div className = "buttons">
                <div className = "d-flex flex-row">
                    <Button color="danger" className = "start-btn" onClick = {this.props.fight}>Attack</Button>
                    <Button color="danger" className = "start-btn">Shuffle Cards</Button>
                </div>

                <div className = "d-flex flex-row">
                    <Button color="danger"  className = "start-btn">Health Boost</Button>
                    <Button color="danger"  className = "start-btn">Stamina Boost</Button>
                </div>
            </div>
    
        )

    }
	
}

export default Buttons;

/* <span className = "start-btn">Use Items</span> */