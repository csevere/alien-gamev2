import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { 
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

export class LogNav extends Component{
	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this); 
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

	render(){

		return(
            <div  className = "py-3 mb-3 lognav-wrapper">
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

                <Container>
                    <Col sm = "8" md = "8" className = "lognav-content align-middle mx-auto my-5" > 
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane className = "login-tab" style={{ backgroundColor: '#e6ecf0'}} tabId="1">
                                <Login />
                            </TabPane>

                            <TabPane className = "register-tab" tabId="2">
                                <Register/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Container>
			</div>
		)
	}
}

export default LogNav;


