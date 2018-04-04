import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
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


const EnemyDeck = (props) =>{

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
        <div>
            <div className = "enemy-deck d-flex flex-row">
                <ul className = "deck">
                    <div>
                        <li>
                            {props.getEDeck()}
                        </li> 
                    </div>
                </ul>

                <ul className = "d-flex deck-card card-2" style = {cardStyle1}>
                    <li className = "deck-card-item faux">
                        <Card className = "enemy-deck-card">
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li> 

                    <li className = "deck-card-item real">
                         {!draw ? null : props.getECard2()}
                    </li>
                </ul>

                <ul className = "d-flex deck-card card1 " style = {cardStyle1}>
                    <li className = "deck-card-item faux">
                        <Card className = "enemy-deck-card" style = {deckStyle}>
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li> 

                    <li className = "deck-card-item real">
                        {!draw ? null : props.getECard1()}
                    </li>
                </ul>
            </div>
        </div>
    )            
}

export default EnemyDeck; 