import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Progress} from 'reactstrap';


class PlayerProgress extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
			<div className = "playerProgress d-flex flex-column">
				Health
				<Progress className = "p_Health tex-white" value = {this.props.health} max = "1000"> {this.props.health}  / 1000</Progress>
				AP
				<Progress className = "p_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default PlayerProgress; 