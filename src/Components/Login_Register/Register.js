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

export class Register extends Component{
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
                    <Card className = "p-3 login-card">
                        <CardBlock>
                            <Form className = "login-content">
                                <div className = "d-flex flex-row">
                                    <FormGroup className = "p-2">
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="enter your email" />
                                    </FormGroup>
                                    <FormGroup className = "p-2">
                                        <Label for="username">Username</Label>
                                        <Input type="username" name="username" id="username" placeholder="create a username" />
                                    </FormGroup>
                                </div>

                                <div className = "d-flex flex-row">
                                    <FormGroup className = "p-2">
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="create a password" />
                                    </FormGroup>
                                    <FormGroup className = "p-2">
                                        <Label for="character">Character's Name</Label>
                                        <Input type="character" name="character" id="character" placeholder="name your character" />
                                    </FormGroup>
                                </div>
                                <Link to = "/scene"><Button size= "lg" block>JOIN</Button></Link> 
                            </Form>
                        </CardBlock>
                    </Card>
                </Container>
			</div>
		)
	}
}

export default Register;


