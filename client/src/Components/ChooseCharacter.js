import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'; 
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { 
	Container, 
	Button,  
    Card, 
    CardHeader, 
    CardImg,
    CardFooter, 
	Col,
	Form,
	Row} from 'reactstrap';


class ChooseCharacter extends Component{
    constructor(props){
		super(props);
		this.state = {
            showLoader: 'block',
            showContainer: 'none',
            transition:'transition',
			opacity: 0,
			background: '',
			border: '',
			boxShadow: ''
		}
		 this.chooseChar = this.chooseChar.bind(this); 
	}
	
	chooseChar(){
		console.log("hello"); 
	}

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                showContainer: 'block',
                showLoader: 'none'
            })
        }, 3000)

        setTimeout(() =>{
            this.setState({
                transition: 'all 1s',
                opacity: 1
            })
        }, 4000)
    }



    render(){
		const showContainer = {
            display: this.state.showContainer,
            transition: this.state.transition,
            opacity: this.state.opacity 
        }

        const showLoader = {
            display: this.state.showLoader 
        }

        return(
            <div>
				<div className = "char-wrapper d-flex align-items-center">
					<div style = {showLoader} className ="preload">
						<div className="preload-status">
							<div className="preload-status-bar"></div>
							<div className="preload-status-info">LOADING</div>
						</div>
					</div>

					<Container style = {showContainer} className ="char-container align-middle">
						
						<div className = "char-text">Choose your character:</div>

						<Form className = "char-form">
							<Row className = "d-flex flex-row align mt-5">
								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">Meliz</CardHeader>
										<CardImg src = "assets/players/ally1.jpg" />
									</Card>
									<div className="roundedOne mt-2">
										<input type="checkbox" value="None" id="roundedOne" name="check" checked/>
										<label for="roundedOne"></label>
									</div>
								</Col> 

								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">Faust</CardHeader>
										<CardImg src = "assets/players/ally3.png" />
									</Card>
									<div className="roundedOne mt-2">
										<input type="checkbox" value="None" id="roundedOne" name="check"/>
										<label for="roundedOne"></label>
									</div>
								</Col>
							
							</Row>

							<Row className = "d-flex flex-row mt-5">
								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">Faust</CardHeader>
										<CardImg src = "assets/players/player1.jpg" />
									</Card>
									<div className="roundedOne mt-2">
										<input type="checkbox" value="None" id="roundedOne" name="check"/>
										<label for="roundedOne"></label>
									</div>
								</Col>

								<Col className = "m-auto" md = "3">
									<Card className = "companions-card  mr-2">
										<CardHeader className = "text-center">Faust</CardHeader>
										<CardImg src = "assets/players/ally2.png" />
									</Card>
									<div className="roundedOne mt-2">
										<input type="checkbox" value="None" id="roundedOne" name="check"/>
										<label for="roundedOne"></label>
									</div>
								</Col>
							</Row>
							<Button type = "submit" color="danger" className = "start-btn">CONTINUE</Button>
						</Form>

					</Container>
				</div>
            </div>  
        )
    }
}

export default connect(null,actions)(ChooseCharacter);




