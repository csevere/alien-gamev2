import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Countdown extends Component{
    constructor(props){
        super(props);

        this.pauseButton = this.pauseButton.bind(this); 
        this.giveUp = this.giveUp.bind(this);
    }
    
    pauseButton(){
        this.props.pauseCountDown(); 
    }

    giveUp(){
        this.props.runAway(); 
    }

    render(){
        const textStyle = {
            color: this.props.textColor,
        }

        return(
            <div className = "d-flex flex-row">
                <div>
                    <Button color="danger" className = "start-btn" onClick = { ()=> this.pauseButton()}>{this.props.isRunning ? 'PAUSE | |' : 'PLAY  ▶︎'}</Button>
                </div>
                <div>
                    <Button color = "danger" className = "start-btn" onClick = { ()=> this.giveUp()}>Run Away</Button>
                </div>
                <div style = {textStyle} className = "countdown">
                    {this.props.timer}
                </div>
            </div>
        )
    }
}

export default Countdown;



