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
            draw: 'false',
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
        this.handleDraw = this.handleDraw.bind(this);
        this.getCard1 = this.getCard1.bind(this); 
        this.getCard2 = this.getCard2.bind(this); 
        this.getDeck = this.getDeck.bind(this); 

		this.theCountDown = this.theCountDown.bind(this);
		this.pauseCountDown = this.pauseCountDown.bind(this); 
		this.updateTimer = this.updateTimer.bind(this); 
        this.startTimer = this.startTimer.bind(this); 
        

        ///FIGHT FUNCTIONS///
        this.attackEnemy = this.attackEnemy.bind(this); 
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
                message: "Shuffle then draw the cards or simply deal to attack!"
            })
        } else if((randomDie1 + randomDie2 <= 6) && (randomDie1 + randomDie2 > 2)){
            this.setState({
                hideBattleBtns: true,  
                hideDeckBtns: true,
                message: "You rolled below 7. You're getting attacked!"
            })
          
        }
        
    }

    //////////////////////DRAWING THE CARDS////////////////////////////
   
    getCard1(){
        
        var { playersHand } = this.props.playersHand;

        const showFightCards = {
            opacity: '1',
            transition: 'all 3s',
            visibility: 'visible' 
        }

        const hideFightCards = {
            opacity: '0',
            visibility: 'hidden' 
            
        }
    
        console.log("PLAYER HAND IN GAME")
        console.log(this.props.playersHand.playersHand);

        return playersHand.map((player,index) => {
            if( player === playersHand[0] && playersHand.length < 23){
                return(
                    <Card key = {index} className = "player-deck-card deal card1" style = {!this.state.showCards ? hideFightCards : showFightCards} >
                        <CardHeader  className = "text-center">{player.name}</CardHeader>
                        <CardImg src = {player.image} />
                        <CardFooter>
                            <div className = "text-center">Damage: {player.damage}</div>
                        </CardFooter>
                    </Card>
                )
            }
        });    
    }

    getCard2(){
        var { playersHand } = this.props.playersHand;
        
        const showFightCards = {
            opacity: '1',
            transition: 'all 6s',
            visibility: 'visible' 
        }

        const hideFightCards = {
            opacity: '0',
            visibility: 'hidden' 
        }
    
        return playersHand.map((player2, index) => {
            if(player2 === playersHand[1] && playersHand.length < 23){
                return(
            
                    <Card key = {index} className = "player-deck-card deal card1" style = {!this.state.showCards ? hideFightCards : showFightCards} >
                        <CardHeader className = "text-center">{player2.name}</CardHeader>
                        <CardImg src = {player2.image} />
                        <CardFooter>
                            <div className = "text-center">Damage: {player2.damage}</div>
                        </CardFooter>
                    </Card>
                
                )

            }
           
        }); 
    }

    getDeck(){
        var { data } = this.props.shuffled;
        console.log("SHUFFLED IN GAME")
        console.log(data); 
        const deckStyle = {
            left:'1rem',
        }
        return data.map((elem, index) => {
            if(data.length < 20){
                return(
                    <div key = {index}>
                        <Card className = "player-deck-card deck-item" style = {deckStyle}>
                            <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                        </Card>
                    </div>
                )
            } else if (data.length <= 0){
                return console.log("NO MORE CARDS!"); 
                    this.setState({
                        message: "You ran out of cards! Hurry, deal!"
                    })
            }

        }); 
    }

    //////////////////// DRAWING THE CARDS ////////////

    handleDraw(){
        this.setState({
            showCards: true,
            draw: true
        });

        this.props.drawCard(); 

    }

    ///////////////////////// ATTACKING ENEMY //////////////////////////

    attackEnemy(){
        var { playersHand } = this.props.playersHand;
        if(playersHand.length < 23){
            playersHand.shift(); 
        }
       
        console.log("NEW PLAYERS HAND"); 
        console.log(playersHand);
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
                                        drawCond = {this.state.draw}
                                        getCard1 = {this.getCard1}
                                        getCard2 = {this.getCard2}
                                        showCards = {this.state.showCards}
                                        getDeck = {this.getDeck}
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
                                    attack ={this.attackEnemy}
                                    deck = {this.state.hideDeckBtns}
                                    hide = {this.state.hideBattleBtns}  
                                    roll = {this.handleRoll}
                                    drawC= {this.handleDraw}
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
    console.log("LOOOK HERE"); 
    return{
        deckweapons: state.weaponsLibrary,
        playersHand: state.playersHand,
        shuffled: state.cardShuffle
        
    }

}


export default connect(mapStateToProps,actions)(Game); 



