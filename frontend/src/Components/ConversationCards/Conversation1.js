import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardGroup, CardHeader, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 

class Conversation1 extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div>
                <div className = "convo-wrapper no-gutters">
                    <Container>
                        <Row>
                            <Col md = "12">
                                <CardGroup>
                                    <Col md = "2">
                                        <Card className = "speaker1">
                                            <CardImg className = "img-fluid" top width="100%" src="assets/images/convo_character_1_ex.jpg" alt="Card image cap" />
                                        </Card>
                                    </Col>
                                    <Card className ="side-text">
                                        <CardHeader className = "text-dark convo-text header header-1">Meliz</CardHeader>
                                        <CardBlock className = "convo-side">
                                            <Typing speed = {100}> 
                                                <CardText className = "convo-text p-3">
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                </CardText>
                                            </Typing> 
                                        </CardBlock>
                                    </Card>
                                </CardGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md = "12">
                                <CardGroup>
                                    <Card className = "side-text">
                                        <CardHeader className = "convo-text header header-2">Zackaria</CardHeader>
                                        <CardBlock className = "convo-side">
                                            <Typing speed = {100}> 
                                                <CardText className = "convo-text p-3 d-flex flex-column">
                                                    <Button><div className = "convo-text">1. "We should check out the north wing."</div></Button>
                                                    <Button><div className = "convo-text">2. "... I don't really care what we do."</div></Button> 
                                                    <Button><div className = "convo-text">3. "This is such a dumb idea. You're an idiot, you know that?"</div></Button> 
                                                </CardText>
                                            </Typing> 
                                        </CardBlock>
                                    </Card>
                                    <Col md = "2">
                                        <Card className = "speaker2">
                                            <CardImg className = "img-fluid" top width="100%" src="assets/images/convo_character_2_ex.jpg" alt="Card image cap" />
                                        </Card>
                                    </Col>
                                </CardGroup>
                            </Col>
                        </Row>
                    </Container> 
                </div>
                <div className = "p-2 audio">
                    <embed 
                        src="assets/music/poddreams.mp3" 
                        preload = "auto" 
                        width="10"
                        height="10"
                        loop="true"
                    controls/>	
                </div>
            </div>  
        )
    }
}

export default Conversation1; 