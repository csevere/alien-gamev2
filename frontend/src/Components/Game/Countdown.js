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

        console.log(this.props.isRunning); 

        return(
            <div>
                <div>
                    <Button color="danger" className = "start-btn" onClick = { ()=> this.pauseButton()}>{this.props.isRunning ? 'PAUSE | |' : 'RESUME'}</Button>
                </div>
                <div style = {textStyle} className = "countdown">
                    {this.props.timer}
                </div>
            </div>
        )
    }

}

export default Countdown;



// class Countdown extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isRunning: false,
//             timer: '00:00',
//             textColor: 'white',
//         }   

        
//        this.theCountDown = this.theCountDown.bind(this);
//        this.pauseCountDown = this.pauseCountDown.bind(this); 
//        this.updateTimer = this.updateTimer.bind(this); 
//        this.startTimer = this.startTimer.bind(this); 
//     }
    
//     updateTimer(){
//         // Run till timeout
//         if(CurrentTime + TimeGap < EndTime ) {
//             setTimeout(this.updateTimer, TimeGap);
//         }
//         // Countdown if running
//         if(this.state.isRunning === true) {
//             CurrentTime += TimeGap;
//             console.log(EndTime + " EndTime")
//             if( CurrentTime >= EndTime ) {
                
//                 this.setState({
//                     textColor: 'red' 
//                 })
//             }
//         }
//         // Update Gui
//         const Time = new Date();
//         Time.setTime( EndTime - CurrentTime);
//         var Minutes = Time.getMinutes();
//         var Seconds = Time.getSeconds();
        
//         this.setState({
//             timer:`${(Minutes < 10 ? '0' : '')}` + `${Minutes}` 
//             + `:`
//             + `${(Seconds < 10 ? '0' : '')}` + `${Seconds}`
//         })
//     };

//     startTimer(Timeout){
//         TimeOut = Timeout;
//         CurrentTime = (new Date()).getTime();
//         EndTime = CurrentTime + TimeOut;
//         console.log(TimeOut);
//         this.updateTimer();  
//     }
   
//     theCountDown(){
//         this.setState({
//             isRunning: true,
//             show: 'inline-grid' 
//         })

//         // console.log(EndTime);
//         this.startTimer(300000); 
//     };

//     pauseCountDown(){
//         this.setState({
//             isRunning:!this.state.isRunning
//         })
//     }

//     render(){
//         const textStyle = {
//             color:this.state.textColor,
//             marginTop: '-5.5rem'
//         }

//         return(
//             <div>
//                 <div>
//                     <Button onClick = { ()=> this.theCountDown()}>Start</Button>
//                     <Button color="danger" className = "start-btn" onClick = { ()=> this.pauseCountDown()}>{this.state.isRunning ? 'PAUSE ||' : 'RESUME'}</Button>
//                 </div>
//                 <div style = {textStyle} className = "countdown">
//                     {this.state.timer}
//                 </div>
//             </div>
//         )
//     }

// }

// export default Countdown;


