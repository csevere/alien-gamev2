import React, {Component} from 'react'; 
import {
    Button
} from 'reactstrap';

class Buttons extends Component{
    constructor(props){
        super(props);
        this.state = {
            apNum: 8,
            hpNum: 8,
            shuffleNum : 10,
            displayShuff: 'block',
            displayAP: 'block',
            displayHP: 'block'
        }

        this.boostAP = this.boostAP.bind(this);
        this.attackEn = this.attackEn.bind(this);
        this.drawCards = this.drawCards.bind(this); 
        this.boostHP = this.boostHP.bind(this); 
        this.rollDie = this.rollDie.bind(this); 
        this.shuffleCards = this.shuffleCards.bind(this)
        
    }

    attackEn(){
        this.props.attack(); 
    }

    boostAP(){
        this.props.apBoost();
        if(this.state.apNum < 2){
            this.setState({
                displayAP: 'none'
            })

        } else{
            this.setState({
                apNum:this.state.apNum - 1
            })
        }
    }

    drawCards(){
        this.props.drawC(); 
    }

    boostHP(){
        this.props.hpBoost(); 
       
        if(this.state.hpNum < 2){
            this.setState({
                displayHP: 'none'
            })
        } else{
            this.setState({
                hpNum:this.state.hpNum - 1
            })
        }
    }

    rollDie(){
        this.props.roll(); 
    }

    shuffleCards(){
        
        this.props.shuffle(); 
       
        if(this.state.shuffleNum < 2){
            this.setState({
                displayShuff: 'none'
            })

        } else{
            this.setState({
                shuffleNum:this.state.shuffleNum - 1
            })
        }
    }

    render(){
        const state = this.props.active; 
        const hideFight = this.props.hide; 
        const hideDeck = this.props.deck; 
        const hideShuffle = this.state.displayShuff;
        const hideAP = this.state.displayAP; 
        const hideHP = this.state.displayHP; 
        const showRoll = this.props.showroll; 
        const showDeal = this.props.showdeal 

        const hideButtons = {
            display: 'none'
        }
        const hideDeckBtns = {
            display: 'none'
        } 
        const hideFghtBtns = {
            display: 'none'
        } 
        const hideRoll = {
            visibility: 'hidden'
        } 
    
        const hideShuff = {
            display: hideShuffle
        }

        const hideAction = {
            display: hideAP
        }

        const hideHealth = {
            display: hideHP
        }

        return(

            <div className = "buttons" style = {!state ? hideButtons : null }>
                <div className = "d-flex flex-row">    
                    <Button color="danger" className = "start-btn" onClick = {()=> this.rollDie()} style = {showRoll ? null: hideRoll}>Roll</Button>
                    <Button color="danger" className = "start-btn" onClick = {()=> this.drawCards()} style = {hideDeck ? hideDeckBtns : null}>Draw</Button>
                    <Button color="danger" className = "start-btn" onClick = {()=> this.shuffleCards()} style = {hideDeck ? hideDeckBtns : hideShuff }>Shuffle | {this.state.shuffleNum}X</Button>
                </div>
    
                <div className = "d-flex flex-row">
                    <Button color="danger" className = "start-btn"  onClick = {()=> this.attackEn()} style = {hideFight ? hideFghtBtns : null }>Attack</Button>
                    <Button color="danger"  className = "start-btn" onClick = {()=> this.boostHP()} style = {hideFight ? hideFghtBtns : hideHealth }>HP Up | {this.state.hpNum}X</Button>
                    <Button color="danger"  className = "start-btn" onClick = {()=> this.boostAP()}  style = {hideFight ? hideFghtBtns : hideAction }>AP Up | {this.state.apNum}X</Button>
                </div>
            </div>
        )
    }	
}

export default Buttons;

/* <span className = "start-btn">Use Items</span> */

// className = {`start-btn ${state}`} 