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
                        <Row className = "row1">
                            <Col md="6">
                                <div className = "instructions"></div>
                            </Col>

                            <Col md = "10">
                                <div className = "timer"></div>
                            </Col>
                        </Row>

                        <Row className = "row2">
                            <Col md = "4">
                                <div className = "enemy-card"></div>
                            </Col>

                            <Col md = "4">
                                <div className = "dice"></div>
                            </Col>

                            <Col md = "4">
                                <div className = "player-card"></div>
                            </Col>
                        </Row>

                        <Row className = "row3">
                            <Col md = "4">
                                <div className = "enemy-deck"></div>
                            </Col>
                            
                            <Col md = "4">
                                <div className = "attack-detail"></div>
                                <div className = "attack-image"></div>
                                <div className = "message"></div>
                            </Col>

                            <Col md = "4">
                                <div className = "player-deck"></div>
                                <div className = "companions"></div>
                            </Col>
                        </Row>

                        <Row className = "row4">
                            <div className = "buttons"></div>
                        </Row>

                        <Row className = "row5">
                            <div className = "status-bar">
                                <div className = "player-level"></div>
                                <div className = "experience"></div>
                                <div className = "attack-points"></div>
                                <div className = "weapons"></div>
                                <div className = "items"></div>
                                <div className = "gear"></div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>  
        )
    }
}


export default Game; 
