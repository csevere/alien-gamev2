import React, {Component} from 'react';
import { connect} from 'react-redux';
import { Container, 
    Row, 
    Col,
    Button, 
    Card, 
    CardHeader,
    CardFooter,
    CardText, 
    CardImg, 
    CardImgOverlay 
} from 'reactstrap';


const PlayerDeck = (props) =>{
    const deal = props.dealCond; 
    console.log(deal + "DEAL"); 
    const showCards = props.showCards
    const showFightCards = {
        visibility: 'visible'
    }
    const hideFightCards = {
        visibility: 'hidden'
    }



    return(
        <div>
            <div className = "player-deck d-flex flex-row">

                <Card className = "player-deck-card m-2" style = {!showCards ? hideFightCards : showFightCards} >
                    {!deal ? null : props.dealCards()}
                </Card>

               <Card className = "player-deck-card m-2" style = {!showCards ? hideFightCards : showFightCards}>
                    {!deal ? null : props.dealCards()}
                </Card> 

                <Card className = "player-deck-card m-2">
                    <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                </Card>
            </div>
        </div>
    )
             
}

export default PlayerDeck; 