import React, {Component} from 'react';
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


class Companions extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    
    render(){
        return(
            <div className = "companions d-flex flex-row">
                <Card className = "companions-card m-2">
                    <CardHeader className = "text-center">Meliz</CardHeader>
                    <CardImg width="85%" src = "assets/images/players/ally1.jpg" />
                    <CardFooter>
                        <Button color="danger"  className = "start-btn">Help</Button>
                    </CardFooter>
                </Card>
                <Card className = "companions-card m-2">
                    <CardHeader className = "text-center">Ryker</CardHeader>
                    <CardImg width="85%" src = "assets/images/players/ally2.png" />
                    <CardFooter>
                        <Button color="danger"  className = "start-btn">Help</Button>
                    </CardFooter>
                </Card>
                <Card className = "companions-card m-2">
                    <CardHeader className = "text-center">Faust</CardHeader>
                    <CardImg width="85%" src = "assets/images/players/ally3.png" />
                    <CardFooter>
                     <Button color="danger"  className = "start-btn">Help</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
              
}

export default Companions; 

