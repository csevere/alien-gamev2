import React, {Component} from 'react';
import * as actions from '../../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import Buttons from './Buttons'; 
import Companions from './Companions';  
import Countdown from './Countdown'; 
import Dice from './Dice'; 
import EnemyCard from './EnemyCard';
import EnemyDeck from './EnemyDeck'; 
import EnemyProgress from './EnemyProgress'; 
import Instructions from './Instructions';  
import PlayerCard from './PlayerCard'; 
import PlayerDeck from './PlayerDeck';
import PlayerProgress from './PlayerProgress'; 
import { 
    Button,
    Card, 
    CardHeader,
    CardFooter,
    CardText, 
    CardImg, 
	Container, 
	Col,
	Progress, 
    Row,
} from 'reactstrap';



// Length ms 
var TimeOut = 10000;
// Interval ms
var TimeGap = 1000;
var CurrentTime = (new Date()).getTime();
var EndTime = CurrentTime + TimeOut;
var count = 0;

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name');
const localPic = localStorage.getItem('pic'); 

var p_Health_val = 1000;
var p_AP_val = 50;
var e_Health_val = 1250;
var e_AP_val = 50; 
var attackdetail = ""; 
var message = ""; 
var image = "";  
var hideAlly = ""; 

class Game extends Component{
    constructor(props){
        super(props);
		this.state = {
            active: true,
			attackdetail: '',
            deckopacity: 1,
            draw: 'false',
            e_AP: 50,
            e_Health: 1250,
            handleFight: true,
            hideAlly: "",
            hideBattleBtns: true, 
            hideDeckBtns: true, 
            isRunning: false,
            image: 'assets/aliens/alien1.jpg',
            loggedIn:'initial',
			logMessage: 'none', 
            message: "Alien attack! Quick, press the roll button!",
            music: '',
			opacity: 0,
            opacity2: 0,
            p_AP: 50,
            p_Health: 1000, 
            showContainer: 'none',
            showCards: false, 
			showLoader: 'block',
			showFightScreen: 'none',
            showRow: 'none',
            showRoll: true,
			timer: 'TIME 00:00',
            textColor: '#74f9fc',
            transition:'transition',
			transition2: 'transition'
		}

		this.startGame = this.startGame.bind(this);
        this.handleRoll = this.handleRoll.bind(this);

        //////////// CARD METHODS/////// ////////
        this.handleDraw = this.handleDraw.bind(this);
        this.handleDeal = this.handleDeal.bind(this); 
        this.getCard1 = this.getCard1.bind(this); 
        this.getCard2 = this.getCard2.bind(this); 
        this.getDeck = this.getDeck.bind(this); 

        //////////////THE COUNDOWN/////////////////
		this.theCountDown = this.theCountDown.bind(this);
		this.pauseCountDown = this.pauseCountDown.bind(this); 
		this.updateTimer = this.updateTimer.bind(this); 
        this.startTimer = this.startTimer.bind(this); 
        
        /////////////FIGHT FUNCTIONS/////////////////
        this.attackEnemy = this.attackEnemy.bind(this); 
        this.handleAP = this.handleAP.bind(this);
        this.handleHP = this.handleHP.bind(this); 
        this.handleHelp = this.handleHelp.bind(this); 
	}
	
	componentDidMount() {
        //logged in/out
		if(!localToken && !localName){
			this.setState({
				loggedIn: 'hidden',
				logMessage: 'block'
			})
        }
        
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
    
    ////////////////////////////////////////////////////////////////////
    ////////////////// HANDLING THE TIMER //////////////////////////////
    ////////////////////////////////////////////////////////////////////
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

    ////////////////////////////////////////////////////////////////////
    ////////////////////////ROLLING THE DIE/////////////////////////////
    ////////////////////////////////////////////////////////////////////

    handleRoll(){
        var { playersHand } = this.props.playersHand;

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
                attackdetail: "", 
                hideBattleBtns: false,
                hideDeckBtns: false,
                message: "Shuffle, draw, attack or draw then attack!",
                showRoll: false,
                image : "assets/aliens/alien1.jpg"
            })
        } else if((randomDie1 + randomDie2 <= 6) && (randomDie1 + randomDie2 > 2)){
            p_Health_val -= 50;
            e_AP_val -= 5; 
            this.setState({
                attackdetail: "You lost 50 health points!",
                e_AP: e_AP_val, 
                hideBattleBtns: true,  
                hideDeckBtns: true,
                image : "assets/aliens/alien1.jpg",
                message: "You rolled below 7. You've been attacked!",
                p_Health: p_Health_val,
                showRoll: true,
            })
          
        } else if(randomDie1 + randomDie2 === 12){
            var attack = 2 * playersHand[0].damage;
            e_Health_val -= attack;
            p_AP_val += 15;
            this.setState({
                attackdetail: `Dealt ${attack} damage! Gained 15 AP!`,
                e_Health: e_Health_val,  
                image : "assets/aliens/alien1.jpg",
                message: "You rolled a 12! Excellent!",
                p_AP: p_AP_val
            })
        } else if(randomDie1 + randomDie2 === 2){
            var e_attack = 2 * 50;
            p_Health_val -= e_attack;
            p_AP_val -= 15;
            this.setState({
                p_Health: p_Health_val,  
                attackdetail: `Received ${e_attack} damage! Lost 15 AP!`,
                image : "assets/aliens/alien1.jpg",
                message: "You rolled a 2! Not good!",
                p_AP: p_AP_val
            })
        } 
    }




    ////////////////////////////////////////////////////////////////////
    ////////////////////// DRAWING THE CARDS////////////////////////////
    ////////////////////////////////////////////////////////////////////
   
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
    
        // console.log("PLAYER HAND IN GAME")
        // console.log(this.props.playersHand.playersHand);

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

        // console.log("SHUFFLED IN GAME LINE 277")
        // console.log(data); 

        const deckStyle = {
            left:'1rem',
            opacity: this.state.deckopacity,
            transition: '2s'
        }

        return data.map((elem, index) => {
            if(data.length < 20){
                return(
                    <div key = {index}>
                        <div className="front">
                            <Card className = "player-deck-card deck-item deal card2">
                                <CardHeader className = "text-center">{elem.name}</CardHeader>
                                <CardImg src = {elem.image} />
                                <CardFooter>
                                    <div className = "text-center">Damage: {elem.damage}</div>
                                </CardFooter>
                            </Card>
		                </div>

                        <div className = "back">
                            <Card className = "player-deck-card deck-item" style = {deckStyle}>
                                <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                            </Card>
                        </div>
                    </div>
                )
            } 
        }).reverse(); 
    }

    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// DRAWING & DEALING THE CARDS ///////////////////
    ////////////////////////////////////////////////////////////////////////
    handleDraw(){
        this.setState({
            showCards: true,
            draw: true,
            addClass: !this.state.addClass,
            deckopacity: '0'
        });

        setTimeout(() =>{
            this.setState({
                deckopacity:'1'
            })
        }, 1500);

        count++; 
        console.log(" LINE 329 NUMBER " + count); 

        this.props.drawCard();
       
    }



    handleDeal(){
        var { data } = this.props.shuffled;

        console.log(this.props); 
        console.log("NEW DECK!!! LINE 340")
        console.log(data); 

        this.props.dealNewDeck(); 
    }


    ////////////////////////////////////////////////////////////////////
    ///////////////////////// ATTACKING ENEMY //////////////////////////
    ////////////////////////////////////////////////////////////////////

    attackEnemy(){
        var { data } = this.props.shuffled;
        var { playersHand } = this.props.playersHand;

        //managing deck / cards 
        if(playersHand.length < 23){
            playersHand.shift(); 
        }

        if(playersHand.length > 0){
            console.log("GET THE GUN HIT POINTS")
            console.log(this.props.playersHand); 
            console.log(playersHand[0].damage); 
            console.log(playersHand[0].image); 
            
            // attacking enemy 
            e_Health_val -= playersHand[0].damage;
            p_AP_val -= 5;

            this.setState({
                e_Health: e_Health_val,
                p_AP: p_AP_val,
                attackdetail:`Dealt ${playersHand[0].damage} damage!`,  
                message : 'Keep giving \'em hell!',
                image: playersHand[0].image,
                hideBattleBtns: true, 
                hideDeckBtns: true,
                showRoll: true
            })

        }else{
            p_Health_val -= 20; 
            this.setState({
                attackdetail: "You lost 20 health points!",
                image:"assets/aliens/alien1.jpg", 
                message: "You need to draw cards! Hit the draw button!",
                p_Health: p_Health_val
            });
        }
    } 

    ///////////////////////////////////////////////////////////////
    ////////////////////////// HP/AP UP //////////////////////////
    /////////////////////////////////////////////////////////////

    handleHP(){
        if(p_Health_val <= 350){
            p_Health_val += 150;  
            message = "You gained 150 health points!";
            image = "assets/gamescreen/health.png";
        }else if(p_Health_val === 500){
            message = "You have enough Health!";
            image = "assets/gamescreen/full.jpg"
        }else{
            message = "You have enough Health!";
            image = "assets/gamescreen/full.jpg"
          
    
        }if(p_Health_val <= 0){
            image = "Images/you_died.jpg"; 
            message = "GAME OVER! The Aliens are now experimenting on your corpse.";
            p_AP_val = 0;
        }
       
        this.setState({
            attackdetail: "",  
            p_Health: p_Health_val,
            message: message,
            image: image ,
            hideBattleBtns: true, 
            hideDeckBtns: true,
            showRoll: true 
        })
    }


    handleAP(){
        if(p_AP_val < 20){
            if(p_AP_val > 50){
                this.setState({
                    p_AP: 50 
                })
            }else{
                p_AP_val  += 30;
                message = "You gained 30 action points!";
                image = "assets/gamescreen/scifi-crate.jpg"
            }
        }else if(p_AP_val === 50){
            message = "You have enough action points!";
            image = "assets/gamescreen/full.jpg"
        }else{
            message = "You have enough action points!"
            image = "assets/gamescreen/full.jpg"
    
        }if(p_Health_val <= 0){
            image = "Images/you_died.jpg"; 
            message = "GAME OVER! The Aliens are now experimenting on your corpse.";
            p_AP_val  = 0; 
        }

        this.setState({
            p_AP: p_AP_val,
            attackdetail : "",
            message: message,
            image:image,
            hideBattleBtns: true, 
            hideDeckBtns: true,
            showRoll: true  
        })
      }


    ///////////////////////////////////////////////////////////////
    ////////////////////////// ALLY HELP //////////////////////////
    //////////////////////////////////////////////////////////////

    handleHelp(){
        const { companions } = this.props; 
        console.log(companions);

        if(localPic !== companions.image &&  p_AP_val >= 25){
            e_Health_val -= 200;
            p_AP_val  -= 25;
            var current = [];
            current.unshift(companions.shift())
            message = current[0].message;
            image = current[0].image; 
            attackdetail = "Dealt 200 damage!";
            console.log("CURRENT");
            console.log(current);
            console.log(image);
            console.log(message); 
        } else if(p_AP_val <= 35){
            attackdetail = "Enemy attacked you for 50 health points!"
            message = "You don't have enough AP!";
            p_Health_val -= 50;
            image = "assets/aliens/alien1.jpg"
        }
    
        if(companions.length < 1){
            message = "You can't request aid anymore!"
            image = "assets/aliens/alien1.jpg"
        }

        this.setState({
            e_Health: e_Health_val,
            p_Health: p_Health_val,
            p_AP: p_AP_val,
            attackdetail: attackdetail,
            image: image,
            message: message,
            hideBattleBtns: true, 
            hideDeckBtns: true,
            showRoll: true  
        })
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
        
        const showRegMsg = {
			display: this.state.logMessage
		}

		const hideScreen = {
			visibility: this.state.loggedIn
        }
		
        return(
            <div>
                  <Row>
					<Col md= '6' className = "logged-out-col">
						<div className = "logged-out" style = {showRegMsg}>
							<div className = "logged-out-text">Unauthorized player. Please register or log in to play. Thank you.</div>
							<Link to = "/"><Button className = "start-btn">Register/Login</Button></Link>
						</div>
					</Col>
				</Row> 

                <div className = "game-wrapper d-flex align-items-end" style = {hideScreen}>
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
							
                                <EnemyProgress
                                    health = {this.state.e_Health}
                                    ap = {this.state.e_AP}
                                />
                              
                            </Col>

                            <Col md = "4">
                                <Dice dieone = {this.state.die1} dietwo = {this.state.die2}  /> 
                            </Col>

                            <Col md = "4">
                                <div className = "player-card mx-auto">
                                    <PlayerCard />
                                </div>
                                <PlayerProgress
                                    health = {this.state.p_Health}
                                    ap = {this.state.p_AP}
                                />
                            </Col>
                        </Row>

                        <Row className = "row3 d-flex flex-row">
                            <Col md = "4">
                                <div>
                                    <EnemyDeck/>
                                </div>
                            </Col>
						
                            <Col md = "4">
                                <div className = "attack-screen">
                                    <div className = "attack-detail text-white">{this.state.attackdetail}</div>
                                    <div className = "attack-image text-white"> 
                                        <CardImg src = {this.state.image} />
                                    </div>
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
                                <Companions
                                    active = {this.state.active}
                                    helpPlayer = {this.handleHelp}
                                    hide = {this.state.hideBattleBtns}
                                /> 
							</Col>
							<Col md = "6">
								<div>
                                <Buttons 
                                    active = {this.state.active}
                                    apBoost = {this.handleAP}
                                    attack ={this.attackEnemy}
                                    deal = {this.handleDeal}
                                    deck = {this.state.hideDeckBtns}
                                    hide = {this.state.hideBattleBtns}
                                    hpBoost = {this.handleHP}  
                                    roll = {this.handleRoll}
                                    drawC= {this.handleDraw}
                                    shuffle = {this.props.shuffleCards}
                                    showroll = {this.state.showRoll}
                                />
								</div>
							</Col>
                        </Row>
                    </Container>
                    <div className = "p-2 audio">
                        <embed 
                            src="assets/music/quarkstar.mp3" 
                            preload = "auto" 
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
        deckweapons2: state.weaponsLibrary2,
        // newDeck: state.newDeck, 
        playersHand: state.playersHand,
        shuffled: state.cardShuffle, 
        companions: state.companions
    }

}


export default connect(mapStateToProps,actions)(Game); 



