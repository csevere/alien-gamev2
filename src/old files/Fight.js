//required dependencies 
import React, {Component} from 'react';

var userHealth_val = 500;
var actionPoints_val = 100;
var alienHealth_val = 1000;
var a_actionPoints_val = 30;  

var message = ""; 
var image = ""; 


class Fight extends Component{
  constructor(){
    super();
    // pass the values and keys of progress bars to use downstairs
    //set the initial state here! 
    this.state = {
      handleFight: true,
      message: "Terrifying aliens have breached your ship! Fight or Run Away?",
      image: "/Images/scaryaliens.jpeg" 
   
    }
    this.handleFight = this.handleFight.bind(this)
  }
  //you have to define die1 and die2 if you choose to add them in your objects array
  //in this.setState
  //you can put your algorithm in the handle click function too
 
 

  handleFight(){
    // run your logic here 

    var randomDie1 = Math.ceil(Math.random() * 6);
    var randomDie2 = Math.ceil(Math.random() * 6);

    console.log(randomDie1 + randomDie2);


    if(actionPoints_val < 0){
      userHealth_val -= 25;
      message = "You don't have any action points! The aliens have landed a mighty blow! Quick, use a Stamina Pack!"
      image = "Images/alien_winning.jpg"

    }else if(randomDie1 + randomDie2 >= 8 && (randomDie1 + randomDie2 < 12)){
      alienHealth_val -= 50;
      actionPoints_val -= 5;
      message = "Keep giving them hell!"
      image = "Images/fighting_thealien.jpg"
      console.log(alienHealth_val,actionPoints_val);
   
    }else if((randomDie1 + randomDie1 <= 7) && (randomDie1 + randomDie1 > 2)){
      userHealth_val -= 30;
      a_actionPoints_val -= 5;
      message = "You're getting attacked!"
      image = "Images/alien_winning.jpg"
      console.log(userHealth_val,a_actionPoints_val);

   
    }else if(randomDie1 + randomDie1 === 12){
      userHealth_val += 30
      alienHealth_val -= 75;
      message = "The aliens missed! You got a chance to replenish your health and attack!"
      image = "Images/fighting_thealien.jpg"
      console.log(userHealth_val,alienHealth_val);
   
    }else if(randomDie1 + randomDie1 === 2){
      userHealth_val -= 100;
      actionPoints_val -= 10; 
      message = "You missed! You got hurt and lost extra action points!"
      image = "Images/alien_winning.jpg"
      console.log(userHealth_val,actionPoints_val);
      
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
      image = "/Images/you_died.jpg"; 
      message = "GAME OVER! The Aliens are now experimenting on your corpse.";
    }

        
    
    //set the state to be changed here!!
    //put the route of the pictures to access them from public  
    this.setState({
      toggleOn: !this.state.toggleOn,
      die1: "/alien-assets/d" + randomDie1 + ".gif",
      die2: "/alien-assets/d" + randomDie2 + ".gif",
      userHealth: userHealth_val,
      actionPoints: actionPoints_val,
      alienHealth: alienHealth_val,
      a_actionPoints: a_actionPoints_val,
      message: message,
      image: image
    })

    console.log("it works")  
  }

  //when state changes, it rerenders; decide what to show 
  //in the progress, i'll be chaning the progress
  render(){ 

 
      return(
      <div>

          <div  className = "text-center" id = "alien">
            <img src = {this.state.image} name = "alienImage" alt = ""/>
          </div>
        

          <div id = "message" className = "text-center">{this.state.message}</div>
         

          <div className = "text-center"> 
                <div id = "bars" name = "progress">
                  Your Health
                  <progress id = "userHealth" value = {this.state.userHealth} max = "500"></progress>
                  Your Action Points
                  <progress id = "actionPoints" value = {this.state.actionPoints} max = "100"></progress>
                  {"Alien's Health"}
                  <progress id = "alienHealth" value = {this.state.alienHealth} max = "1000"></progress>
                  {"Alien's Action Points"}
                  <progress id = "a_actionPoints" value = {this.state.a_actionPoints} max = "30"></progress>
              </div>
          </div>  

          <button className = "btn btn-default" onClick = {this.handleFight}>Fight!</button>

          <div className = "row" id = "dice">
            <img src = {this.state.die1} alt = ""/>
            <img src = {this.state.die2} alt = ""/>
          </div>
      </div>

      )
  }

}

 
export default Fight 