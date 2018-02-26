import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions';
import ReactRevealText from 'react-reveal-text'; 

class SceneCard1 extends Component{
    constructor(props){
        super(props);
            this.state = {
                showBackButton:'none',
                showNextButton: 'block',
                showContinueButton: 'none',
                showCard: 'block',
                showContainer: 'none',
                showLoader: 'block',
                scale: 'scale(1)',
                transition:'transition',
                transition2: 'transition2',
                transition3: 'transition3',
                transition4: 'transition4',
                transition5: 'transition5',
                transition6: 'transition6',
                opacity: 1, 
                opacity2: 0,
                opacity3: 0,
                opacity4: 0,
                opacity5: 0,
                opacity6: 0  
            }
        this.showAgain = this.showAgain.bind(this);
    }

    componentDidMount() {

        setTimeout(() =>{
            this.setState({
                showContainer: 'block',
                showLoader: 'none'
            })
        }, 3000)

        setTimeout(() =>{
            this.setState({
                transition2: 'all 1s',
                opacity2: 1
            })
        }, 4000)

        setTimeout(() =>{
            this.setState({
                transition3: 'all 1s',
                opacity3: 1
            })
        }, 5000)

        setTimeout(() =>{
            this.setState({
                transition4: 'all 1s',
                opacity4: 1
            })
        }, 6000)

        setTimeout(() =>{
            this.setState({
                transition5: 'width 1s',
                opacity5: 1
            })
        }, 7000)

        setTimeout(() =>{
            this.setState({
                transition6: 'width 1s',
                opacity6: 1
            })
        }, 8000)
    }

    showAgain(){
        this.setState({
            opacity3: 0,
            opacity4: 0,
            opacity5: 0,
            opacity6: 0  
        })

        setTimeout(() =>{
            this.setState({
                transition3: 'all 1s',
                opacity3: 1
            })
        }, 2000)

        setTimeout(() =>{
            this.setState({
                transition4: 'all 1s',
                opacity4: 1
            })
        }, 3000)

        setTimeout(() =>{
            this.setState({
                transition5: 'width 1s',
                opacity5: 1
            })
        }, 4000)

        setTimeout(() =>{
            this.setState({
                transition6: 'width 1s',
                opacity6: 1
            })
        }, 5000)

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

            this.showAgain()

        }


        if (count >= 5){
            this.setState({
                showBackButton:'none', 
                showNextButton: 'none',
                showContinueButton: 'block',
                showCard: 'none'
            })

            this.showAgain()
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
            transition: this.state.transition3,
            opacity: this.state.opacity3
        }
        const TransitionEffects3 = {
            transition: this.state.transition4,
            opacity: this.state.opacity4
        }

        const TransitionEffects4 = {
            transition: this.state.transition5,
            opacity: this.state.opacity5
        }


        const TransitionEffects5 = {
            transition: this.state.transition6,
            opacity: this.state.opacity6 
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
                                <div className = "float-right place text-white">{storyscene.place}</div> 
                                    <CardText className = "scene-text">
                                        <div className = "s_text" style = {TransitionEffects2}>{storyscene.text1}</div>  
                                        <div className = "s_text" style = {TransitionEffects3}>{storyscene.text2}</div>
                                        <div className = "s_text" style = {TransitionEffects4}>{storyscene.text3}</div>
                                        <div className = "s_text" style = {TransitionEffects5}>{storyscene.text4}</div>
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

        const showContainer = {
            display: this.state.showContainer,
            transition: this.state.transition2,
            opacity: this.state.opacity2 
        }

        const showLoader = {
            display: this.state.showLoader 
        }

        return(
            <div>
                <div className = "scene-wrapper1 no-gutters d-flex align-items-end">

                    <div style = {showLoader} className="preload">
                        <div className="preload-status">
                            <div className="preload-status-bar"></div>
                            <div className="preload-status-info">LOADING</div>
                        </div>
                    </div>

                    <Container style = {showContainer} className = "position-relative scene">
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

