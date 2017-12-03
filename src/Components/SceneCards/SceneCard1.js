import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';

class SceneCard1 extends Component{
    renderScene(){
        return this.props.storytext.map((storytext) => {
            if(storytext.id <= 4){
                return(
                    <Row key = {storytext.id}>
                        <Card className = "scene-card position-absolute" inverse>
                            <CardImg className = "img-fluid" top width="100%" src={storytext.image} alt="Card image cap" />
                            <CardImgOverlay className = "scene-bottom">
                                <CardText className = "scene-text">
                                    {storytext.text}
                                </CardText>
                            </CardImgOverlay>
                        </Card> 
                    </Row>    
                )
            }
        }).reverse();
    }

    render(){
        return(
            <div>
                <div className = "scene-wrapper no-gutters">
                    <Container className = "position-relative">
                        {this.renderScene()}
                        <Row className = "scene-button float-right">
                            <Button className = "btn btn-dark">NEXT</Button>
                        </Row>  
                    </Container> 
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        storytext: state.storyTextLibrary
    }
}

export default connect(mapStateToProps)(SceneCard1); 

//allow only 65 words per scene text 