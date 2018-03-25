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


const EnemyDeck = ()=>{

    // const draw = props.drawCond; 
    
    // const showCards = props.showCards
    
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
                            <Card className = "enemy-deck-card deck-item">
                                <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                            </Card>
                        </li> 
                    </div>
                </ul>

                <ul className = "d-flex justify-content-start deck-card ml-3" style = {cardStyle1}>
                    <li className = "deck-card-item faux">
                        <Card className = "enemy-deck-card deck-item">
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li> 

                    <li className = "deck-card-item real">
                        <Card className = "enemy-deck-card deck-item">
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li>
                </ul>

                <ul className = "d-flex deck-card ml-3" style = {cardStyle1}>
                    <li className = "deck-card-item faux">
                        <Card className = "enemy-deck-card deck-item" style = {deckStyle}>
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li> 

                    <li className = "deck-card-item real">
                        <Card className = "enemy-deck-card deck-item">
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </li>
                </ul>


            </div>
        </div>
    )            
}

export default EnemyDeck; 