import React, { Component } from 'react';
import Game from './Game'; 
import { Container, Row, Col } from 'reactstrap';

class Play extends Component {
    
      render() {
        return (
          <Container className="Alien-Game">
           
          <audio controls>
                    <source src="Images/illusions.mp3" type="audio/mpeg"/>
           </audio>
    
            <Row>
                <div className = "header">
                  <h1>ALIEN BATTLECRAFT</h1>
                </div>
            </Row>
    
            <div className="img-center">
              <img src = "Images/spaceship_interior.jpg" className = "Alien-bg" id = "bg" alt = ""/>
            </div>
    
            <div className = "row">
              <div className = "text-center buttons">
                  <Game/>
              </div> 
            </div> 
    
            <div className = "row text-center">
              <p> {"How to play: Fight button will roll the dice. Get 7 or lower, aliens attack you, but they lose AP. 8 or higher, you attack the aliens, but you lose AP. 2, you miss and lose health and AP. 12, aliens miss and lose health and AP. Watch your AP points when you call for help. Replenish health and AP when needed. Running away takes away AP. Have fun! MaxHealth: 500; MaxAP: 100; AlienHealth: 1000; AlienAP: 50. "}</p> 
              <a target = "_blank" href = "https://github.com/csevere/alien-game">See the code on Github</a>
              <p>{"Copyright © 2017 Made by Carla Severe @ Digital Crafts"}</p>
            </div>
          </Container>
        );
      }
    }
    
export default Play;
    