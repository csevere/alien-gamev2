import React, {Component} from 'react';

var userHealth_val = 500;
var actionPoints_val = 100;
var alienHealth_val = 1000;
var a_actionPoints_val = 30;  

var message = ""; 
var image = ""; 


class CallHelp extends Component{
  constructor(){
    super();
    // pass the values and keys of progress bars to use downstairs
    //set the initial state here! 
    this.state = {
      handleHelp: true,
   
    }
    this.handleHelp = this.handleHelp.bind(this)
  }

handleHelp(){

 if(actionPoints_val >= 35){
    alienHealth_val -= 400;
    actionPoints_val -= 45;
    console.log(actionPoints_val);
    image = "/Images/woman_fighting.jpg";
    message = "Die, alien scum! You're welcome. Don't call again!";
  
  }else if(alienHealth_val <= 0){
    image = "http://www.newsarama.com/images/i/000/180/703/i02/ALDO-Cover.jpg";
    message = "You defeated the aliens and saved Earth!";

  }else if(userHealth_val <= 0){
    image = "/Images/you_died.jpg"; 
    message = "GAME OVER! The Aliens are now experimenting on your corpse.";

  }else{
    message = "You don't have enough AP!";
  }

//set the state to be changed here!!
    //put the route of the pictures to access them from public  
  this.setState({
    toggleOn: !this.state.toggleOn,
    userHealth: userHealth_val,
    actionPoints: actionPoints_val,
    alienHealth: alienHealth_val,
    a_actionPoints: a_actionPoints_val,
    message: message,
    image: image
  })

  console.log("it works")  
}


 render(){ 

 
      return(
      <div className = "text-center">
          <button className = "btn btn-default" onClick = {this.handleHelp}>Call For Help!</button>
      </div>

      )
  }

}

export default CallHelp

// <div  className = "text-center" id = "alien">
//             <img src = {this.state.image} name = "alienImage" alt = ""/>
//           </div>
        

//           <div id = "message" className = "text-center">{this.state.message}</div>
         

//           <div className = "text-center"> 
//                 <div id = "bars" name = "progress">
//                   Your Health
//                   <progress id = "userHealth" value = {this.state.userHealth} max = "500"></progress>
//                   Your Action Points
//                   <progress id = "actionPoints" value = {this.state.actionPoints} max = "100"></progress>
//                   {"Alien\'s Health"}
//                   <progress id = "alienHealth" value = {this.state.alienHealth} max = "1000"></progress>
//                   {"Alien\'s Action Points"}
//                   <progress id = "a_actionPoints" value = {this.state.a_actionPoints} max = "30"></progress>
//               </div>
//           </div>  


