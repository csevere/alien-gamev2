import React, {Component} from 'react';
import { Progress} from 'reactstrap';


class PlayerProgress extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const isFlashingP = this.props.isFlashingP; 

        var flashClass = ["p_Health text-white"];
        if(isFlashingP){
            flashClass.push('flashing')
        }
        return(
			<div className = "playerProgress d-flex flex-column">
				Health
				<Progress className = {flashClass} value = {this.props.health} max = {this.props.total}> {this.props.health}  / {this.props.total}</Progress>
				AP
				<Progress className = "p_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default PlayerProgress; 