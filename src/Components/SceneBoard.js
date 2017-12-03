import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import SceneCard1 from './SceneCards/SceneCard1';

class SceneBoard extends Component{

    render(){
        return(
            <div>
                <SceneCard1/> 
            </div>  
        )
    }
}

export default SceneBoard; 

//allow only 65 words per scene text 
