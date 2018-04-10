import React from 'react';
import { Progress} from 'reactstrap';

const PlayerProgress = (props) => {
    const isFlashingP = props.isFlashingP; 
    var flashClass = ["p_Health text-white"];
    if(isFlashingP){
        flashClass.push('flashing')
    }
    return(
        <div className = "playerProgress d-flex flex-column">
            Health
            <Progress className = {flashClass} value = {props.health} max = {props.total}> {props.health}  / {props.total}</Progress>
            AP
            <Progress className = "p_AP" value = {props.ap} max = "50"> {props.ap}  / 50</Progress>
        </div> 
    )          
}

export default PlayerProgress; 