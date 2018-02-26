import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

const Buttons = (props) => {
    const state = props.active; 
    const hideFight = props.hide; 
    const hideDeck = props.deck; 

    const hideButtons = {
        display: 'none'
    }
    const hideDeckBtns = {
        display: 'none'
    } 
    const hideFghtBtns = {
        display: 'none'
    } 

    console.log(hideDeck + " Deck");

    return(

        <div className = "buttons" style = {!state ? hideButtons : null }>
            <div className = "d-flex flex-row">
                <Button color="danger" className = "start-btn" onClick = {props.roll}>Roll</Button>
                <Button color="danger" className = "start-btn" onClick = {props.deal} style = {hideDeck ? hideDeckBtns : null }>Deal</Button>
                <Button color="danger" className = "start-btn" style = {hideDeck ? hideDeckBtns : null }>Shuffle</Button>
            </div>

            <div className = "d-flex flex-row">
                <Button color="danger" className = "start-btn" style = {hideFight ? hideFghtBtns : null }>Attack</Button>
                <Button color="danger"  className = "start-btn" style = {hideFight ? hideFghtBtns : null }>HP Up | 5X</Button>
                <Button color="danger"  className = "start-btn" style = {hideFight ? hideFghtBtns : null }>AP Up | 5X</Button>
            </div>
        </div>

    )


	
}

export default Buttons;

/* <span className = "start-btn">Use Items</span> */

// className = {`start-btn ${state}`} 