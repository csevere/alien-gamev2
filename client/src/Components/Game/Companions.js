import React from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import { 
    Button,  
    Card, 
    CardHeader, 
    CardImg,
    CardFooter, 
    Container, 
    Col,
    Row
} from 'reactstrap';


const Companions = (props) =>{

    const state = props.active; 
    const hideButtons = {
        display: 'none'
    }

    return(
        <div className = "companions d-flex flex-row">
            <Card className = "companions-card mr-4">
                <CardHeader className = "text-center">Meliz</CardHeader>
                <CardImg src = "assets/players/char1.jpg" />
                <CardFooter>
                    <Button color="danger"  className = "start-btn" style = {!state ? hideButtons : null }>Help</Button>
                </CardFooter>
            </Card>

            <Card className = "companions-card mr-4">
                <CardHeader className = "text-center">Ryker</CardHeader>
                <CardImg src = "assets/players/char2.png"/> 
                <CardFooter>
                    <Button color="danger"  className = "start-btn" style = {!state ? hideButtons : null }>Help</Button>
                </CardFooter>
            </Card>

            <Card className = "companions-card mr-4">
                <CardHeader className = "text-center">Faust</CardHeader>
                <CardImg src = "assets/players/char3.png" />
                <CardFooter>
                    <Button color="danger"  className = "start-btn" style = {!state ? hideButtons : null }>Help</Button>
                </CardFooter>
            </Card>
        </div>
    )

              
}

export default Companions; 

