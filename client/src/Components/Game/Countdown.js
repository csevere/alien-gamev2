import React, {Component} from 'react';
import {Button} from 'reactstrap';


class Countdown extends Component{
    constructor(props){
        super(props);
        
        this.pauseButton = this.pauseButton.bind(this); 

    }
    
    pauseButton(){
        this.props.pauseCountDown(); 
    }

    render(){
        const textStyle = {
            color: this.props.textColor,
            marginTop: '-5.5rem'
        }

        return(
            <div>
                <div>
                    <Button color="danger" className = "start-btn" onClick = { ()=> this.pauseButton()}>{this.props.isRunning ? 'PAUSE | |' : 'PLAY  ▶︎'}</Button>
                </div>
                <div style = {textStyle} className = "countdown">
                    {this.props.timer}
                </div>
            </div>
        )
    }

}

export default Countdown;



