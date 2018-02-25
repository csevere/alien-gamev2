import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 
import { Container, 
    Row, 
    Col,
    Button, 
    Card, 
    CardBlock, 
    CardText, 
    CardImg, 
    CardImgOverlay 
} from 'reactstrap';


class Game extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
            <div>
                <div className = "player-deck d-flex flex-row">
                    <Card className = "companions-card m-2">
                        <CardHeader className = "text-center"></CardHeader>
                        <CardImg width="85%" src = "assets/images/players/ally1.jpg" />
                        <CardFooter>
                            <Button color="danger"  className = "start-btn">Help</Button>
                        </CardFooter>
                    </Card>
                    <Card className = "companions-card m-2">
                        <CardHeader className = "text-center">Ryker</CardHeader>
                        <CardImg width="85%" src = "assets/images/players/ally2.png" />
                        <CardFooter>
                            <Button color="danger"  className = "start-btn">Help</Button>
                        </CardFooter>
                    </Card>
                    <Card className = "companions-card m-2">
                        <CardHeader className = "text-center">Faust</CardHeader>
                        <CardImg width="85%" src = "assets/images/players/ally3.png" />
                        <CardFooter>
                        <Button color="danger"  className = "start-btn">Help</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
              
}

export default EnemyCard; 