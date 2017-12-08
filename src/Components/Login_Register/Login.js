import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { 
    Card, 
    CardHeader, 
    CardBlock, 
    CardTitle, 
    CardText,
    Container, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText, 
    Row, 
    Col
} from 'reactstrap';

export class Login extends Component{
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
            <div>
                <Container className = "login-wrapper">
                    <Card className = "p-5 login-card">
                        <CardBlock className = "login-content">
                            <Form>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="username" name="username" id="username" placeholder="enter username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                                </FormGroup>
                                <Button>Play</Button>
                            </Form>
                        </CardBlock>
                    </Card>
                </Container>
			</div>
		)
	}
}

export default Login;
