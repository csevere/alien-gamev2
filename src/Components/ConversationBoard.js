import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import Conversation1 from './ConversationCards/Conversation1';

class ConversationBoard extends Component{

    render(){
        return(
            <div>
                <Conversation1/> 
            </div>  
        )
    }
}

export default ConversationBoard; 

//allow only 65 words per scene text 