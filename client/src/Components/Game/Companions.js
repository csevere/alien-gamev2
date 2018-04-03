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

        const hideAlly ={
            display: this.state.displayAlly
        } 

        const hideInput = {
            visibility: 'hidden'
        }
        
        return companions.map((companion)=>{
            if(localPic !== companion.image){
                return(
                    <Card className = "companions-card mr-4" key = {companion.id}>
                        <CardHeader className = "text-center">{companion.name}</CardHeader>
                        <CardImg src = {companion.image}/>
                        <CardFooter style = {!state ? hideButtons : null }>
                            <Form onSubmit = {this.handleHelpSubmit}>
                                <Input value = {companion.id} style = {hideInput} />
                                <Button type = "submit" color="danger"  className = "start-btn" style = {companion.id ? hideAlly: null}>Help</Button>
                            </Form> 
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


