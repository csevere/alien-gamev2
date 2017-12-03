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
    constructor(props){
        super(props);
            this.state = {showBackButton:'hidden'}
    }

    componentWillReceiveProps(nextProps) {
        const { count } = this.props.selected; 
        console.log(this.state.showBackButton)
        console.log(count); 
        if(count >= 0){
            this.setState({ showBackButton: 'visible'});
        }else if(count === null){
            this.setState({ showBackButton: 'hidden'}); 
        }
      }
    
    renderScene(){
        const { count } = this.props.selected; 
        const{ storyscene } = this.props;  

        return storyscene.map((storyscene) => {
            if(count <= storyscene.id && storyscene.id <= 4 ){
                return(
                    <Fade key = {storyscene.id}>
                        <Row>
                            <Card className = "scene-card position-absolute" inverse>
                                <CardImg className = "img-fluid" top width="100%" src={storyscene.image} alt="Card image cap" />
                                <CardImgOverlay className = "scene-bottom">
                                    <CardText className = "scene-text">
                                        {storyscene.text}
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
        
        var BackStyle = {
            visibility: this.state.showBackButton
        }
        
        return(
            <div>
                <div className = "scene-wrapper no-gutters">
                    <Container className = "position-relative">
                        <TransitionGroup>
                            {this.renderScene()}
                        </TransitionGroup> 
                        <Row className = "scene-button float-right">
                            <Button style = {BackStyle} className = "btn btn-dark float-left" onClick ={ ()=> this.props.backCount()}>BACK</Button>
                            <Button className = "btn btn-dark float-right" onClick ={ ()=> this.props.nextCount()}>NEXT</Button>
                        </Row> 
                    </Container> 
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        storyscene: state.storySceneLibrary,
        selected: state.selectedStoryId
    }
}

export default connect(mapStateToProps, actions)(SceneCard1); 

