import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';

import { Card,  
    CardHeader, 
    CardImg, 
    CardFooter 
} from 'reactstrap';


class EnemyCard extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
            <Card>
                <CardHeader className = "text-center enemy">Enemy</CardHeader>
                <CardImg width="100%" src = "assets/images/aliens/alien1.png" />
                <CardFooter className="text-center d-flex flex-column">
                    <div>LEVEL : 2 </div>
                    <div>EXP: 150 </div>
                </CardFooter>
            </Card>
        )
    }
              
}

export default EnemyCard; 