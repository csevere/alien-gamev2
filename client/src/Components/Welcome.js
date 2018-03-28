import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import LogNav from './Login_Register/LogNav';
import { 
    Container, 
    Row, 
    Col, 
    Button 
} from 'reactstrap';

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            showLoader: 'block',
            showLogNav: 'none',
            transition:'transition',
            opacity: 0,
        }
	}
	
    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                showLogNav: 'block',
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

    render(){
		const showLogNav = {
            display: this.state.showContainer,
            transition: this.state.transition,
            opacity: this.state.opacity 
        }

        const showLoader = {
            display: this.state.showLoader 
		}

        return(
            <div>
                <div className = "main-wrapper">

                    <div style = {showLoader} className ="preload">
                        <div className="preload-status">
                            <div className="preload-status-bar"></div>
                            <div className="preload-status-info">LOADING</div>
                        </div>
                    </div>

                    <Col md = "9" className = "w-lognav" style = {showLogNav}>
                        <LogNav/> 
                    </Col>

                    <div className = "p-2 audio">
                        <embed 
                            src="assets/music/Speck.mp3" 
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

export default Welcome; 
