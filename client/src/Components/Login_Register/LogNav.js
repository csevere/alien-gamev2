import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { 
    Button,
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink,
    Container, 
    Row, 
    Col} 
from 'reactstrap';
import Register from './Register'; 
import Login from './Login'; 
import classnames from 'classnames';

const localToken = localStorage.getItem('token'); 
const localName = localStorage.getItem('name'); 

export class LogNav extends Component{
	constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            loggedIn:'none'
        };

        this.toggle = this.toggle.bind(this); 
    }

    toggle(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount(){
        if (localToken && localName){
            this.setState({
                loggedIn: 'block'
            })
        }
    }

	render(){

        const logNavStyle = {
            display: 'none'
        }

        const loggedInBtn = {
            display: this.state.loggedIn
        }

		return(
            <div className = "py-3 mb-3 lognav-wrapper">
                <Row className = "row-nav" style = {localName && localToken ? logNavStyle : null}> 
                    <Col className = "logtabs align-middle mx-auto my-5" sm = "9" md = "9">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    LOGIN
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    JOIN
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col sm = "9" md = "9" className = "lognav-content align-middle mx-auto"> 
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane className = "login-tab" style={{ backgroundColor: 'transparent'}} tabId="1">
                                <Login />
                            </TabPane>

                            <TabPane className = "register-tab" tabId="2">
                                <Register/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row> 
                <Link to = '/scene' style = {loggedInBtn}> 
                    <div className = "button hvr-bob loggedIn">
                        <div className = "line-container">
                            <Button type ="submit"><span className = "text">CONTINUE</span></Button>
                            <div className="line line--top-left line--thick thick-line--short"></div>
                            <div className="line line--top-right line--thick thick-line--short"></div>
                            <div className="line line--bottom-left line--thick thick-line--long"></div>
                            <div className="line line--bottom-right line--thick thick-line--long"></div>
                            <div className="line line--top line--thin"></div>
                            <div className="line line--bottom line--thin"></div>
                        </div>
                    </div>
                </Link>
			</div>
		)
	}
}

export default LogNav;


