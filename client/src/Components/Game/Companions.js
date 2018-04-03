import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { 
    Button,  
    Card, 
    CardHeader, 
    CardImg,
    CardFooter, 
    Container, 
    Col,
    Row
} from 'reactstrap';

const localPic = localStorage.getItem('pic'); 

class Companions extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayAlly: 'block'
        }

        this.renderCompanions = this.renderCompanions.bind(this)
        this.handleHelp = this.handleHelp.bind(this)
    }

    handleHelp(){
        this.props.helpPlayer()
        this.setState({
            displayAlly: 'none'
        })
    }

    renderCompanions(){
        const { companions } = this.props; 
        console.log(companions)

        const state = this.props.active; 

        const hideButtons = {
            display: 'none'
        }
        
        return companions.map((companion)=>{
            if(localPic !== companion.image){
                return(
                    <Card className = "companions-card mr-4" key = {companion.id}>
                        <CardHeader className = "text-center">{companion.name}</CardHeader>
                        <CardImg src = {companion.image}/>
                        <CardFooter style = {!state ? hideButtons : null }>
                            <Button onClick = {()=> this.handleHelp()}  color="danger"  className = "start-btn">Help</Button>
                        </CardFooter>
                    </Card>
                )
            }
        })
    }

    render(){
        return(
            <div>
                <div className = "companions d-flex flex-row">
                    {this.renderCompanions()}
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        companions: state.companions
    }
}

export default connect(mapStateToProps)(Companions); 


