import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import Conversation1 from './ConversationCards/Conversation1';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

class ConversationBoard extends Component{
    constructor(props){
		super(props);
		this.state = {
			loggedIn:'initial',
			logMessage: 'none', 
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
                    <Conversation1/> 
                </div>
            </div>  
        )
    }
}

export default ConversationBoard; 

//allow only 65 words per scene text 