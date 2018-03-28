import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'; 
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { Row, Col, Button } from 'reactstrap';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

class Footer extends Component { 
    constructor(props){
        super(props); 

        this.quitGame = this.quitGame.bind(this); 
    }

    quitGame(){
        this.props.logoutUser(); 
        const history = createHistory();
        history.push('/');
        history.go('/'); 
    }

    render(){

        console.log("*******CHECKING LOGOUT ACTION**********");
        console.log(localToken); 
        console.log(localName); 

        if(localToken && localName){
            var rightPlayerStatus = [
                <div className = "d-flex flex-row player-status" key = '1'>
                    <Button className = "player-status-btn btn-1 ml-3" color="success">
                        <div className = "text-white p-2">Player Status :</div> 
                        <div className = "text-white status-red p-2">&nbsp; {localName} is active</div>
                    </Button>
                    <Button className = "player-status-btn btn-2 ml-3 quit" color = "danger" onClick = {()=> this.quitGame()}>QUIT GAME</Button>
                </div>
            ]

        }else{
            var rightPlayerStatus = [] 
        }

        return(
            <footer className = "main-footer pl-3">
                <Row className="no-gutters d-flex flex-row">
                    <div className = "d-flex flex-row text-white">
                        <div className = "p-2"><p>Alien BattleCraft &copy; 2018 Carla Severe</p></div>
                        <div className = "p-2">|&nbsp; &nbsp;How to Play</div>
                        <div className = "p-2">|&nbsp; &nbsp;Soundtrack</div>
                        <div className = "p-2">|&nbsp; &nbsp;Donate</div>
                    </div>
                    {rightPlayerStatus}
                </Row>
            </footer>
        )
    }
}

export default connect(null,actions)(Footer);