import React from 'react';
import { Card, CardImg } from 'reactstrap';

const EnemyDeck = (props) =>{
    const draw = props.drawCond; 
    
    const cardStyle1 = {
        listStyle: 'none'
    }

    const deckStyle = {
        position: 'relative',
        left: '-2em'  
    }

    const isAnimatingE = props.isAnimatingE;

    var pulseClass = ["enemy-deck d-flex flex-row"];

    if(isAnimatingE){
        pulseClass.push('hvr-pulse-grow pulse')
    }

    return(
        <div>
            <div className = {pulseClass}>
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