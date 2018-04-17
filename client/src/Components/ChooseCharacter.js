import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'; 
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { Link } from 'react-router-dom';
import { 
	Container, 
	Button,  
    Card, 
    CardHeader, 
    CardImg,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Row} from 'reactstrap';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 
const localChar = localStorage.getItem('charName'); 
const localExp = localStorage.getItem('exp'); 
const localLevel = localStorage.getItem('level');
const history = createHistory();

class ChooseCharacter extends Component{
    constructor(props){
		super(props);
		this.state = {
			loggedIn:'initial',
			logMessage: 'none', 
            showLoader: 'block',
            showContainer: 'none',
            transition:'transition',
			opacity: 0,
			charName: '',
			selectedOption: 'assets/players/char1.jpg'
		}

		 this.handleOptionChange = this.handleOptionChange.bind(this); 
		 this.handleCharSubmit = this.handleCharSubmit.bind(this); 
	}

	handleOptionChange(changeEvent){
		this.setState({
			selectedOption: changeEvent.target.value
		})
	}
	
	handleCharSubmit(e){
		e.preventDefault();
		console.log("USER SUBMITTED A PIC!!")

        var charPicData = {
			picture: this.state.selectedOption,
			character: e.target[4].value 
        }

        this.props.choosePic(charPicData);
	}

	
    componentDidMount() {
		//logged in/out

		if(!localToken && !localName){
			this.setState({
				loggedIn: 'hidden',
				logMessage: 'block'
			})
		}

		//Loader 
        setTimeout(() =>{
            this.setState({
                showContainer: 'block',
                showLoader: 'none'
			})

        }, 4000)

        setTimeout(() =>{
            this.setState({
                transition: 'all 1s',
                opacity: 1
            })
        }, 5000)
	}
	
	componentWillMount(charProps){
		//Getting character name
		if(localToken && localName){
			this.setState({
				charName:localChar
			})
		}
	}

	componentWillReceiveProps(charProps){
		console.log("*************************");
        console.log(charProps.chooseChar); 
		console.log("*************************");

		var dataMessage = charProps.chooseChar.response.data.msg;
		console.log(dataMessage); 
		if(dataMessage === "picInserted"){
			console.log("wait"); 
			console.log(localExp);
			console.log(localLevel); 
			history.push('/scene');
			history.go('/scene'); 
		}
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

		const hideInput = {
			display: 'none'
		}

		const showRegMsg = {
			display: this.state.logMessage
		}

		const hideScreen = {
			visibility: this.state.loggedIn
		}

        return(
            <div>
				<div className = "text-white mobile-message">Please play on a screen with a width 1200 or greater! Thank you!</div> 
				<Row>
					<Col md= '6' className = "logged-out-col">
						<div className = "logged-out" style = {showRegMsg}>
							<div className = "logged-out-text">Unauthorized player. Please register or log in to play. Thank you.</div>
							<Link to = "/"><Button className = "start-btn">Register/Login</Button></Link>
						</div>
					</Col>
				</Row> 

				<div className = "char-wrapper d-flex align-items-center" style = {hideScreen}>
					<div style = {showLoader} className ="preload">
						<div className="preload-status">
							<div className="preload-status-bar"></div>
							<div className="preload-status-info">LOADING</div>
						</div>
					</div>

					<Container style = {showContainer} className ="char-container align-middle">
						<div className = "char-text">Choose your character:</div>
						<Form className = "char-form" onSubmit = {this.handleCharSubmit}>
							<Row className = "d-flex flex-row align mt-5">
								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">{this.state.charName}</CardHeader>
										<CardImg src = "assets/players/char1.jpg" />
									</Card>
									<FormGroup>
										<div className="roundedOne mt-2">
											<Input 
												type ="radio" 
												value = 'assets/players/char1.jpg' 
												checked = {this.state.selectedOption === 'assets/players/char1.jpg'}
												onChange = {this.handleOptionChange}  
												id="roundedOne"/>
											<Label for="roundedOne"></Label>
										</div>
									</FormGroup>
								</Col> 

								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">{this.state.charName}</CardHeader>
										<CardImg src = 'assets/players/char3.png' />
									</Card>
									<FormGroup>
										<div className="roundedOne mt-2">
											<Input 
												type="radio" 
												value='assets/players/char3.png' 
												checked = {this.state.selectedOption === 'assets/players/char3.png'}
												onChange = {this.handleOptionChange} 
												id="roundedOne"/>
											<Label for="roundedOne"></Label>
										</div>
									</FormGroup>
								</Col>
							</Row>

							<Row className = "d-flex flex-row mt-5">
								<Col className = "m-auto" md = "3">
									<Card className = "companions-card mr-2">
										<CardHeader className = "text-center">{this.state.charName}</CardHeader>
										<CardImg src = "assets/players/char4.jpg" />
									</Card>
									<FormGroup>
										<div className="roundedOne mt-2">
											<Input 
												type="radio" 
												value='assets/players/char4.jpg' 
												checked = {this.state.selectedOption === 'assets/players/char4.jpg'} 
												onChange = {this.handleOptionChange}
												id="roundedOne"/>
											<Label for="roundedOne"></Label>
										</div>
									</FormGroup>
								</Col>

								<Col className = "m-auto" md = "3">
									<Card className = "companions-card  mr-2">
										<CardHeader className = "text-center">{this.state.charName}</CardHeader>
										<CardImg src = "assets/players/char2.png" />
									</Card>
									<FormGroup>
										<div className="roundedOne mt-2">
											<Input 
												type="radio" 
												value='assets/players/char2.png' 
												checked = {this.state.selectedOption === 'assets/players/char2.png'} 
												onChange = {this.handleOptionChange}
												id="roundedOne"/>
											<Label for="roundedOne"></Label>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<FormGroup style = {hideInput}>
								<Input 
									type="radio" 
									value={localChar} 
									id="roundedOne" 
									name="character"/>
								<Label for="character"></Label>
							</FormGroup>
							<Button type = "submit" color="danger" className = "start-btn">CONFIRM</Button>
						</Form>
					</Container>
					<div className = "p-2 audio">
                        <embed 
                            src="assets/music/nightwalk.mp3" 
                            preload = "auto" 
                            width="10"
                            height="10"
                            loop="true"
                        controls/>	
                    </div>
				</div>
            </div>  
        )
    }
}

function mapStateToProps(state){
    return{
        chooseChar: state.chooseChar
    }
}

export default connect(mapStateToProps,actions)(ChooseCharacter);




