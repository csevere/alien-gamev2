import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Progress} from 'reactstrap';


class EnemyProgress extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
			<div className = "enemyProgress d-flex flex-column">
				Health
				<Progress className = "e_Health tex-white" value = {this.props.health} max = "1250"> {this.props.health}  / 1250</Progress>
				AP
				<Progress className = "e_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default EnemyProgress; 