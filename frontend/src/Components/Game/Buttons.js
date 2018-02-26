import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

class Buttons extends Component{
    constructor(props){
        super(props);
        
        this.rollDie = this.rollDie.bind(this); 
        this.dealCard = this.dealCard.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this)

    }

    rollDie(){
        this.props.roll(); 
    }

    dealCard(){
        this.props.deal(); 
    }

    shuffleCards(){
        this.props.shuffle(); 
    }




    render(){

        const state = this.props.active; 
        const hideFight = this.props.hide; 
        const hideDeck = this.props.deck; 

        const hideButtons = {
            display: 'none'
        }
        const hideDeckBtns = {
            display: 'none'
        } 
        const hideFghtBtns = {
            display: 'none'
        } 

        return(

            <div className = "buttons" style = {!state ? hideButtons : null }>
                <div className = "d-flex flex-row">    
                    <Button color="danger" className = "start-btn" onClick = {()=> this.rollDie()}>Roll</Button>
                    <Button color="danger" className = "start-btn" onClick = {()=> this.dealCard()} style = {hideDeck ? hideDeckBtns : null }>Deal</Button>
                    <Button color="danger" className = "start-btn" onClick = {()=> this.shuffleCards()} style = {hideDeck ? hideDeckBtns : null }>Shuffle</Button>
                </div>
    
                <div className = "d-flex flex-row">
                    <Button color="danger" className = "start-btn" style = {hideFight ? hideFghtBtns : null }>Attack</Button>
                    <Button color="danger"  className = "start-btn" style = {hideFight ? hideFghtBtns : null }>HP Up | 5X</Button>
                    <Button color="danger"  className = "start-btn" style = {hideFight ? hideFghtBtns : null }>AP Up | 5X</Button>
                </div>
            </div>
    
        )
    }

  
    


	
}

export default Buttons;

/* <span className = "start-btn">Use Items</span> */

// className = {`start-btn ${state}`} 