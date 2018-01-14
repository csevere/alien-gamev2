import React, {Component} from 'react';
import Countdown from 'react-countdown-now';


function Timer() {
    
    const Completionist = () => <span>You ran out of time! GAME OVER</span>
    const renderer = ({ minutes, seconds, completed}) =>{
        if(completed){
            return <Completionist/>;
        }else{
            return <span>{minutes} : {seconds}</span>;
        }
    };

    return(
        <div className = "timer">
            <Countdown
                date = {Date.now() + 300000}
                renderer = {renderer}
            />
        </div>
    )            
}

export default Timer; 