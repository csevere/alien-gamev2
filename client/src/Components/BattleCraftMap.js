import React, {Component} from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'; 

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

class BattleCraftMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            showOrbsA: 'none',
            showOrbsB: 'none',
            showOrbsC: 'none',
            completedOrb: '1',
            showLoader: 'block',
            showContainer: 'none',
            transition:'transition',
            opacity: 0,
            loggedIn:'initial',
			logMessage: 'none' 
        } 
    
    }

    componentDidMount() {

        if(!localToken && !localName){
			this.setState({
				loggedIn: 'hidden',
				logMessage: 'block'
			})
		}

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
    }

    render(){
        const showContainer = {
            display: this.state.showContainer,
            transition: this.state.transition,
            opacity: this.state.opacity 
        }

        const showLoader = {
            display: this.state.showLoader 
        }

        const showRegMsg = {
			display: this.state.logMessage
		}

		const hideScreen = {
			visibility: this.state.loggedIn
		}


        return(
            <div>
                <Row>
					<Col md= '6' className = "logged-out-col">
						<div className = "logged-out" style = {showRegMsg}>
							<div className = "logged-out-text">Unauthorized player. Please register or log in to play. Thank you.</div>
							<Link to = "/"><Button className = "start-btn">Register/Login</Button></Link>
						</div>
					</Col>
				</Row> 
                <div className = "map-wrapper d-flex align-items-center" style = {hideScreen}>
                    <div style = {showLoader} className="preload">
                        <div className="preload-status">
                            <div className="preload-status-bar"></div>
                            <div className="preload-status-info">LOADING</div>
                        </div>
                    </div>
                    <Container style = {showContainer} className  ="align-middle">
                        <div className = "button hvr-bob">
                            <div className = "line-container">
                                <span className = "text text-center">BATTLECRAFT <br/> MAP</span>
                                <div className="line line--top-left line--thick thick-line--short"></div>
                                <div className="line line--top-right line--thick thick-line--short"></div>
                                <div className="line line--bottom-left line--thick thick-line--long"></div>
                                <div className="line line--bottom-right line--thick thick-line--long"></div>
                                <div className="line line--top line--thin"></div>
                                <div className="line line--bottom line--thin"></div>
                            </div>
                        </div>

                        <div className = "container grid text-white">
                            <Row className ="row d-flex flex-row row1">
                                <div className = "p-1 col-md-1 cell">A1</div>
                                <div className = "p-1 col-md-1 cell">B1</div>
                                <div className = "p-1 col-md-1 cell">C1</div>
                                <div className = "p-1 col-md-1 cell">D1</div>
                                <div className = "p-1 col-md-1 cell">E1</div>
                                <div className = "p-1 col-md-1 cell">F1</div>
                                <div className = "p-1 col-md-1 cell">G1</div>
                                <div className = "p-1 col-md-1 cell">H1</div>
                                <div className = "p-1 col-md-1 cell">I1</div>
                                <div className = "p-1 col-md-1 cell">J1</div>
                                <div className = "p-1 col-md-1 cell">K1</div>
                                <div className = "p-1 col-md-1 cell">L1</div>
                            </Row>

                            <Row className ="row d-flex flex-row row2">
                                <div className ="p-1 col-md-1 cell">A2</div>
                                <div className ="p-1 col-md-1 cell">B2</div>
                                <div className ="p-1 col-md-1 cell">C2</div>
                                <div className ="p-1 col-md-1 cell">D2</div>
                                <div className ="p-1 col-md-1 cell">E2</div>
                                <div className ="p-1 col-md-1 cell">F2</div>
                                <div className ="p-1 col-md-1 cell">G2</div>
                                <div className ="p-1 col-md-1 cell">H2</div>
                                <div className ="p-1 col-md-1 cell">I2</div>
                                <div className ="p-1 col-md-1 cell">J2</div>
                                <div className ="p-1 col-md-1 cell">K2</div>
                                <div className ="p-1 col-md-1 cell">L2</div>
                            </Row>

                            
                            <Row className ="row d-flex flex-row row3">
                                <div className ="p-1 col-md-1 cell">A3</div>
                                <div className ="p-1 col-md-1 cell">B3</div>
                                <div className ="p-1 col-md-1 cell">C3</div>
                                <div className ="p-1 col-md-1 cell">D3</div>
                                <div className ="p-1 col-md-1 cell">E3</div>
                                <div className ="p-1 col-md-1 cell">F3</div>
                                <div className ="p-1 col-md-1 cell">G3</div>
                                <div className ="p-1 col-md-1 cell">H3</div>
                                <div className ="p-1 col-md-1 cell">I3</div>
                                <div className ="p-1 col-md-1 cell">J3</div>
                                <div className ="p-1 col-md-1 cell">K3</div>
                                <div className ="p-1 col-md-1 cell">L3</div>
                            </Row>

                            <Row className ="row d-flex flex-row row4">
                                <div className ="p-1 col-md-1 cell">A4</div>
                                <div className ="p-1 col-md-1 cell">B4</div>
                                <div className ="p-1 col-md-1 cell">C4</div>
                                <div className ="p-1 col-md-1 cell">D4</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>E4</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">F4</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>F5</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">H4</div>
                                <div className ="p-1 col-md-1 cell">I4</div>
                                <div className ="p-1 col-md-1 cell">J4</div>
                                <div className ="p-1 col-md-1 cell">K4</div>
                                <div className ="p-1 col-md-1 cell">L4</div>
                            </Row>

                            <Row className ="row d-flex flex-row row5">
                                <div className ="p-1 col-md-1 cell">A5</div>
                                <div className ="p-1 col-md-1 cell">B5</div>
                                <div className ="p-1 col-md-1 cell">C5</div>
                                <div className ="p-1 col-md-1 cell">D5</div>
                                <div className ="p-1 col-md-1 cell">E5</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>F5</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">G5</div>
                                <div className ="p-1 col-md-1 cell">H5</div>
                                <div className ="p-1 col-md-1 cell">I5</div>
                                <div className ="p-1 col-md-1 cell">J5</div>
                                <div className ="p-1 col-md-1 cell">K5</div>
                                <div className ="p-1 col-md-1 cell">L5</div>
                            </Row>

                            <Row className ="row d-flex flex-row row6">
                                <div className ="p-1 col-md-1 cell">A6</div>
                                <div className ="p-1 col-md-1 cell">B6</div>
                                <div className ="p-1 col-md-1 cell">C6</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>D6</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>E6</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">F6</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>G6</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">H6</div>
                                <div className ="p-1 col-md-1 cell">I6</div>
                                <div className ="p-1 col-md-1 cell">J6</div>
                                <div className ="p-1 col-md-1 cell">K6</div>
                                <div className ="p-1 col-md-1 cell">L6</div>
                            </Row>


                            <Row className ="row d-flex flex-row row7">
                                <div className ="p-1 col-md-1 cell">A7</div>
                                <div className ="p-1 col-md-1 cell">B7</div>
                                <div className ="p-1 col-md-1 cell">C7</div>
                                <div className ="p-1 col-md-1 cell">D7</div>
                                <div className ="p-1 col-md-1 cell">E7</div>
                                <div className ="p-1 col-md-1 cell">
                                
                                     <div>F7</div>

                                    <Link to = "/game">
                                        <div className = "orbs"></div>
                                        <div className = "orb orb-f7"></div>
                                    </Link>
                                      
                                </div>
                                <div className ="p-1 col-md-1 cell">G7</div>
                                <div className ="p-1 col-md-1 cell">
                                    <div>H7</div>
                                    <div className = "orbs"></div>
                                    <div className = "orb orb-g6"></div>
                                </div>
                                <div className ="p-1 col-md-1 cell">I7</div>
                                <div className ="p-1 col-md-1 cell">J7</div>
                                <div className ="p-1 col-md-1 cell">K7</div>
                                <div className ="p-1 col-md-1 cell">L7</div>
                            </Row>
                        </div>
                    </Container>
                    <div className = "p-2 audio">
                        <embed 
                            src="assets/music/tendersteps.mp3" 
                            preload = "auto" 
                            width="10"
                            height="10"
                            loop="true"
                        controls/>	
                    </div>
                </div>    
            </div>  
        )
    }
}

export default BattleCraftMap; 
