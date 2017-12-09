# ALIEN BATTLECRAFT


## About
Alien Battlecraft is an interactive dice game in which players must fight aliens that have invaded their spacecraft. Winning requires some strategy and good luck. 

<p align='center'>
  <img src="public/Images/alien.png">
</p>

## Languages and Technologies

HTML |  CSS | Bootstrap | JavaScript | JSX | React   


## Strategy

From the game's conception, I wanted it to have the feel of a real RPG (Role-Playing Game), so I used three important elements to achieve that effect: 

  1.) action points for both the player and aliens to add a little strategy and make the game more fun, 
  2.) progress bars to let the players monitor their health and action points, along with the aliens' health and action points, 
  3.) and dynamic text to make the game more interactive and exciting. 

With a little research, I learned how to make the progress bars, giving them max values for the pairs of health and action points. Once I found some quality images and played around with the CSS to give the game a fun look to work with, I set out to handle the events for the game's six buttons. I needed them to affect the values of the progress bars and their numerical values  according to the game's rules and to match the expectations of the players, of course. 

## Site Walkthrough


### The Six Buttons

Upon entering the site, players will see a trio of frightening aliens that have invaded their ship. The text prompts users to fight the aliens, but players can choose to click any one of six buttons.  

1.) Fight - Clicking fight will start the game. The dice will be "rolled", which is, in fact, the Math.random() function generating random numbers from 1 to 6 for each die. The random number matches the gif's ID to render the appropriate image of the die. If players roll a 7 or lower, the aliens will attack and lose action points while the players lose health. If players roll an 8 or higher, the players will attack and lose action points while the aliens lose health. Rolling a 2 equates to a miss, and the players will lose both health and action points. Rolling a 12 means the aliens have missed, losing health and action points while players gain some health. 

2.) Get Help - Clicking 'get help' will allow the players to do significant damage to the aliens but will expend most of the players' action points. 

3.) Run away - The 'run away' button will show players an alternative scenario if they choose to give up the fight. The text will prompt them to keep fighting, but players will lose action points. 

4.) Use stamina pack - This button will replenish the users' action points when the progress bar is too low or close to zero. I made sure players could only use stamina packs if their actions points were below a certain number.   


5.) Use health pack - This button will replenish the users' health when it's too low or close to zero. I also put a limit on the number of health packs a player can use depending on their health. 


6.) Replay - This button simply refreshes the browser after the player has won or lost the game. 


## Challenges

### Challenge 1: Remaking the Game in React

I first created Alien Battlecraft with only HTML, CSS, and vanilla JavaScript. Upon learning React, I decided to refactor the game using what I had learned about classes, states, constructors, components, props, and handling click events. It was a welcomed challenge. 

First, I knew that I would have to change the state of several elements on the page to make the game dynamic: the main image, the text, the progress bars, along with their numerical values. This would require a parent class, which I called Game, to set the initial state of the attributes to be changed below in the components within Game's render function. 

Second, these changes would occur due to five important click events. After I completed the binding for each click event, all I had to do was write the algorithms in each function responsible for a certain event such as fight, get help, or a use stamina pack. These functions or handled events would then be called in the onClick attribute of their corresponding buttons.  

The final step dealt with creating the individual components and having these components communicate with Game through props to render the changing states. I created a component for the main image, the game's message to the players, progress bars, buttons, and the dice. 

Game's render function returned each component, which had props assigned the values of the changed state. For example, health = {this.state.userHealth}. Only the buttons component was a class while the others were simple functions rendering the changing states. Therefore, the props for the buttons component were onClick = {this.props.fight} and so on for each event, while the others, such as the progress component, had value = {props.health}.  

### Challenge 2: Making Sure the Conditional Statements Cover All of the Game's Scenarios

Creating a game's algorithms is probably the most fun part of its development. Sometimes it's easy to overlook all the different scenarios that could possibly happen in a game, which is why I had to be both gamer and developer to make sure Alien BattleCraft played in a logical fashion. I'll only focus on the fight event since it required the most conditions. 

The fight function is basically a chain of if-else statements. First, I started by creating an algorithm for "rolling the dice"; e.g., if you roll a 7 or lower, subtract a certain value from the max value of the player's health and alien's action points. 

However, this didn't work well because scenarios would pop up where the aliens' or players' health were zero and the game would still continue. So, I rewrote my algorithm to set the states of the players and the aliens first. For example, if either the aliens' or players' health or actions points were less than or equal to zero, dismantle the fight option and show the appropriate image and text for such events. Once the state of the aliens and players were set, I completed the conditional statements according to the rules I created for the game.   
