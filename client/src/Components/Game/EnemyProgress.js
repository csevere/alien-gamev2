import React, {Component} from 'react';
import { Progress} from 'reactstrap';


class EnemyProgress extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
			<div className = "enemyProgress d-flex flex-column">
				Health
				<Progress className = "e_Health tex-white" value = {this.props.health} max = "1450"> {this.props.health}  / {this.props.total}</Progress>
				AP
				<Progress className = "e_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default EnemyProgress; 