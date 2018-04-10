import React, {Component} from 'react';
import { Progress} from 'reactstrap';


class EnemyProgress extends Component{
    constructor(props){
        super(props);
    }

    // <div className={menuClass.join(' ')}>

    render(){
        const isFlashingE = this.props.isFlashingE; 

        var flashClass = ["e_Health text-white"];
        if(isFlashingE){
            flashClass.push('flashing')
        }


        return(
			<div className = "enemyProgress d-flex flex-column">
				Health
				<Progress className = {flashClass} value = {this.props.health} max = {this.props.total}> {this.props.health}  / {this.props.total}</Progress>
				AP
				<Progress className = "e_AP" value = {this.props.ap} max = "50"> {this.props.ap}  / 50</Progress>
			</div> 
        )
    }
              
}

export default EnemyProgress; 