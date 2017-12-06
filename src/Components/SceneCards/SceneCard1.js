import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 

class SceneCard1 extends Component{
    constructor(props){
        super(props);
            this.state = {
                showBackButton:'hidden',
                scale: 'scale(1)',
                transition:'transition',
                opacity: 1, 
                typing: true 
            }
    }

    componentWillReceiveProps(nextProps) {
        const { count } = this.props.selected; 
        const { storyscene } = this.props; 
    
        if(count >= 0){
            setTimeout(() => {
                this.setState({
                    showBackButton: 'visible'
                })
              }, 500)

            this.setState({
                scale: 'scale(1.1)',
                transition: 'all 1s',
                opacity: 0
            }) 

        }

    }

       
    renderScene(){
        const { count } = this.props.selected; 
        const { storyscene } = this.props; 

        var TransitionEffects = {
            transform: this.state.scale,
            transition: this.state.transition ,
            opacity: this.state.opacity 
        }
         

        return storyscene.map((storyscene) => {
            if(count <= storyscene.id && storyscene.id <= 4){
                return(
                    <Row key = {storyscene.id}>
                        <Card style = {storyscene.id == count ? TransitionEffects : null} className = "scene-card position-absolute" inverse>
                            <CardImg className = "img-fluid" top width="100%" src={storyscene.image} alt="Card image cap" />
                            <CardImgOverlay className = "scene-bottom">
                                <div className = "float-right place">{storyscene.place}</div> 
                                <Typing speed = {100} loop = {true} delay={500}>    
                                    <CardText className = "scene-text"> 
                                        {storyscene.text}
                                    </CardText> 
                                </Typing> 
                            </CardImgOverlay>
                        </Card> 
                    </Row>
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
                        {this.renderScene()}
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

