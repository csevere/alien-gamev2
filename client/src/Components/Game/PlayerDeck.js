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

const PlayerDeck = (props)=>{
 
    const draw = props.drawCond; 
    
    const showCards = props.showCards
    
    const cardStyle1 = {
        listStyle: 'none'
    }

    const cardStyle2 = {
        listStyle: 'none'
    }

    const deckStyle = {
        position: 'relative',
        left: '-2em'  
    }

    return(
        <div style = {deckStyle}>
            <div className = "player-deck d-flex flex-row">

                <ul className = "d-flex justify-content-start deck-card m-2" style = {cardStyle1}>
                    <li className = "deck-card-item faux">
                        <Card className = "player-deck-card"> 
                            <CardHeader className = "text-center">STAND IN</CardHeader>
                            <CardImg src = 'assets/deck/scifi-texture.jpg' />
                            <CardFooter>
                                <div className = "text-center">Stand in</div>
                            </CardFooter>
                        </Card>
                    </li> 
                    <li className = "deck-card-item real">
                        {!draw ? null : props.getCard1()}
                    </li>
                </ul>
            
                <ul className = "deck-card m-2" style = {cardStyle2}>
                    <li className = "deck-card-item faux">
                        <Card className = "player-deck-card">
                            <CardHeader className = "text-center">STAND IN</CardHeader>
                            <CardImg src = 'assets/deck/scifi-texture.jpg' />
                            <CardFooter>
                                <div className = "text-center">Stand in</div>
                            </CardFooter>
                        </Card>
                    </li> 
                    <li className = "deck-card-item real">
                        {!draw ? null : props.getCard2()}
                    </li>
                </ul>
              
                <ul className = "deck">
                    <li>
                        {props.getDeck()}
                    </li> 
                </ul>
            </div>
        </div>
    )            
}

export default PlayerDeck; 
