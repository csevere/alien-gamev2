import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import  {bindActionCreators} from 'redux';
import * as actions from '../../Actions';

import Buttons from './Buttons'; 
import Companions from './Companions'; 
import Countdown from './Countdown'; 
import Dice from './Dice'; 
import EnemyCard from './EnemyCard';
import Instructions from './Instructions';  
import PlayerCard from './PlayerCard'; 
import PlayerDeck from './PlayerDeck';


import { 
	Button,
	Container, 
	Col,
	Progress, 
    Row,
    Card, 
    CardHeader,
    CardFooter,
    CardText, 
    CardImg, 
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
			attackdetail: '',
            attackimage: '', 
            deal: 'false',
            handleFight: true,
            hideBattleBtns: true, 
            hideDeckBtns: true, 
			isRunning: false,
			message: "Alien attack! Quick, press the roll button!",
			opacity: 0,
            opacity2: 0,
            showContainer: 'none',
            showCards: false, 
			showLoader: 'block',
			showFightScreen: 'none',
			showRow: 'none',
			timer: 'TIME 00:00',
            textColor: '#74f9fc',
            transition:'transition',
			transition2: 'transition'
		}

		this.startGame = this.startGame.bind(this);
        this.handleRoll = this.handleRoll.bind(this);


        /////Card Functions ////////
        this.handleDeal = this.handleDeal.bind(this);
        this.getCard1 = this.getCard1.bind(this); 
        this.getCard2 = this.getCard2.bind(this); 

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


    ////////////////// HANDLING THE TIMER ////////////////////

	updateTimer(){
        // Run till timeout
        if(CurrentTime + TimeGap < EndTime ) {
            setTimeout(this.updateTimer, TimeGap);
        }
        // Countdown if running
        if(this.state.isRunning === true) {
            CurrentTime += TimeGap;
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
            timer:`TIME ${(Minutes < 10 ? '0' : '')}` + `${Minutes}` 
            + `:`
            + `${(Seconds < 10 ? '0' : '')}` + `${Seconds}`
        })
    };

    startTimer(Timeout){
        TimeOut = Timeout;
        console.log(TimeOut); 
        CurrentTime = (new Date()).getTime();
        EndTime = CurrentTime + TimeOut;
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
        }, 1500)
		
	}

    ////////////////////////ROLLING THE DIE////////////////////////////////

    handleRoll(){
        //getting a random number to roll random dice
        var randomDie1 = Math.ceil(Math.random() * 6);
        var randomDie2 = Math.ceil(Math.random() * 6);

        console.log('TEST'); 
        
        this.setState({
            die1: "assets/dice/d" + randomDie1 + ".png",
            die2: "assets/dice/d" + randomDie2 + ".png",
          })

        if((randomDie1 + randomDie2 >= 7) && (randomDie1 + randomDie2 < 12)){
            this.setState({
                hideBattleBtns: false,
                hideDeckBtns: false,
                message: "Shuffle then deal the cards or simply deal to attack!"
            })
        } else if((randomDie1 + randomDie2 <= 6) && (randomDie1 + randomDie2 > 2)){
            this.setState({
                hideBattleBtns: true,  
                hideDeckBtns: true,
                message: "You rolled below 7. You're getting attacked!"
            })
          
        }
        
    }

    //////////////////////DEALING THE CARDS////////////////////////////
   
    getCard1(){
        var { deckweapons } = this.props;
        console.log(deckweapons); 

        return deckweapons.map((elem) => {
            if( elem === deckweapons[0] ){
                return(
                    <div key = {elem.id}>
                        <CardHeader className = "text-center">{elem.name}</CardHeader>
                        <CardImg src = {elem.image} />
                        <CardFooter>
                        <div className = "text-center">Damage: {elem.damage}</div>
                        </CardFooter>
                    </div>
                )

            }
           
        }); 
    }

    getCard2(){
        var { deckweapons } = this.props;

        return deckweapons.map((elem) => {
            if(elem === deckweapons[5]){
                return(
                    <div key = {elem.id}>
                        <CardHeader className = "text-center">{elem.name}</CardHeader>
                        <CardImg src = {elem.image} />
                        <CardFooter>
                        <div className = "text-center">Damage: {elem.damage}</div>
                        </CardFooter>
                    </div>
                )

            }
           
        }); 
    }


    handleDeal(){
        this.setState({
            showCards: true,
            deal: true
        });

    }

   
    render(){

		const rowStyle = {
			position: 'absolute',
			top: '28rem',
			width: '100%',
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
                <div className = "game-wrapper d-flex align-items-end">

					<div style = {showLoader} className="preload">
						<div className="preload-status">
							<div className="preload-status-bar"></div>
							<div className="preload-status-info">LOADING</div>
						</div>
					</div>

					<div style = {fightScreen} className = "fightscreen">
						<div className = "display4 fight-text">
							Are you ready to <br/> 
							<div className = "display1 fight-text">battle?</div>
						</div> 

						<Button onClick = {()=> this.startGame()} color="danger" className = "start-btn">FIGHT</Button>

					</div> 

                    <Container className="game-container" style = {showContainer}>

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
                                    <div className = "m-2 p-5 text-dark card">Deck</div>
                                    <div className = "m-2 p-5 text-dark card">Card 1</div>
                                    <div className = "m-2 p-5 text-dark card">Card 1</div>
                                </div>
                            </Col>
						
                            <Col md = "4">
                                <div className = "attack-screen">
                                    <div className = "attack-detail text-white">{this.state.attackdetail}</div>
                                    <div className = "attack-image text-white">{this.state.attackimage}</div>
                                    <div className = "message text-white">{this.state.message}</div>
                                </div>
                            </Col>

                            <Col md = "4">
                                <div>
                                    <PlayerDeck 
                                        dealCond = {this.state.deal}
                                        getCard1 = {this.getCard1}
                                        getCard2 = {this.getCard2}
                                        showCards = {this.state.showCards}
                                    />
                                </div> 
                            </Col>
                        </Row>

                        <Row className = "row4">
							<Col md = "6">
								<div className = "float-right">
									<Companions active = {this.state.active}/>
								</div>
							</Col>
							<Col md = "6">
								<div>
                                <Buttons 
                                    active = {this.state.active}
                                    deck = {this.state.hideDeckBtns}
                                    hide = {this.state.hideBattleBtns}  
                                    roll = {this.handleRoll}
                                    deal = {this.handleDeal}
                                    shuffle = {this.props.shuffleCards}
                                />
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

const mapStateToProps = (state)=>{
    return{
        deckweapons: state.weaponsLibrary,
        shuffle: state.cardShuffle
    }
}


export default connect(mapStateToProps,actions)(Game); 



