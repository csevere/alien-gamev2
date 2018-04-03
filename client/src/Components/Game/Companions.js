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
    Form,
    Row,
    Input
} from 'reactstrap';

const localPic = localStorage.getItem('pic'); 

class Companions extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayAlly: 'block'
        }

        this.renderCompanions = this.renderCompanions.bind(this)
        this.handleHelpSubmit = this.handleHelpSubmit.bind(this)
    }

    handleHelpSubmit(){
        this.props.helpPlayer()
        console.log("FORM SUBMITTED"); 

        // this.setState({
        //     displayAlly: 'none'
        // })
    }

    renderCompanions(){
        const { companions } = this.props; 
        console.log(companions)

        return companions.map((companion)=>{
            if(localPic !== companion.image){
                return(
                    <ul className = "companions-cards">
                        <li>
                            <Card className = "companions-cards-item" key = {companion.id}>
                                <CardHeader className = "text-center">{companion.name}</CardHeader>
                                <CardImg src = {companion.image}/>
                            </Card>
                        </li>

                        <li>
                            <Card className = "companions-cards-item fake">
                                <CardHeader className = "text-center">STAND IN</CardHeader>
                                <CardImg src = 'assets/deck/scifi-texture.jpg' />
                            </Card>
                        </li>
                    </ul>
                )
            }
        })
    }

    
    render(){

        const state = this.props.active; 
        const hideFight = this.props.hide; 

        const hideButtons = {
            display: 'none'
        }

        const hideFghtBtns = {
            display: 'none'
        } 

        return(
            <div className = "companions d-flex flex-row">
                {this.renderCompanions()}
                <CardFooter style = {!state ? hideButtons : null }>
                    <Button onClick = {()=> this.handleHelpSubmit()} color="danger"  className = "start-btn" style = {hideFight ? hideFghtBtns : null }>Help</Button>
                </CardFooter>
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

