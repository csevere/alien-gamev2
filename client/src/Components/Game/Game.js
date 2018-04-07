import React, {Component} from 'react';
import * as actions from '../../Actions';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom'; 
import Buttons from './Buttons'; 
import Companions from './Companions';  
import Countdown from './Countdown'; 
import Dice from './Dice'; 
import EnemyCard from './EnemyCard';
import EnemyDeck from './EnemyDeck'; 
import EnemyProgress from './EnemyProgress'; 
import PlayerCard from './PlayerCard'; 
import PlayerDeck from './PlayerDeck';
import PlayerProgress from './PlayerProgress'; 
import { 
    Button,
    Card, 
    CardHeader,
    CardFooter,
    CardImg, 
    Container, 
    Form,
    Input,
	Col,
    Row,
} from 'reactstrap';



// Length ms 
var TimeOut = 10000;
// Interval ms
var TimeGap = 1000;
var CurrentTime = (new Date()).getTime();
var EndTime = CurrentTime + TimeOut;
var count = 0;

const localChar = localStorage.getItem('charName'); 
const localToken = localStorage.getItem('token'); 
const localName =localStorage.getItem('name');
const localPic = localStorage.getItem('pic'); 
var localExp = localStorage.getItem('exp');
var localLevel = localStorage.getItem('level'); 

var p_Health_val = 1000;
var p_HealthTotal_val = 1000;
var p_AP_val = 50;

var e_Health_val = 1450;
var e_HealthTotal_val = 1450; 
var e_AP_val = 50; 
var attackdetail = ""; 
var message = ""; 
var image = "";  
var hits_val = 0;
var exp_val = Number(localExp); 
var level_val = Number(localLevel); 
var e_count = 0;  

var aidArr = [];
var current = [];
var playerTime_val = ""; 


class Game extends Component{
    constructor(props){
        super(props);
		this.state = {
            active: true,
            attackdetail: '',
            charName: '',
            deckopacity: 1,
            die1:"assets/dice/d1.png",
            die2:"assets/dice/d1.png",
            draw: false,
            exp: 100, 
            handleFight: true,
            hideAlly: "",
            hideBattleBtns: true, 
            hideDeckBtns: true, 
            hitPoints:0,
            isRunning: false,
            image: 'assets/aliens/alien1.jpg',
            level: 0,
            loggedIn:'initial',
			logMessage: 'none', 
            message: "Alien attack! Quick, press the roll button!",
            music: '',
			opacity: 0,
            opacity2: 0,
            p_AP: 50,
            p_Health: 1000,
            p_HealthTotal: 1000, 
            playerTime: "",
            showContainer: 'none',
            showCards: false, 
            showDeal: false,
			showLoader: 'block',
			showFightScreen: 'none',
            showWinScreen: 'none',
            showLoseScreen:'none',
            showTimeScreen: 'none',
            showRow: 'none',
            showRoll: true,
			timer: 'TIME 05:00',
            textColor: '#74f9fc',
            transition:'transition',
            transition2: 'transition',
            //enemy states
            e_AP: 50,
            e_deckopacity: 1,
            e_draw: false,
            e_Health: 1450,
            e_HealthTotal: 1450,
            e_opacity: 0,
            e_transition: "transition",
            e_showCards: false
        }
        

		this.startGame = this.startGame.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.handleTimeSubmit = this.handleTimeSubmit.bind(this); 

        //////////// CARD METHODS/////// ////////
        
        //player
        this.handleDraw = this.handleDraw.bind(this);
        this.getCard1 = this.getCard1.bind(this); 
        this.getCard2 = this.getCard2.bind(this);
        this.getDeck = this.getDeck.bind(this);
        this.shufflePCards = this.shufflePCards.bind(this); 
        this.handleHand = this.handleHand.bind(this);

        //enemy
        this.handleEDraw = this.handleEDraw.bind(this);
        this.getECard1 = this.getECard1.bind(this); 
        this.getECard2 = this.getECard2.bind(this); 
        this.getEDeck = this.getEDeck.bind(this); 
        this.handleEHand = this.handleEHand.bind(this);

        //////////////THE COUNTDOWN/////////////////
		this.theCountDown = this.theCountDown.bind(this);
		this.pauseCountDown = this.pauseCountDown.bind(this); 
		this.updateTimer = this.updateTimer.bind(this); 
        this.startTimer = this.startTimer.bind(this); 
        
        /////////////FIGHT FUNCTIONS/////////////////
        this.attackEnemy = this.attackEnemy.bind(this); 
        this.attackEnemy2 = this.attackEnemy2.bind(this); 
        this.handleAP = this.handleAP.bind(this);
        this.handleHP = this.handleHP.bind(this); 
        this.handleHelp = this.handleHelp.bind(this); 
        this.handleComps = this.handleComps.bind(this);
        this.handleUpdateComps = this.handleUpdateComps.bind(this); 
            //enemy
        this.attackPlayer = this.attackPlayer.bind(this);
        this.attackPlayer2 = this.attackPlayer2.bind(this); 
        this.handleEAP = this.handleEAP.bind(this); 

        ///////////////WIN/GAMEOVER/TIMESUP/RUNAWAY//////////////
        this.handleWin = this.handleWin.bind(this);
        this.handleLose = this.handleLose.bind(this);
        this.handleTimeUp = this.handleTimeUp.bind(this);
        this.quitGame = this.quitGame.bind(this); 
        this.handleRunAway = this.handleRunAway.bind(this);
        this.playAgain = this.playAgain.bind(this);
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

    componentWillMount(charProps){
		//Getting character name
		if(localToken && localName){
			this.setState({
				charName:localChar
			})
		}
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


    ////////////////////////////////////////////////////////////////////
    ////////////////// TIME SUBMIT/START/QUIT/PLAYAGAIN //////////////////////////////
    ////////////////////////////////////////////////////////////////////

    handleTimeSubmit(e){
        e.preventDefault();
        console.log("USER SUBMITTED THEIR TIME!!")
     
        var timeData = {
            character: e.target[0].value,
            level: e.target[1].value,
            experience: e.target[2].value,
            time: e.target[3].value,
        }

        this.props.submitStats(timeData);
        console.log("TIME DATA IN GAME!!!")
        console.log(timeData);
    }
	
	startGame(){
        this.handleComps(); 
		this.setState({
			showContainer: 'block',
            showFightScreen: 'none', 
            showTimeScreen: 'none',
            showLoseScreen: 'none'
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
    
    quitGame(){
        this.props.logoutUser(); 
        const history = createHistory();
        history.push('/');
        history.go('/'); 
    }

    playAgain(){
        window.location.reload()
    }


    ///////////////////////////////////////////////////////////////
    ////////////////HANDLING WIN/LOSE/TIME ///////////////////////
    //////////////////////////////////////////////////////////////

    handleWin(){
        if(e_Health_val <= 0){
            exp_val += hits_val;
            level_val += 1;
            p_HealthTotal_val += 200;
            playerTime_val = this.state.timer;
    
            console.log("WINNER UPDATE STATS START"); 
            console.log(exp_val);
            console.log(level_val);
            console.log(playerTime_val); 
            console.log(p_HealthTotal_val)
            console.log("WINNER UPDATE STATS END"); 

            this.setState({
                showContainer: 'none',
                showWinScreen: 'block',
                exp: exp_val,
                level: level_val,
                p_HealthTotal: p_HealthTotal_val,
                playerTime: playerTime_val
            })
        }
    }

    handleLose(){
        if(p_Health_val <= 0){
            this.setState({
                showContainer: 'none',
                showLoseScreen: 'block'
            })
        }
    }

    handleTimeUp(){
        if(this.state.timer === 'TIME 00:00'){
            this.setState({
                showContainer: 'none',
                showTimeScreen: 'block'
            })
        }
    }

    handleRunAway(){
        this.setState({
            showContainer: 'none',
            showLoseScreen: 'block'
        })
    }


    ////////////////////////////////////////////////////////////////////
    ////////////////////// SHOWING THE PLAYER'S CARDS///////////////////
    ////////////////////////////////////////////////////////////////////

    handleHand(){
        var { playersHand } = this.props.playersHand;

        if(playersHand.length === 0){
            this.setState({
                showContainer: 'none',
                showLoseScreen: 'block'
            })
        }
    }
   
    getCard1(){
        this.handleHand();

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

           const deckStyle = {
            left:'1rem',
            opacity: this.state.deckopacity,
            transition: '2s'
        }
    
        // console.log("PLAYER HAND IN GAME")
        // console.log(this.props.playersHand.playersHand);

        return playersHand.map((player,index) => {
            if( player === playersHand[0] && playersHand.length > 0){
                return(
                    <div key = {index} >
                        <div className = "front">
                            <Card className = "player-deck-card deal card1" style = {!this.state.showCards ? hideFightCards : showFightCards} >
                                <CardHeader  className = "text-center">{player.name}</CardHeader>
                                <CardImg src = {player.image} />
                                <CardFooter>
                                    <div className = "text-center">Damage: {player.damage}</div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                )
            }
        });    
    }

    getCard2(){
        this.handleHand();

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
            if(player2 === playersHand[1] && playersHand.length >= 2){
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

    ////////////////////////////////////////////////////////////////////
    ////////////////////// SHOWING THE PLAYER'S DECK////////////////////
    ////////////////////////////////////////////////////////////////////
   

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
            if(data.length > 0){
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
    ///////////////////////// SHUFFLING/ DRAWING / DEALING THE PLAYERS CARDS ///////////
    ////////////////////////////////////////////////////////////////////////
    
    shufflePCards(){
        var { data } = this.props.shuffled;
        this.props.shuffleCards(data); 
    }

    handleDraw(){
        var { data } = this.props.shuffled;

        this.setState({
            showCards: true,
            draw: true,
            deckopacity: '0'
        });

        setTimeout(() =>{
            this.setState({
                deckopacity:'1'
            })
        }, 1500);

        count++; 
        console.log("LINE 411 NUMBER " + count); 

        if(data.length >= 0){
            this.props.drawCard();
        }else{
            console.log("player loses"); 
        }
    }


    ////////////////////////////////////////////////////////////////////
    ////////////////////// SHOWING THE ENEMY'S CARDS///////////////////
    ////////////////////////////////////////////////////////////////////
    handleEHand(){
        var { enemysHand } = this.props.enemysHand;

        if(enemysHand.length === 0){
            this.setState({
                showContainer: 'none',
                showWinScreen: 'block'
            })
        }
    }
   
    getECard1(){
        this.handleEHand(); 

        var { enemysHand } = this.props.enemysHand;

        const e_showFightCards = {
            opacity: '1',
            transition: 'all 3s',
            visibility: 'visible' 
        }

        const e_hideFightCards = {
            opacity: '0',
            visibility: 'hidden'    
        }

        const e_deckStyle = {
            left:'1rem',
            opacity: this.state.e_deckopacity,
            transition: '2s'
        }

        // console.log("ENEMY HAND IN GAME")
        // console.log(this.props.enemysHand.enemysHand);

        return enemysHand.map((enemy,index) => {
            if( enemy === enemysHand[0] && enemysHand.length > 1){
                return(
                    <div key = {index}>
                        <div className = "front">
                            <Card className = "enemy-deck-card" style = {!this.state.e_showCards ? e_hideFightCards : e_showFightCards} >
                                <CardHeader  className = "text-center">{enemy.name}</CardHeader>
                                <CardImg src = {enemy.image} />
                                <CardFooter>
                                    <div className = "text-center">Damage: {enemy.damage}</div>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className = "back">
                            <Card className = "enemy-deck-card" style = {e_deckStyle}>
                                <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                            </Card>
                        </div>
                    </div>
                )
            }
        });    
    }

    getECard2(){
        this.handleEHand(); 

        var { enemysHand } = this.props.enemysHand;
        
        const e_showFightCards = {
            opacity: '1',
            transition: 'all 6s',
            visibility: 'visible'
        }

        const e_hideFightCards = {
            opacity: '0',
            visibility: 'hidden' 
        }
    
        return enemysHand.map((enemy2, index) => {
            if(enemy2 === enemysHand[1] && enemysHand.length >= 2){
                return(
                    <Card key = {index} className = "enemy-deck-card" style = {!this.state.e_showCards ? e_hideFightCards : e_showFightCards} >
                        <CardHeader className = "text-center">{enemy2.name}</CardHeader>
                        <CardImg src = {enemy2.image} />
                        <CardFooter>
                            <div className = "text-center">Damage: {enemy2.damage}</div>
                        </CardFooter>
                    </Card>
                )
            }
        }); 
    }

    ////////////////////////////////////////////////////////////////////
    ////////////////////// SHOWING THE ENEMY'S DECK////////////////////
    ////////////////////////////////////////////////////////////////////
   

    getEDeck(){
        var { data } = this.props.e_shuffled; 

        const e_deckStyle = {
            left:'1rem',
            opacity: this.state.e_deckopacity,
            transition: '2s'
        }

        return data.map((elem, index) => {
            if(data.length > 1){
                return(
                    <div key = {index}>
                        <div className="front">
                            <Card className = "enemy-deck-card deck-item">
                                <CardHeader className = "text-center">{elem.name}</CardHeader>
                                <CardImg src = {elem.image} />
                                <CardFooter>
                                    <div className = "text-center">Damage: {elem.damage}</div>
                                </CardFooter>
                            </Card>
		                </div>

                        <div className = "back">
                            <Card className = "enemy-deck-card deck-item" style = {e_deckStyle}>
                                <CardImg height="100%" src = "assets/deck/scifi-texture.jpg" />
                            </Card>
                        </div>
                    </div>
                )
            } 
        }).reverse(); 
    }



    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// DRAWING & DEALING THE ENEMY'S CARDS ///////////
    ////////////////////////////////////////////////////////////////////////

    handleEDraw(){
        // this.handleEDeal();
        var { data } = this.props.e_shuffled;
        var { enemysHand } = this.props.enemysHand;


        this.setState({
            e_showCards: true,
            e_draw: true,
            // e_addClass: !this.state.addClass,
            e_deckopacity: '0'
        });

        setTimeout(() =>{
            this.setState({
                e_deckopacity:'1'
            })
        }, 1500);

        count++; 
        console.log("ENEMY LINE 540 NUMBER " + count);
        
        if(data.length > 0){
            this.props.drawECard(); 
        }else{
            console.log("enemy loses");
        }        
    }


    ////////////////////////////////////////////////////////////////////
    ///////////////////////// ATTACKING ENEMY //////////////////////////
    ////////////////////////////////////////////////////////////////////

    attackEnemy(){
        var { playersHand } = this.props.playersHand;
        var weaponAttack = playersHand[0].damage;
        var weaponImage = playersHand[0].image; 
        var weaponName = playersHand[0].name; 

        this.handleWin();
        this.handleLose();
        this.handleTimeUp();

        //managing deck / cards 
        if(p_AP_val >= 5){
            if(playersHand.length > 1){
                playersHand.shift()
                // attacking enemy 
                e_Health_val -= weaponAttack;
                p_AP_val -= 5;
                hits_val += weaponAttack; 

                this.setState({
                    e_Health: e_Health_val,
                    p_AP: p_AP_val,
                    attackdetail:`${weaponName} deals ${weaponAttack} damage!`,  
                    message: 'Keep giving \'em hell!',
                    image: weaponImage,
                    hideBattleBtns: true, 
                    hideDeckBtns: true,
                    hitPoints: hits_val,
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
        }else{
            p_Health_val -= 20; 
            this.setState({
                attackdetail: "You lost 20 health points!",
                image:"assets/gamescreen/fallen.jpg", 
                message: "You don't have enough AP!",
                p_Health: p_Health_val
            });
        }
    } 

    attackEnemy2(){
        var { playersHand } = this.props.playersHand;
        var weaponAttack = playersHand[0].damage;
        var weaponImage = playersHand[0].image; 
        var weaponName = playersHand[0].name; 

        this.handleWin();
        this.handleLose();
        this.handleTimeUp();
        
        if(playersHand.length > 1){
            var attack = 2 * weaponAttack;
            e_Health_val -= attack;
            p_AP_val += 15;

            this.setState({
                attackdetail: `${weaponName} deals ${attack} damage! Gained 15 AP!`,
                e_Health: e_Health_val,  
                image: weaponImage,
                message: "You rolled a 12! Excellent!",
                p_AP: p_AP_val
            })
        }
    }

    ////////////////////////////////////////////////////////////////////
    ///////////////////////// ATTACKING PLAYER //////////////////////////
    ////////////////////////////////////////////////////////////////////

    attackPlayer(){
        var { enemysHand } = this.props.enemysHand;
        var enemyAttack = enemysHand[0].damage;
        var enemyImage = enemysHand[0].image;
        var enemyName = enemysHand[0].name;

        this.handleWin();
        this.handleLose();
        this.handleTimeUp();
    
        //managing deck/cards
        if(enemysHand.length < 42 && enemysHand.length > 1){
            e_count += 1;
            if(e_count === 10){
                e_Health_val += 300
            }

            enemysHand.shift()

            //attacking player 
            p_Health_val -= enemyAttack; 
            e_AP_val -= 5;
            
            this.setState({
                attackdetail: `${enemyName}! You lost ${enemyAttack} health points!`,
                e_AP: e_AP_val, 
                e_Health: e_Health_val,
                hideBattleBtns: true,  
                hideDeckBtns: true,
                image : enemyImage,
                message: "You rolled below 7. You've been attacked!",
                p_Health: p_Health_val,
                showRoll: true,
            })

        }else{
            console.log("enemy loses"); 
        }
    }

    attackPlayer2(){
        var { enemysHand } = this.props.enemysHand;
        var enemyAttack = enemysHand[0].damage;
        var enemyImage = enemysHand[0].image;
        var enemyName = enemysHand[0].name;

        this.handleWin();
        this.handleLose();
        this.handleTimeUp();

        if(enemysHand.length > 1){
            var e_attack = 2 * enemyAttack;
            p_Health_val -= e_attack;
            p_AP_val -= 15;

            this.setState({
                p_Health: p_Health_val,  
                attackdetail: `Double ${enemyName}! Received ${e_attack} damage! Lost 15 AP!`,
                image: enemyImage,
                message: "You rolled a 2! Not good!",
                p_AP: p_AP_val
            })
        
        }else{
            console.log("enemy loses");
        } 
    }

    handleEAP(){
        if(e_AP_val <= 10){
            e_AP_val += 30;
            this.setState({
                e_AP: e_AP_val
            })
        }
    }




    ///////////////////////////////////////////////////////////////
    ////////////////////////// HP/AP UP //////////////////////////
    /////////////////////////////////////////////////////////////

    ///health 
    handleHP(){
        if(p_Health_val <= 850){
            p_Health_val += 150;  
            message = "You gain 150 health points!";
            image = "assets/gamescreen/health.png";
        }else if(p_Health_val >= 900){
            message = "You have enough Health!";
            image = "assets/gamescreen/full.jpg"
        }else{
            message = "You have enough Health!";
            image = "assets/gamescreen/full.jpg"
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

    ///AP
    handleAP(){
        if(p_AP_val < 25){
            if(p_AP_val > 50){
                this.setState({
                    p_AP: 50 
                })
            }else{
                p_AP_val  += 30;
                message = "You gain 30 action points!";
                image = "assets/gamescreen/scifi-crate.jpg"
            }
        }else if(p_AP_val === 50){
            message = "You have enough action points!";
            image = "assets/gamescreen/full.jpg"
        }else{
            message = "You have enough action points!"
            image = "assets/gamescreen/full.jpg"
    
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
    handleComps(){
        var { companions } = this.props; 

        return companions.map((companion)=>{
            if(localPic !== companion.image){
                aidArr.push(companion);
            }
        })  
    }

    handleUpdateComps(){
        var { companions } = this.props; 

        companions.map((companion)=>{
            if(companions.length > 0){
                if(current[0].name === companion.name){
                    companion.name = "Gone";
                    companion.image = "assets/players/redx.png";
                }
            }else{
                console.log("No more companions!")
            }
        })  
    }

    handleHelp(){
        var { companions } = this.props;
    
        if(p_AP_val >= 25 && aidArr.length > 0){
            current.unshift(aidArr.shift())
            message = current[0].message;
            image = current[0].image; 
            var name = current[0].name;
            var damage = current[0].damage; 
            e_Health_val -= damage;
            p_AP_val  -= 25;
            attackdetail = ` ${name} deals ${damage} damage!`;
        } else if(p_AP_val <= 25 && aidArr.length > 0){
            attackdetail = "Enemy attacks you for 50 health points!"
            image = "assets/gamescreen/fallen.jpg"
            message = "You don't have enough AP!";
            p_Health_val -= 50;
        }else if(aidArr.length === 0){
            attackdetail = ""
            message = "You can't request aid anymore!"
            image = "assets/gamescreen/fallen.jpg"
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
        this.handleUpdateComps();
    }


    ////////////////////////////////////////////////////////////////////
    ////////////////////////ROLLING THE DIE/////////////////////////////
    ////////////////////////////////////////////////////////////////////

    handleRoll(){
        var { data } = this.props.e_shuffled;
        //getting a random number to roll random dice
        var randomDie1 = Math.ceil(Math.random() * 6);
        var randomDie2 = Math.ceil(Math.random() * 6);
        
        this.setState({
            die1: "assets/dice/d" + randomDie1 + ".png",
            die2: "assets/dice/d" + randomDie2 + ".png",
        })

        this.handleWin();
        this.handleLose();
        this.handleTimeUp();
    
        if((randomDie1 + randomDie2 >= 7) && (randomDie1 + randomDie2 < 12)){
            this.setState({
                attackdetail: "", 
                hideBattleBtns: false,
                hideDeckBtns: false,
                message: "Shuffle, draw, attack or draw then attack!",
                showRoll: false,
                image : "assets/aliens/alien1.jpg"
            })
        }else if((randomDie1 + randomDie2 <= 6) && (randomDie1 + randomDie2 > 2)){
            this.handleEAP(); 
            this.props.e_shuffleCards(data);  
            this.attackPlayer(); 
            this.handleEDraw();
        }else if(randomDie1 + randomDie2 === 12){
            this.attackEnemy2();
        }else if(randomDie1 + randomDie2 === 2){
            this.attackPlayer2();
        } 
    }


    ///////////////////////////////////////////////////////////////
    ////////////////END OF EVENT HANDLING EVENT //////////////////
    //////////////////////////////////////////////////////////////

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

        const winScreen = {
			display: this.state.showWinScreen,
			transition: this.state.transition,
            opacity: this.state.opacity
        }

        const loseScreen = {
			display: this.state.showLoseScreen,
			transition: this.state.transition,
            opacity: this.state.opacity
        }

        const timeScreen = {
			display: this.state.showTimeScreen,
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

        const imgLose = {
            width: "50%",
            margin: "auto"
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
						<div className = "display-1 fight-text">
							Are you ready to <br/> 
							<div className = "display-1 fight-text">battle?</div>
						</div> 
						<Button onClick = {()=> this.startGame()} color="danger" className = "start-btn">FIGHT</Button>
					</div> 

                    <div style = {winScreen} className = "fightscreen">
                        <Form onSubmit = {this.handleTimeSubmit}>
                            <div className = "d-flex flex-column">
                                <div className = "display-4 fight-text d-flex flex-column">
                                    <div className = "display-2">Enemy defeated!</div>
                                    <div>{this.state.playerTime}</div>
                                    <div>Hit Points: {this.state.hitPoints}</div>
                                    <div>Experience: {this.state.exp}</div> 
                                    <div>Level: {this.state.level}</div>
                                </div> 
                                <img style = {imgLose} src = "assets/gamescreen/rejoice.jpg" />
                            </div>
                            <Input type ="hidden" value = {this.state.charName}/>
                            <Input type ="hidden" value = {this.state.level}/>
                            <Input type ="hidden" value = {this.state.exp}/>
                            <Input type ="hidden" value = {this.state.playerTime}/>
                           
                            <Button type ="submit" color="danger" className = "start-btn">CONTINUE</Button>
                        </Form>
					</div> 
                   

                    <div style = {loseScreen} className = "fightscreen">
                        <div className = "d-flex flex-column">
                            <div className = "display-2 fight-text">
                                Game Over <br/> 
                            </div> 
                            <img style = {imgLose} src = "assets/gamescreen/fallen.jpg" />
                        </div>
						<Button color="danger" className = "start-btn" onClick = {()=> this.playAgain()}>PLAY AGAIN</Button>
                        <Button onClick = {()=> this.quitGame()} color="danger" className = "start-btn">QUIT GAME</Button>
					</div> 

                    <div style = {timeScreen} className = "fightscreen">
                        <div className = "d-flex flex-column">
                            <div className = "display-2 fight-text">
                                Time's Up <br/> 
                            </div> 
                            <img style = {imgLose} src = "assets/gamescreen/fallen.jpg" />
                        </div>
						<Button color="danger" className = "start-btn" onClick = {()=> this.playAgain()}>PLAY AGAIN</Button>
                        <Button onClick = {()=> this.quitGame()} color="danger" className = "start-btn">QUIT GAME</Button>
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
                                    runAway = {this.handleRunAway}
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
                                    total = {this.state.e_HealthTotal}
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
                                    total = {this.state.p_HealthTotal}
                                />
                            </Col>
                        </Row>

                        <Row className = "row3 d-flex flex-row">
                            <Col md = "4">
                                <div>
                                    <EnemyDeck
                                        drawCond = {this.state.e_draw}
                                        getECard1 = {this.getECard1}
                                        getECard2 = {this.getECard2}
                                        showCards = {this.state.e_showCards}
                                        getEDeck = {this.getEDeck}
                                    />
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
                                    shuffle = {this.shufflePCards}
                                    showroll = {this.state.showRoll}
                                    showdeal = {this.state.showDeal}
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
        enemyattacks: state.attackLibrary, 
        deckweapons: state.weaponsLibrary,
        deckweapons2: state.weaponsLibrary2,
        enemysHand: state.enemysHand, 
        e_shuffled: state.enemyShuffle,
        // newDeck: state.newDeck, 
        playersHand: state.playersHand,
        shuffled: state.cardShuffle, 
        companions: state.companions
    }

}

export default connect(mapStateToProps,actions)(Game); 



