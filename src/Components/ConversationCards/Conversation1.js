import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
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
                    <Container className = "position-relative">
                        <Card  className = "scene-card position-absolute" inverse>
                            <CardImg className = "img-fluid" top width="100%" alt="Card image cap" />
                            <CardImgOverlay className = "scene-bottom">
                                <div className = "float-right place">{storyscene.place}</div> 
                                <Typing speed = {100} loop = {true}>    
                                    <CardText className = "scene-text"> 
                                        {storyscene.text}
                                    </CardText> 
                                </Typing> 
                            </CardImgOverlay>
                        </Card> 
                        <Row style = {ContinueStyle} className = "no-gutters">
                            <Col md="5"  className="align-middle">
                                <Link to = "/convo"><Button className = "continue" color="dark" size="lg" block>CONTINUE</Button></Link>
                            </Col>
                        </Row>
                        <Row className = "scene-button float-right">
                            <Button  className = "btn btn-dark float-left">BACK</Button>
                            <Button  className = "btn btn-dark float-right">NEXT</Button>
                        </Row> 
                    </Container> 
                </div>
            </div>  
        )
    }
}



export default Conversation1; 