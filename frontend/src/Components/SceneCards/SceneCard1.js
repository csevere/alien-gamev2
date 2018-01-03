import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import ReactRevealText from 'react-reveal-text'; 

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
                transition2: 'transition2',
                opacity: 1, 
                opacity2: 0
            }
    }

    componentDidMount() {

        setTimeout(() =>{
            this.setState({
                transition2: 'all 1s',
                opacity2: 1
            })
        }, 2000)
    }

    componentWillReceiveProps(nextProps) {
        const { count } = this.props.selected; 
        const { storyscene } = this.props; 
        console.log(count)

        if(count < 5){
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


        if (count >= 5){
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

        const TransitionEffects2 = {
            transition2: this.state.transition2 ,
            opacity2: this.state.opacity2
        }

        const CardStyle = {
            display: this.state.showCard
        }

        return storyscene.map((storyscene) => {
            if(count <= storyscene.id && storyscene.id <= 6){
                return(
                    <Row style = {CardStyle} key = {storyscene.id}>
                        <Card style = {storyscene.id == count ? TransitionEffects : null} className = "scene-card position-absolute" inverse>
                            <CardImg className = "img-fluid" top width="100%" src={storyscene.image} alt="Card image cap" />
                            <CardImgOverlay className = "scene-bottom">
                                <div className = "float-right place">{storyscene.place}</div> 
                                <div style = {TransitionEffects2}>
                                    <CardText className = "scene-text"> 
                                        {storyscene.text}
                                    </CardText> 
                                </div>
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

//create a reread button that refreshes the page and lets readers read from beginning 

