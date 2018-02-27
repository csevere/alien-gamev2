import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

class Buttons extends Component{
    constructor(props){
        super(props);
        
        this.attackEn = this.attackEn.bind(this); 
        this.rollDie = this.rollDie.bind(this); 
        this.shuffleCards = this.shuffleCards.bind(this)
        this.drawCards = this.drawCards.bind(this); 

    }

    attackEn(){
        this.props.attack(); 
    }

    rollDie(){
        this.props.roll(); 
    }

    drawCards(){
        this.props.drawC(); 
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
                    <Button color="danger" className = "start-btn" onClick = {()=> this.drawCards()} style = {hideDeck ? hideDeckBtns : null }>Draw</Button>
                    <Button color="danger" className = "start-btn" onClick = {()=> this.shuffleCards()} style = {hideDeck ? hideDeckBtns : null }>Shuffle</Button>
                </div>
    
                <div className = "d-flex flex-row">
                    <Button color="danger" className = "start-btn"  onClick = {()=> this.attackEn()} style = {hideFight ? hideFghtBtns : null }>Attack</Button>
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