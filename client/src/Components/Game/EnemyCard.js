import React from 'react';
import { Card, CardHeader, CardImg, CardFooter } from 'reactstrap';

const EnemyCard = (props) =>{
    const isBuzzingE = props.isBuzzingE; 
    var buzzClass = [""];
    if(isBuzzingE){
        buzzClass.push('hvr-buzz buzz')
    }
    
    return(
        <Card className = {buzzClass} >
            <CardHeader className = "text-center enemy">Krizeot</CardHeader>
            <CardImg width="100%" src = "assets/aliens/alien1.jpg" />
            <CardFooter className="text-center d-flex flex-column">
                <div>LEVEL : 2 </div>
                <div>EXP: 150 </div>
            </CardFooter>
        </Card>
    )              
}

export default EnemyCard; 