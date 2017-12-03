import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as actions from '../../Actions/story_actions';


const Fade = ({ children, ...props }) => (
    <CSSTransition
      {...props}
      timeout={1000}
      classNames="fade"
    >
      {children}
    </CSSTransition>
);

class SceneCard1 extends Component{
    
    renderScene(){
        return this.props.storytext.map((storytext) => {
            if(this.props.selected.count <= storytext.id && storytext.id <= 4 ){
                return(
                    <Fade key = {storytext.id}>
                        <Row>
                            <Card className = "scene-card position-absolute" inverse>
                                <CardImg className = "img-fluid" top width="100%" src={storytext.image} alt="Card image cap" />
                                <CardImgOverlay className = "scene-bottom">
                                    <CardText className = "scene-text">
                                        {storytext.text}
                                    </CardText>
                                </CardImgOverlay>
                            </Card> 
                        </Row> 
                    </Fade>
                )
            }
        }).reverse();
    }

    render(){
        console.log(this.props.selected.count)
        return(
            <div>
                <div className = "scene-wrapper no-gutters">
                    <Container className = "position-relative">
                        <TransitionGroup>
                            {this.renderScene()}
                        </TransitionGroup> 
                        <Row className = "scene-button float-right">
                            <Button className = "btn btn-dark" onClick ={ ()=> this.props.nextCount()}>NEXT</Button>
                        </Row>  
                    </Container> 
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        storytext: state.storyTextLibrary,
        selected: state.selectedStoryId
    }
}

export default connect(mapStateToProps, actions)(SceneCard1); 

