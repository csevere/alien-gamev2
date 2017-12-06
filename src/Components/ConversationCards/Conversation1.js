import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 

class Conversation1 extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div>
                <h1 className = "text-dark">hello</h1>
            </div>  
        )
    }
}



export default Conversation1; 