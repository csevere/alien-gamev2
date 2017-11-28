//required dependencies 
import React, {Component} from 'react';
import Message from './Message';
import Image from './Image';
import Buttons from './Buttons';
import Progress from './Progress'; 
import Dice from './Dice'; 

// set the variables of progress bars to use downstairs

var userHealth_val = 500;
var actionPoints_val = 100;
var alienHealth_val = 1000;
var a_actionPoints_val = 50;  

var message = "hi"; 
var image = ""; 


class Game extends Component{
  constructor(props){
    super(props);
    //set the initial state here to use downstairs! 
    this.state = {
      handleFight: true,
      handleHelp: true,
      handleEscape: true,
      handleStamina: true,
      handleHealth:true,
      message: "Terrifying aliens have breached your ship! Fight or Run Away?",
      image: "Images/scaryaliens.jpeg" 
   
    }
    //binding for each click event 
    this.handleFight = this.handleFight.bind(this)
    this.handleHelp = this.handleHelp.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
    this.handleStamina = this.handleStamina.bind(this)
    this.handleHealth = this.handleHealth.bind(this)
  }
 
 

  handleFight(){
   
    //getting a random number to roll random dice
    var randomDie1 = Math.ceil(Math.random() * 6);
    var randomDie2 = Math.ceil(Math.random() * 6);

    console.log(randomDie1 + randomDie2);

    //endless if/else statements to change progress bars, messages, and images 

    if(actionPoints_val <= 0){
      userHealth_val -= 50;
      message = "You don't have any AP! The aliens have landed a mighty blow! Quick, use a Stamina Pack!"
      image = "Images/alien_winning.jpg"

    }
    

    if(randomDie1 + randomDie2 == 12){
      userHealth_val += 30;
      alienHealth_val -= 75;
      a_actionPoints_val -= 10;
      message = "The aliens missed! You got a chance to replenish your health and attack!"
      image = "Images/fighting_thealien.jpg"
      console.log(userHealth_val,alienHealth_val);
   
    }else if(randomDie1 + randomDie2 == 2){
      userHealth_val -= 100;
      actionPoints_val -= 10; 
      message = "You missed! You got hurt and lost extra action points!"
      image = "Images/alien_winning.jpg"
      console.log(userHealth_val,actionPoints_val);
      
    }else if(randomDie1 + randomDie2 >= 8 && (randomDie1 + randomDie2 < 12)){
      alienHealth_val -= 50;
      actionPoints_val -= 5;
      message = "Keep giving them hell!"
      image = "Images/fighting_thealien.jpg"
      console.log(alienHealth_val,actionPoints_val);
   
    }else if((randomDie1 + randomDie2 <= 7) && (randomDie1 + randomDie2 > 2)){
      userHealth_val -= 30;
      a_actionPoints_val -= 5;
      message = "You're getting attacked!"
      image = "Images/alien_winning.jpg"
      console.log(userHealth_val,a_actionPoints_val);
    }

  if(a_actionPoints_val <= 5){
      a_actionPoints_val += 10;

  }else if(a_actionPoints_val === 0){
    image = "Images/rejoice.jpg";
    message = "The Aliens ran away! Rejoice!";
  } 

  if(alienHealth_val <= 0){
    image = "http://www.newsarama.com/images/i/000/180/703/i02/ALDO-Cover.jpg";
    message = "You defeated the aliens and saved Earth!";

  }else if(userHealth_val <= 0){
    image = "Images/you_died.jpg"; 
    message = "GAME OVER! The Aliens are now experimenting on your corpse.";
    actionPoints_val = 0; 
  }


      
  

        
    //set the state to be changed here!!
    //put the pictures in the public folder for root access  
    this.setState({
      toggleOn: !this.state.toggleOn,
      die1: "alien-assets/d" + randomDie1 + ".gif",
      die2: "alien-assets/d" + randomDie2 + ".gif",
      userHealth: userHealth_val,
      actionPoints: actionPoints_val,
      alienHealth: alienHealth_val,
      a_actionPoints: a_actionPoints_val,
      message: message,
      image: image
    })

    // console.log("it works")  
  }



  handleHelp(){


    if(actionPoints_val >= 35){
      alienHealth_val -= 300;
      actionPoints_val -= 45;
      console.log(actionPoints_val);
      image = "Images/woman_fighting.jpg";
      message = "Die, alien scum! You're welcome. Don't call again!";
    
    }else{
      message = "You don't have enough AP! The aliens attacked you for 50 health points!";
      image = "Images/fallen.jpg";
      userHealth_val -= 50;

    }if(userHealth_val <= 0){
      image = "Images/you_died.jpg"; 
      message = "GAME OVER! The Aliens are now experimenting on your corpse.";
      actionPoints_val = 0; 

    }else if(alienHealth_val <= 0){
      image = "http://www.newsarama.com/images/i/000/180/703/i02/ALDO-Cover.jpg";
      message = "You don't need help. You killed the Aliens!";
    }


  //set the state to be changed here to change it downstairs!!
    this.setState({
      toggleOn: !this.state.toggleOn,
      userHealth: userHealth_val,
      actionPoints: actionPoints_val,
      alienHealth: alienHealth_val,
      a_actionPoints: a_actionPoints_val,
      message: message,
      image: image
    })

  }


 handleEscape(){

    actionPoints_val -= 25
    image = "http://best-sci-fi-books.com/wp-content/uploads/2014/08/alien_invasion_600.jpg";
    message = "The Aliens are winning! You're failing the human race, coward! Get back in the fight!";

    if(userHealth_val <= 0){
      image = "Images/you_died.jpg"; 
      message = "GAME OVER! The Aliens are now experimenting on your corpse.";
      actionPoints_val = 0; 

    }else if(alienHealth_val <= 0){
      image = "http://www.newsarama.com/images/i/000/180/703/i02/ALDO-Cover.jpg";
      message = "Why are you running away? You saved the world, coward!";
    }

    this.setState({
      toggleOn: !this.state.toggleOn,
      actionPoints: actionPoints_val,
      userHealth: userHealth_val,
      alienHealh: alienHealth_val,
      message: message,
      image: image
    })

  }


  handleStamina(){

    if(actionPoints_val <= 50){
        actionPoints_val += 15;
        message = "You gained 15 Action Points!";
        image = "Images/Sci-Fi-Crate.jpg"

    }else{
      message = "You have enough Action Points!"
      image = "Images/full.jpg"

    }if(userHealth_val <= 0){
      image = "Images/you_died.jpg"; 
      message = "GAME OVER! The Aliens are now experimenting on your corpse.";
      actionPoints_val = 0; 

    }
   
    this.setState({
      toggleOn: !this.state.toggleOn,
      actionPoints: actionPoints_val,
      message: message,
      image:image  
    })
 
  }


  handleHealth(){

    if(userHealth_val <= 250){
        userHealth_val += 50;
        message = "You gained 50 Health Points!";
        image = "Images/health.png";

    }else{
      message = "You have enough Health!";
      image = "Images/full.jpg"
      

    }if(userHealth_val <= 0){
        image = "Images/you_died.jpg"; 
        message = "GAME OVER! The Aliens are now experimenting on your corpse.";
        actionPoints_val = 0;
    }
   
    this.setState({
      toggleOn: !this.state.toggleOn,
      userHealth: userHealth_val,
      message: message,
      image:image  
    })

  }


  //when state changes, it rerenders the page; decide what to show 

  render(){ 

   return(
      <div class = "container">

          <Image image = {this.state.image}/>
        
          <Message message = {this.state.message} />

          <Progress health = {this.state.userHealth} ap = {this.state.actionPoints} ahealth = {this.state.alienHealth} aap = {this.state.a_actionPoints} />  

          <Buttons fight = {this.handleFight} help = {this.handleHelp} escape = {this.handleEscape} stamina = {this.handleStamina} health = {this.handleHealth}/>

          <Dice dieone = {this.state.die1} dietwo = {this.state.die2}  />

      </div>

    )
  }

}

 
export default Game




// <div id = "message" className = "text-center">{this.state.message}</div>


// <div className = "text-center"> 
//    <div id = "bars" name = "progress">
//       Your Health
//       <progress id = "userHealth" value = {this.state.userHealth} max = "500"></progress>
//       Your Action Points
//       <progress id = "actionPoints" value = {this.state.actionPoints} max = "100"></progress>
//       {"Alien's Health"}
//       <progress id = "alienHealth" value = {this.state.alienHealth} max = "1000"></progress>
//       {"Alien's Action Points"}
//       <progress id = "a_actionPoints" value = {this.state.a_actionPoints} max = "50"></progress>
//     </div>
// </div>  


// <button className = "btn btn-default" onClick = {this.handleFight}>Fight!</button>
// <button className = "btn btn-default" onClick = {this.handleHelp}>Get Help!</button>
// <button className = "btn btn-default" onClick = {this.handleEscape}>RunAway!</button>
// <button className = "btn btn-default" onClick = {this.handleStamina}>Use Stamina Pack!</button>
// <button className = "btn btn-default" onClick = {this.handleHealth}>Use Health Pack!</button>
// <button className = "btn btn-default" ><a href="javascript:history.go(0)">Replay!</a></button>


// <div className = "row" id = "dice">
//   <img src = {this.state.die1} alt = ""/>
//   <img src = {this.state.die2} alt = ""/>
// </div>

