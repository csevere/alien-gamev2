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


class Countdown extends Component{
    constructor(props){
        super(props);
           
        this.pauseIt = this.pauseIt.bind(this)
        
    }

    pauseIt(){
        const {pauseGame} = this.props
        pauseGame();
    }

    render(){
        return(
            <div>
                <Button onClick = {this.pauseIt}>Click Me</Button>
                <div className = "countdown">00:00</div>
            </div>
        )
    }

}
export default Countdown; 


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
