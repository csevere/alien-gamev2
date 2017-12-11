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
                        <Row className = "row1 d-flex flex-row">
                            <Col md="4">
                                <div className = "instructions text-light">instructions</div>
                            </Col>

                            <Col md = "3">
                                <div className = "timer">timer</div>
                            </Col>
                        </Row>

                        <Row className = "row2 d-flex flex-row">
                            <Col md = "4">
                                <div className = "enemy-card mx-auto">Enemy card</div>
                                <div className = "enemyProgress d-flex flex-column">
                                    Health
                                    <progress id = "enemyHealth" value = "500" max = "500"></progress>
                                    AP
                                    <progress id = "e_AP" value = "50" max = "50"></progress>
                                </div>
                            </Col>

                            <Col md = "4">
                                <div className = "dice">dice</div>
                            </Col>

                            <Col md = "4">
                                <div className = "player-card mx-auto">playercard</div>
                                <div className = "playerProgress d-flex flex-column">
                                    Health
                                    <progress id = "userHealth" value = "500" max = "500"></progress>
                                    AP
                                    <progress id = "p_AP" value = "50" max = "50"></progress>
                                </div> 
                            </Col>
                        </Row>

                        <Row className = "row3 d-flex flex-row">
                            <Col md = "4">
                                <div className = "enemy-deck d-flex flex-row">
                                    <div className = "p-5 text-dark card">card1</div>
                                    <div className = "p-5 text-dark card">card2</div>
                                    <div className = "p-5 text-dark card">card3</div>
                                    <div className = "p-5 text-dark card">card4</div>
                                    <div className = "p-5 text-dark card">card5</div>
                                    <div className = "p-5 text-dark card">card6</div>
                                </div>
                            </Col>
                            
                            <Col md = "4">
                                <div className = "attack-screen">
                                    <div className = "attack-detail">attackdetail</div>
                                    <div className = "attack-image">attackimage</div>
                                    <div className = "message">message</div>
                                </div>
                            </Col>

                            <Col md = "4">
                                <div className = "player-deck d-flex flex-row">
                                    <div className = "p-5 text-dark card">card1</div>
                                    <div className = "p-5 text-dark card">card2</div>
                                    <div className = "p-5 text-dark card">card3</div>
                                    <div className = "p-5 text-dark card">card4</div>
                                    <div className = "p-5 text-dark card">card5</div>
                                    <div className = "p-5 text-dark card">card6</div>
                                </div>
                                <Button>Shuffle</Button>
                                <div className = "companions float-right d-flex flex-column">
                                    <div className = "p-2">companion1</div>
                                    <div className = "p-2">companion2</div>
                                    <div className = "p-2">companion3</div>
                                </div>
                            </Col>
                        </Row>

                        <Row className = "row4">
                            <div className = "buttons d-flex flex-row">
                                <div className = "p-2  healthboost rounded-circle">healthboost</div>
                                <div className = "p-2  fight rounded-circle">fight</div>
                                <div className = "p-2 apboost rounded-circle">apboost</div>
                                <div className = "p-2  items rounded-circle">items</div>
                            </div>
                        </Row>

                        <Row className = "row5">
                            <div className = "p-2">Player Status</div>
                            <div className = "status-bar d-flex flex-row">
                                <div className = "p-5 player-level">playerlevel</div>
                                <div className = "p-5 experience">experience</div>
                                <div className = "p-5 attack-points">attackpoints</div>
                                <div className = "p-5 weapons">weapons</div>
                                <div className = "p-5 items">items</div>
                                <div className = "p-5 gear">gear</div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>  
        )
    }
}


export default Game; 
