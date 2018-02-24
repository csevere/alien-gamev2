import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import EnemyCard from './EnemyCard'; 
import PlayerCard from './PlayerCard'; 
import Instructions from './Instructions'; 
import Countdown from './Countdown'; 
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

// Length ms 
var TimeOut = 10000;
// Interval ms
var TimeGap = 1000;
var CurrentTime = (new Date()).getTime();
var EndTime = CurrentTime + TimeOut;

class Game extends Component{
    constructor(props){
        super(props);
		this.state = {
			active: true,
			handleFight: true,
			isRunning: false,
            timer: '00:00',
            textColor: 'white',
			message: "What are you waiting for? Press the attack button!",
			showLoader: 'block',
			showContainer: 'none',
			showFightScreen: 'none',
			showRow: 'none',
            transition:'transition',
			opacity: 0,
			transition2: 'transition',
			opacity2: 0

		}

		this.startGame = this.startGame.bind(this)
		this.handleFight = this.handleFight.bind(this)

		this.theCountDown = this.theCountDown.bind(this);
		this.pauseCountDown = this.pauseCountDown.bind(this); 
		this.updateTimer = this.updateTimer.bind(this); 
		this.startTimer = this.startTimer.bind(this); 
	}
	
	componentDidMount() {

        setTimeout(() =>{
            this.setState({
                showFightScreen: 'block',
                showLoader: 'none'
            })
        }, 3000)

        setTimeout(() =>{
            this.setState({
                transition: 'all 1s',
                opacity: 1
            })
        }, 4000)
	}


	updateTimer(){
        // Run till timeout
        if(CurrentTime + TimeGap < EndTime ) {
            setTimeout(this.updateTimer, TimeGap);
        }
        // Countdown if running
        if(this.state.isRunning === true) {
            CurrentTime += TimeGap;
            console.log(EndTime + " EndTime")
            if( CurrentTime >= EndTime ) {
                
                this.setState({
                    textColor: 'red' 
                })
            }
        }
        // Update Gui
        const Time = new Date();
        Time.setTime( EndTime - CurrentTime);
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();
        
        this.setState({
            timer:`${(Minutes < 10 ? '0' : '')}` + `${Minutes}` 
            + `:`
            + `${(Seconds < 10 ? '0' : '')}` + `${Seconds}`
        })
    };

    startTimer(Timeout){
        TimeOut = Timeout;
        CurrentTime = (new Date()).getTime();
        EndTime = CurrentTime + TimeOut;
        console.log(TimeOut);
        this.updateTimer();  
    }
   
    theCountDown(){
        this.setState({
            isRunning: true,
            show: 'inline-grid' 
        })

		this.startTimer(300000); 	
	};
	

    pauseCountDown(){
        this.setState({
			isRunning:!this.state.isRunning,
			showRow: 'block',
			active: !this.state.active
		})
		
    }
	

	startGame(){
		this.setState({
			showContainer: 'block',
			showFightScreen: 'none', 
		})

		setTimeout(() =>{
            this.setState({
                transition2: 'all 1s',
                opacity2: 1
            })
		}, 500)

		setTimeout(() =>{
			this.theCountDown();
		}, 1100)
		
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
		const rowStyle = {
			position: 'absolute',
			top: '28rem',
			width: '82%',
			display: this.state.showRow
		}

		const textStyle = {
			fontSize: '10rem',
			margin: 'auto',
		}
		
        const showLoader = {
			display: this.state.showLoader,
			background: 'black'  
		}

		const fightScreen = {
			display: this.state.showFightScreen,
			transition: this.state.transition,
            opacity: this.state.opacity
		}

		const showContainer = {
            display: this.state.showContainer,
            transition: this.state.transition2,
            opacity: this.state.opacity2
		}
		
		
        return(
            <div>
                <div className = "game-wrapper">

					<div style = {showLoader} className="preload">
						<div className="preload-status">
							<div className="preload-status-bar"></div>
							<div className="preload-status-info">LOADING</div>
						</div>
					</div>

					<div style = {fightScreen} className = "fightscreen">
						<div className = "display4">
							Are you ready to <br/> 
							<div className = "display2">battle?</div>
						</div> 

						<Button onClick = {()=> this.startGame()} color="danger" className = "start-btn">FIGHT</Button>

					</div> 

                    <Container style = {showContainer}>

						<Row className = "pause" style = {rowStyle}>
							<div className = "display-1 text-danger pause-text" style = {textStyle}>{this.state.isRunning ? ' ' : 'GAME PAUSED '}</div>
						</Row>
						
                        <Row className = "row1 d-flex flex-row">
                           

                            <Col>
								<Countdown 
									timer = {this.state.timer} 
									textColor = {this.state.textColor}
									pauseCountDown = {this.pauseCountDown}
									isRunning = {this.state.isRunning}
								/>
                            </Col>
                        </Row>

                        <Row className = "row2 d-flex flex-row">
                            <Col md = "4">
                                <div className = "enemy-card mx-auto">
                                    <EnemyCard /> 
                                </div>
								<div className = "enemyProgress d-flex flex-column">
                                    Health
                                    <Progress id = "userHealth" value = "500" max = "500"></Progress>
                                    AP
                                    <Progress id = "p_AP" value = "50" max = "50"></Progress>
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
                                    <div className = "p-5 text-dark card">Deck</div>
                                    <div className = "p-5 text-dark card">Card 1</div>
                                    <div className = "p-5 text-dark card">Card 1</div>
                                </div>
                            </Col>
						
                            <Col md = "4">
                                <div className = "attack-screen">
                                    <div className = "attack-detail text-white">attackdetail</div>
                                    <div className = "attack-image text-white">attackimage</div>
                                    <div className = "message text-white">{this.state.message}</div>
                                </div>
                            </Col>

                            <Col md = "4">
                                <div className = "player-deck d-flex flex-row">
                                    <div className = "p-5 text-dark card">Card 1</div>
                                    <div className = "p-5 text-dark card">Card 2</div>
                                    <div className = "p-5 text-dark card">Deck</div>
                                </div>
                            </Col>
                        </Row>

                        <Row className = "row4">
							<Col md = "6">
								<div className = "companions float-right d-flex flex-row">
										<div className = " comp">companion1</div>
										<div className = " comp">companion2</div>
										<div className = " comp">companion3</div>
								</div>
							</Col>
							<Col md = "6">
								<div>
								<Buttons active = {this.state.active} fight = {this.handleFight} />
								</div>
							</Col>
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

// <div className = "p-5 items">items</div>
// <div className = "p-5 gear">gear</div>


// <Row className = "row5">
// <div className = "p-2">Player Status</div>
// <div className = "status-bar d-flex flex-row text-whiste">
// 	<div className = "p-5 player-level">playerlevel</div>
// 	<div className = "p-5 experience">experience</div>
// 	<div className = "p-5 attack-points">attackpoints</div>
// 	<div className = "p-5 weapons">weapons</div>
// </div>
// </Row>

/* <Col md="3">
<Instructions/>
</Col> */