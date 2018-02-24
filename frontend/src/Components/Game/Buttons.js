import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

const Buttons = (props)=>{

        const disableButtons = {
            display: 'none'
        }
        
        const state = props.active; 

   
        return(

            <div className = "buttons" style = {!state ? disableButtons : null }>
                <div className = "d-flex flex-row">
                    <Button color="danger" className = "start-btn" onClick = {props.fight} >Attack</Button>
                    <Button color="danger" className = "start-btn">Shuffle Cards</Button>
                </div>

                <div className = "d-flex flex-row">
                    <Button color="danger"  className = "start-btn">Health Boost</Button>
                    <Button color="danger"  className = "start-btn">Stamina Boost</Button>
                </div>
            </div>
    
        )


	
}

export default Buttons;

/* <span className = "start-btn">Use Items</span> */

// className = {`start-btn ${state}`} 