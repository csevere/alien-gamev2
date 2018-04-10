import React  from 'react';
import { Progress } from 'reactstrap';

const EnemyProgress = (props) =>{
    const isFlashingE = props.isFlashingE; 
    var flashClass = ["e_Health text-white"];
    if(isFlashingE){
        flashClass.push('flashing')
    }

    return(
        <div className = "enemyProgress d-flex flex-column">
            Health
            <Progress className = {flashClass} value = {props.health} max = {props.total}> {props.health}  / {props.total}</Progress>
            AP
            <Progress className = "e_AP" value = {props.ap} max = "50"> {props.ap}  / 50</Progress>
        </div> 
    )           
}

export default EnemyProgress; 