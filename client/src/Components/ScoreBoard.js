import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'; 
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'reactstrap';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 
// const localChar = localStorage.getItem('charName'); 
// const localExp = localStorage.getItem('exp'); 
// const localLevel = localStorage.getItem('level');
const history = createHistory();

var playerArr = []; 

class ScoreBoard extends Component{
    constructor(props){
		super(props);
		this.state = {
			loggedIn:'initial',
			logMessage: 'none', 
            showLoader: 'block',
            showContainer: 'none',
            transition:'transition',
			opacity: 0,
		}

		this.getStats = this.getStats.bind(this); 
		this.renderStats = this.renderStats.bind(this); 
		 
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

		this.props.getBoard(); 

		setTimeout(()=>{
			this.getStats(); 
		}, 5000)
	}
	

	getStats(){
		const { results } = this.props.board.response.data
		playerArr.push(results); 
	}

	renderStats(){
		return (
			<div>Will complete soon | Handle with promise </div>
		)
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


		const showRegMsg = {
			display: this.state.logMessage
		}

		const hideScreen = {
			visibility: this.state.loggedIn
		}

        return(
            <div>
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
						<div className = "char-text">ScoreBoard: Top 10 EXP</div>
						
						<div className = "scoreboard display-4 text-white">
							<Table key = "elem" >
								<thead>
								<tr>
									<th>Name</th>
									<th>Level</th>
									<th>Experience Points</th>
									<th>Time Remaining</th>
								</tr>
								</thead>
								<tbody>
								</tbody>
							</Table>
						</div>
						
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
        board: state.board
    }
}

export default connect(mapStateToProps,actions)(ScoreBoard);
