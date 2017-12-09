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
                showBackButton:'none',
                showNextButton: 'block',
                showContinueButton: 'none',
                showCard: 'block',
                scale: 'scale(1)',
                transition:'transition',
                opacity: 1, 
                typing: true 
            }
    }

    componentWillReceiveProps(nextProps) {
        const { count } = this.props.selected; 
        const { storyscene } = this.props; 
        console.log(count)

        if(count < 3){
            setTimeout(() => {
                this.setState({
                    showBackButton: 'block'
                })
              }, 500)

            this.setState({
                scale: 'scale(1.1)',
                transition: 'all 1s',
                opacity: 0
            }) 

        }


        if (count >= 3){
            this.setState({
                showBackButton:'none', 
                showNextButton: 'none',
                showContinueButton: 'block',
                showCard: 'none'
            })
        }
    }

       
    renderScene(){
        const { count } = this.props.selected; 
        const { storyscene } = this.props; 

        const TransitionEffects = {
            transform: this.state.scale,
            transition: this.state.transition ,
            opacity: this.state.opacity 
        }

        const CardStyle = {
            display: this.state.showCard
        }

        return storyscene.map((storyscene) => {
            if(count <= storyscene.id && storyscene.id <= 4){
                return(
                    <Row style = {CardStyle} key = {storyscene.id}>
                        <Card style = {storyscene.id == count ? TransitionEffects : null} className = "scene-card position-absolute" inverse>
                            <CardImg className = "img-fluid" top width="100%" src={storyscene.image} alt="Card image cap" />
                            <CardImgOverlay className = "scene-bottom">
                                <div className = "float-right place">{storyscene.place}</div> 
                                    <CardText className = "scene-text"> 
                                        {storyscene.text}
                                    </CardText> 
                            </CardImgOverlay>
                        </Card> 
                    </Row>
                )
            };

        }).reverse();
    }

    render(){
        
        const BackStyle = {
            display: this.state.showBackButton
        }

        const NextStyle = {
            display: this.state.showNextButton
        }

        const ContinueStyle ={
            display: this.state.showContinueButton
        }

        return(
            <div>
                <div className = "scene-wrapper1 no-gutters">
                    <Container className = "position-relative">
                        {this.renderScene()}
                        <Row style = {ContinueStyle} className = "no-gutters">
                            <Col md="5"  className="align-middle">
                                <Link to = "/convo"><Button className = "continue" color="dark" size="lg" block>CONTINUE</Button></Link>
                            </Col>
                        </Row>
                        <Row className = "scene-button float-right">
                            <Button style = {BackStyle} className = "btn btn-dark float-left" onClick ={ ()=> this.props.backCount()}>BACK</Button>
                            <Button style = {NextStyle} className = "btn btn-dark float-right" onClick ={ ()=> this.props.nextCount()}>NEXT</Button>
                        </Row> 
                    </Container> 
                </div>
                <div className = "p-2 audio">
                    <embed 
                        src="assets/music/betweenworlds.mp3" 
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
        storyscene: state.storySceneLibrary,
        selected: state.selectedStoryId
    }
}

export default connect(mapStateToProps, actions)(SceneCard1); 

