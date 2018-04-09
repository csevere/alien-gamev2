import React, {Component} from 'react';
import { Progress} from 'reactstrap';


class PlayerProgress extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
			<div className = "playerProgress d-flex flex-column">
				Health
				<Progress className = "p_Health tex-white" value = {this.props.health} max = {this.props.total}> {this.props.health}  / {this.props.total}</Progress>
				AP
				<Progress className = "p_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default PlayerProgress; 