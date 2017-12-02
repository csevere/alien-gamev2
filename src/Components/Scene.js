import React, {Component} from 'react';
import { Container, Row, Col, Button, Card, CardBlock, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import {Link} from 'react-router-dom'; 

class Scene extends Component{

    render(){
        return(
            <div>
                <div className = "scene-wrapper no-gutters">
                    <Container>
                        <Row>
                            <Card className = "scene-card" inverse>
                                <CardImg className = "img-fluid" top width="100%" src="Images/spaceship_interior.jpg" alt="Card image cap" />
                                <CardImgOverlay className = "scene-bottom">
                                    <CardText className = "scene-text">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    </CardText>
                                </CardImgOverlay>
                            </Card> 
                        </Row> 
                        <Row className = "scene-button float-right">
                            <Button className = "btn btn-dark">NEXT</Button>
                        </Row>  
                    </Container>
                </div>
            </div>  
        )
    }
}

export default Scene; 

//allow only 65 words per scene text 
