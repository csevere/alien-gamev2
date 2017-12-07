import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardHeader, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
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
                        <Card>
                            <CardHeader>Ryker</CardHeader>
                                <CardBlock>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBlock>
                        </Card>


                        <Row className = "no-gutters">
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