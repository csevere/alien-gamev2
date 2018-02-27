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
   

    const cardStyle = {
        width: '100%'
    }


    return(
        <div>
            <div className = "player-deck d-flex flex-row">
             
               <div>
                    {!draw ? null : props.getCard1()}
                </div>
               
                <div>
                    {!draw ? null : props.getCard2()}
                </div>

                <div className = "m-2" style = {cardStyle}>
                    <ul className = "deck">
                        <li>
                           {props.getDeck()}
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )


   
             
}

export default PlayerDeck; 
