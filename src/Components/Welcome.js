import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {Link} from 'react-router-dom'; 

const Welcome = () => (
    <div>
        <div className = "main-wrapper">
            <Container>
                <Row className = "no-gutters">
                    <Col md="5"  className="align-middle mx-auto my-5">
                        <Link to = "/scene"><Button color="dark" size="lg" block>ENTER</Button></Link>
                    </Col>
                </Row>
            </Container> 
        </div> 
    </div>
   
)

export default Welcome; 
    
    