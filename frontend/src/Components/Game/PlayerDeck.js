import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 
import { Container, 
    Row, 
    Col,
    Button, 
    Card, 
    CardBlock, 
    CardText, 
    CardImg, 
    CardImgOverlay 
} from 'reactstrap';


class Game extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
            <div>
                <div className = "game-wrapper">
                    <Container>
                    </Container>
                </div>
            </div>
        )
    }
              
}

export default EnemyCard; 