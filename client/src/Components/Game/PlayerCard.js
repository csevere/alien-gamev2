import React from 'react';
import { Card, CardHeader, CardImg, CardFooter } from 'reactstrap';

const localChar = localStorage.getItem('charName'); 
const localPic = localStorage.getItem('pic'); 
const localExp = localStorage.getItem('exp'); 
const localLevel = localStorage.getItem('level'); 

const PlayerCard = (props) => {
    const isBuzzingP = props.isBuzzingP; 
    var buzzClass = [""];
    if(isBuzzingP){
        buzzClass.push('hvr-buzz buzz')
    }

    return(
        <Card className = {buzzClass}>
            <CardHeader className = "text-center enemy">{localChar}</CardHeader>
            <CardImg width="100%" src = {localPic} />
            <CardFooter className="text-center d-flex flex-column">
                <div>LEVEL : {localLevel}</div>
                <div>EXP : {localExp}</div>
            </CardFooter>
        </Card>
    )          
}

export default PlayerCard; 