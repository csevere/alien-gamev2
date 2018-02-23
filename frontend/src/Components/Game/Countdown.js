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
console.log(EndTime);



class Countdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRunning: true,
            textColor: 'white',
            timer: '00:00'

        }
            
    //    this.startCountDown = this.startCountDown.bind(this);
    //    this.theCountDown = this.theCountDown.bind(this);
       this.pauseCountDown = this.pauseCountDown.bind(this); 
    //    this.updateTimer = this.updateTimer.bind(this); 
    //    this.Start = this.Start.bind(this); 

    }


    componentWillMount(){

        this.updateTimer = () => {
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
                + `${(Seconds < 10 ? '0' : '')} + ${Seconds}`
            })

        };
    

        this.Start = ( Timeout ) => {
            TimeOut = Timeout;
            CurrentTime = ( new Date() ).getTime();
            EndTime = ( new Date() ).getTime() + TimeOut;
            this.updateTimer();
        };
    


        this.theCountDown =(time)=>{
            this.setState({
                isRunning: !this.state.isRunning,
                show: 'inline-grid' 
            })

            this.Start(); 
        }

        this.startCountDown =(time)=> {
            this.theCountDown(300000)
        }

    }

    
    pauseCountDown(){
        this.setState({
            isRunning:!this.state.isRunning
        })
    }


    render(){
        const textStyle = {
            color:this.state.textColor,
            marginTop: '-2.5em'
        }

        const tempStyle = {
            marginLeft: '-18em'
        }

        return(
            <div>
                <div style = {tempStyle}>
                    <Button onClick = { ()=> this.pauseCountDown()}>{this.state.isRunning ? 'PAUSE | |' : 'RESUME'}</Button>
                </div>
                <div style = {textStyle} className = "countdown">
                    {this.state.timer}
                </div>
            </div>
        )
    }

}
export default Countdown;






// var CountDown = (function ($) {
//     // Length ms 
//     var TimeOut = 10000;
//     // Interval ms
//     var TimeGap = 1000;
    
//     var CurrentTime = ( new Date() ).getTime();
//     var EndTime = ( new Date() ).getTime() + TimeOut;
    
//     var GuiTimer = $('#countdown');
//     var GuiPause = $('#pause');
//     var GuiResume = $('#resume').hide();
    
//     var Running = true;
    
//     var UpdateTimer = function() {
//         // Run till timeout
//         if( CurrentTime + TimeGap < EndTime ) {
//             setTimeout( UpdateTimer, TimeGap );
//         }
//         // Countdown if running
//         if( Running ) {
//             CurrentTime += TimeGap;
//             if( CurrentTime >= EndTime ) {
//                 GuiTimer.css('color','red');
//             }
//         }
//         // Update Gui
//         var Time = new Date();
//         Time.setTime( EndTime - CurrentTime );
//         var Minutes = Time.getMinutes();
//         var Seconds = Time.getSeconds();
        
//         GuiTimer.html( 
//             (Minutes < 10 ? '0' : '') + Minutes 
//             + ':' 
//             + (Seconds < 10 ? '0' : '') + Seconds );
//     };
    
//     var Pause = function() {
//         Running = false;
//         GuiPause.hide();
//         GuiResume.show();
//     };
    
//     var Resume = function() {
//         Running = true;
//         GuiPause.show();
//         GuiResume.hide();
//     };
    
//     var Start = function( Timeout ) {
//         TimeOut = Timeout;
//         CurrentTime = ( new Date() ).getTime();
//         EndTime = ( new Date() ).getTime() + TimeOut;
//         UpdateTimer();
//     };

//     return {
//         Pause: Pause,
//         Resume: Resume,
//         Start: Start
//     };
// })(jQuery);

// jQuery('#pause').on('click',CountDown.Pause);
// jQuery('#resume').on('click',CountDown.Resume);

// // ms
// CountDown.Start(120000);




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
