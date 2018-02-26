import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';


import { Card,  
    CardHeader, 
    CardImg, 
    CardFooter 
} from 'reactstrap';


class PlayerCard extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
            <Card>
                <CardHeader className = "text-center enemy">Zackaria</CardHeader>
                <CardImg width="100%" src = "assets/players/player1.jpg" />
                <CardFooter className="text-center d-flex flex-column">
                    <div>Attack Power: 50</div>
                    <div>Defense Power: 25</div>
                </CardFooter>
            </Card>
        )
    }
              
}

export default PlayerCard; 