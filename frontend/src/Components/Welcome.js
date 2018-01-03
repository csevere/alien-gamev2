import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {Link} from 'react-router-dom'; 
import LogNav from './Login_Register/LogNav'

const Welcome = () => (
    <div>
        <div className = "main-wrapper">
            <Col md = "9">
                <LogNav/> 
            </Col>
            <div className = "p-2 audio">
                <embed 
                    src="assets/music/Speck.mp3" 
                    preload = "auto" 
                    width="10"
                    height="10"
                    loop="true"
                controls/>	
            </div>
        </div> 
    </div>
   
)

export default Welcome; 
    
    