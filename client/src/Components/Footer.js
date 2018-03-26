import React, {Component} from 'react';
// import createHistory from 'history/createBrowserHistory'; 
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { Row, Col, Button } from 'reactstrap';

class Footer extends Component { 
    constructor(props){
        super(props); 

        this.quitGame = this.quitGame.bind(this); 
    }

    quitGame(){
        this.props.logoutUser();  
    }


    render(){
        // this.props.logoutUser ("faux");
        const { authenticated } = this.props.userData; 
        console.log("*******CHECKING LOGOUT ACTION**********");
        console.log(this.props.userData);
        console.log(authenticated); 
    
        const statStyle = {
            float: 'right',
            marginLeft: '23rem'
        }

        const localToken = localStorage.getItem('token'); 
        const localName = localStorage.getItem('name'); 
        console.log(localToken); 

        if(!localToken){
            var rightPlayerStatus = [ 
                <Button className = "d-flex flex-row player-status" color="danger">
                    <div className = "text-white p-2">Player Status :</div> 
                    <div className = "text-white status-red p-2">&nbsp;Inactive</div>
                </Button>
            ]
        }else{
            var rightPlayerStatus = [
                <div className = "d-flex flex-row" style = {statStyle}>
                    <Button className = "player-status ml-3" color="success">
                        <div className = "text-white p-2">Player Status :</div> 
                        <div className = "text-white status-red p-2">&nbsp; {localName} is active</div>
                    </Button>
                    <Button className = "player-status ml-3" color = "danger" onClick = {()=> this.quitGame()}>QUIT GAME</Button>
                </div>
            ]  
        
        }
        return(
            <footer className = "main-footer pl-3">
                <Row className="no-gutters d-flex flex-row">
                    <div className = "d-flex flex-row text-white">
                        <div className = "p-2"><p>Alien BattleCraft &copy; 2018 Carla Severe</p></div>
                        <div className = "p-2">|&nbsp; &nbsp;How to Play</div>
                        <div className = "p-2">|&nbsp; &nbsp;Game Soundtrack</div>
                        <div className = "p-2">|&nbsp; &nbsp;Credits</div>
                        <div className = "p-2">|&nbsp; &nbsp;Donate</div>
                    </div>
                    {rightPlayerStatus}
                </Row>
            </footer>
        )
    }
}

function mapStateToProps(state){
    return{
        userData: state.loginReducer
    }
}
	
export default connect(mapStateToProps,actions)(Footer);