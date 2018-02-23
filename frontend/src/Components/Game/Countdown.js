import React, {Component} from 'react';
// import Countdown from 'react-countdown-now';
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
var EndTime = (new Date()).getTime() + TimeOut;
// console.log(EndTime);

class Countdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRunning: true,
            timer: '00:00',
            textColor: 'white',

        }
            
       this.startCountDown = this.startCountDown.bind(this);
       this.theCountDown = this.theCountDown.bind(this);
       this.pauseCountDown = this.pauseCountDown.bind(this); 
       this.updateTimer = this.updateTimer.bind(this); 
       this.Start = this.Start.bind(this); 
    }


    updateTimer(TimeOut, EndTime, CurrentTime){
        // var CurrentTime = (new Date()).getTime();
        var TimeGap = 1000;
        console.log(EndTime);
        console.log(TimeOut); 

        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( this.updateTimer, TimeGap );
        }
        // Countdown if running
        if( this.state.isRunning ) {
            CurrentTime += TimeGap;
            if( CurrentTime >= EndTime ) {
                this.setState({
                    textColor: 'red' 
                })
            }
        }
        // Update Gui
        const Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();
        

        this.setState({
            timer:`${(Minutes < 10 ? '0' : '')}` + `${Minutes}` 
            + `:`
            + `${(Seconds < 10 ? '0' : '')}` + `${Seconds}`
        })
    };


    Start(Timeout) {
        TimeOut = Timeout;
        CurrentTime = (new Date()).getTime();
        EndTime = CurrentTime + TimeOut;
        console.log(EndTime); 
        console.log(CurrentTime); 

        this.updateTimer(TimeOut, EndTime, CurrentTime);
    };

   
    theCountDown(){
        this.setState({
            isRunning: !this.state.isRunning,
            show: 'inline-grid' 
        })

        this.Start(300000); 
    };

    startCountDown(){
        this.theCountDown(); 
    }

    pauseCountDown(){
        this.setState({
            isRunning:!this.state.isRunning
        })
    }


    render(){
        const textStyle = {
            color:this.state.textColor,
            marginTop: '-5.5rem'
        }

        return(
            <div>
                <div>
                    <Button onClick = { ()=> this.startCountDown()}>Start</Button>
                    <Button onClick = { ()=> this.pauseCountDown()}>{this.state.isRunning ? 'RESUME' : 'PAUSE | |'}</Button>
                </div>
                <div style = {textStyle} className = "countdown">
                    {this.state.timer}
                </div>
            </div>
        )
    }

}
export default Countdown;




// pauseIt(){
//     const {pauseGame} = this.props
//     pauseGame();
// }

// this.pauseIt = this.pauseIt.bind(this)











//Study how props are passed from parent to child // make notes in notebook 

// function Timer() {
    
//     const Completionist = () => <span>You ran out of time! GAME OVER</span>
//     const renderer = ({ minutes, seconds, completed}) =>{
//         if(completed){
//             return <Completionist/>;
//         }else{
//             return <span>{minutes} : {seconds}</span>;
//         }
//     };

   
//     return(
//         <div className = "timer">
//             <Countdown
//                 date = {Date.now() + 300000}
//                 renderer = {renderer}
//                 controlled = {false}
//             />
//         </div>
//     )            
// }
