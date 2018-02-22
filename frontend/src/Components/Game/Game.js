import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import EnemyCard from './EnemyCard'; 
import PlayerCard from './PlayerCard'; 
import Instructions from './Instructions'; 
import Timer from './Timer'; 
import Dice from './Dice'; 
import Buttons from './Buttons'; 
import { Container, 
    Row, 
    Col,
    Button, 
    Card, 
    CardBlock, 
    CardText, 
    CardImg, 
    CardImgOverlay,
    Progress 
} from 'reactstrap';


class Game extends Component{
    constructor(props){
        super(props);
            this.state = {
                handleFight: true,
                message: "You've encountered a terrifying alien. What will you do?"

            }

            this.handleFight = this.handleFight.bind(this)
    }


    handleFight(){
        //getting a random number to roll random dice
        var randomDie1 = Math.ceil(Math.random() * 6);
        var randomDie2 = Math.ceil(Math.random() * 6);
        
        this.setState({
            die1: "assets/dice/d" + randomDie1 + ".png",
            die2: "assets/dice/d" + randomDie2 + ".png",
          })
    }

    render(){
        return(
            <div>
                <div className = "game-wrapper">
                    <Container>
                        <Row className = "row1 d-flex flex-row">
                            <Col md="4">
                                <Instructions/>
                            </Col>

                            <Col md = "3">
                                <Timer/>
                            </Col>
                        </Row>

                        <Row className = "row2 d-flex flex-row">
                            <Col md = "4">
                                <div className = "enemy-card mx-auto">
                                    <EnemyCard /> 
                                </div>
                            </Col>

                            <Col md = "4">
                                <Dice dieone = {this.state.die1} dietwo = {this.state.die2}  /> 
                            </Col>

                            <Col md = "4">
                                <div className = "player-card mx-auto">
                                    <PlayerCard />
                                </div>
                                <div className = "playerProgress d-flex flex-column">
                                    Health
                                    <Progress id = "userHealth" value = "500" max = "500"></Progress>
                                    AP
                                    <Progress id = "p_AP" value = "50" max = "50"></Progress>
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
                            <div className = "d-flex flex-row">
                               <Buttons fight = {this.handleFight} />
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
                    <div className = "p-2 audio">
                        <embed 
                            src="assets/music/quarkstar.mp3" 
                            preload = "auto" 
                            width="10"
                            height="10"
                            loop="true"
                        controls/>	
                    </div>
                </div>
            </div>  
        )
    }
}


export default Game; 
