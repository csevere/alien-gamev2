import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import SceneCard1 from './SceneCards/SceneCard1';
import { Button, Col, Row } from 'reactstrap';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

class SceneBoard extends Component{
    constructor(props){
		super(props);
		this.state = {
			loggedIn:'initial',
			logMessage: 'none' 
		}
    }
    
    componentDidMount() {
		//logged in/out
		if(!localToken && !localName){
			this.setState({
				loggedIn: 'hidden',
				logMessage: 'block'
			})
		}
    }
    
    render(){ 

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
                <div style = {hideScreen}>
                    <SceneCard1/> 
                </div>
            </div>  
        )
    }
}

export default SceneBoard; 

