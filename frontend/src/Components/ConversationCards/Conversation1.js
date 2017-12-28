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

    renderChar1(){
        const { storyconvo } = this.props; 

        return storyconvo.map((storyconvo) => {
            if(storyconvo.id == 0){
                return(
                    <CardGroup>
                        <Col md = "2">
                            <Card className = "speaker1">
                                <CardImg className = "img-fluid" top width="100%" src={storyconvo.image} alt="Card image cap" />
                            </Card>
                        </Col>
                        <Card className ="side-text">
                            <CardHeader className = "text-dark convo-text header header-1">
                                {storyconvo.name}
                            </CardHeader>
                            <CardBlock className = "convo-side">
                                <Typing speed = {100}> 
                                    <CardText className = "convo-text p-3">
                                        {storyconvo.text}
                                    </CardText>
                                </Typing> 
                            </CardBlock>
                        </Card>
                    </CardGroup>
                )
            }
        });
    }

    renderChar2(){
        const { storyconvo } = this.props; 

        return storyconvo.map((storyconvo) => {
            if(storyconvo.id == 1){
                return(
                    <CardGroup>
                        <Card className = "side-text">
                            <CardHeader className = "convo-text header header-2">{storyconvo.name}</CardHeader>
                            <CardBlock className = "convo-side">
                                <Typing speed = {100}> 
                                    <CardText className = "convo-text p-3 d-flex flex-column">
                                        <Link to = "/map"><Button><div className = "convo-text">{storyconvo.choice1}</div></Button></Link>
                                        <Link to = "/map"><Button><div className = "convo-text">{storyconvo.choice2}</div></Button></Link> 
                                        <Link to = "/map"><Button><div className = "convo-text">3. This is such a dumb idea. You're an idiot, you know that?</div></Button></Link> 
                                    </CardText>
                                </Typing> 
                            </CardBlock>
                        </Card>
                        <Col md = "2">
                            <Card className = "speaker2">
                                <CardImg className = "img-fluid" top width="100%" src={storyconvo.image} alt="Card image cap" />
                            </Card>
                        </Col>
                    </CardGroup>
                )
            }
        });
       
    }

    render(){

        return(
            <div>
                <div className = "convo-wrapper no-gutters">
                    <Container>
                        <Row>
                            <Col md = "12">
                                {this.renderChar1()}
                            </Col>
                        </Row>

                        <Row>
                            <Col md = "12">
                              {this.renderChar2()}
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

const mapStateToProps = (state)=>{
    return{
        storyconvo: state.storyConvoLibrary,
        selectedconvo: state.selectedConvoId
    }
}

export default connect(mapStateToProps, actions)(Conversation1); 