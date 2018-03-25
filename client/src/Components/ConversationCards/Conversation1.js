import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardGroup, CardHeader, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';


class Conversation1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideCard: 'none',
            transition:'transition',
            opacity: 0, 
            transition2:'transition2',
            opacity2: 0,
            transition3:'transition3',
            opacity3: 0,
            transition4:'transition4',
            opacity4: 0,
            transition5:'transition5',
            opacity5: 0,
            showContainer: 'none',
            showLoader: 'block'
        }
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
                transition: 'all 1s',
                opacity: 1
            })
        }, 4000)

        setTimeout(() => {
            this.setState({
                hideCard: 'flex'
            })
        }, 7000)

        setTimeout(() =>{
            this.setState({
                transition2: 'all 1s',
                opacity2: 1
            })
        }, 8000)

        setTimeout(() =>{
            this.setState({
                transition3: 'all 1s',
                opacity3: 1
            })
        }, 9000)


        setTimeout(() =>{
            this.setState({
                transition4: 'all 1s',
                opacity4: 1
            })
        }, 10000)

        setTimeout(() =>{
            this.setState({
                transition5: 'width 1s',
                opacity5: 1
            })
        }, 11000)
    }

    renderChar(){
        const { storyconvo } = this.props; 

        const TransitionEffects = {
            transition: this.state.transition ,
            opacity: this.state.opacity 
        }

        return storyconvo.map((storyconvo) => {
            if(storyconvo.id == 1){
                return(
                    <CardGroup style = {TransitionEffects}  key = {storyconvo.id}>
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
                                <CardText className = "convo-text p-3">
                                    {storyconvo.text}
                                </CardText>
                            </CardBlock>
                        </Card>
                    </CardGroup>
                )
            }
        });
    }

    renderMainChar(){
        const { storyconvo } = this.props; 

        const TransitionEffects2 = {
            display: this.state.hideCard,
            transition: this.state.transition2 ,
            opacity: this.state.opacity2 
        }

        const TransitionEffects3 = {
            transition: this.state.transition3 ,
            opacity: this.state.opacity3
        }

        const TransitionEffects4 = {
            transition: this.state.transition4 ,
            opacity: this.state.opacity4 
        }


        const TransitionEffects5 = {
            transition: this.state.transition5 ,
            opacity: this.state.opacity5 
        }


        return storyconvo.map((storyconvo) => {
            if(storyconvo.id == 2){
                return(
                    <CardGroup style = {TransitionEffects2} key = {storyconvo.id}>
                        <Card className = "side-text">
                            <CardHeader className = "convo-text header header-2">{storyconvo.name}</CardHeader>
                            <CardBlock className = "convo-side">
                                <CardText className = "convo-text p-3 d-flex flex-column m-auto">
                                    <Link to = "/map"><Button><div style = {TransitionEffects3} className = "convo-text">{storyconvo.choice1}</div></Button></Link>
                                    <Link to = "/map"><Button><div style = {TransitionEffects4} className = "convo-text">{storyconvo.choice2}</div></Button></Link> 
                                    <Link to = "/map"><Button><div style = {TransitionEffects5} className = "convo-text">{storyconvo.choice3}</div></Button></Link>
                                </CardText>
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

        const showContainer = {
            display: this.state.showContainer
        }

        const showLoader = {
            display: this.state.showLoader 
        }

        return(
            <div>
                <div className = "convo-wrapper no-gutters d-flex align-items-center">
                    <div style = {showLoader} className="preload">
                        <div className="preload-status">
                            <div className="preload-status-bar"></div>
                            <div className="preload-status-info">LOADING</div>
                        </div>
                    </div>

                    <Container style = {showContainer}>
                        <Row>
                            <Col md = "12">
                                {this.renderChar()}
                            </Col>
                        </Row>

                        <Row>
                            <Col md = "12">
                              {this.renderMainChar()}
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

export default connect(mapStateToProps)(Conversation1); 

//use an onCLick event to select the right result to display
//onClick = {()=> this.props.selectedConvoId(storyconvo))}   << this comes from the actions
