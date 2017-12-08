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
                <Container className = "register-wrapper">
                    <Card className = "p-5">
                        <CardBlock>
                            <Form>
                                <FormGroup>
                                    <Label className = "text-dark"  for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="enter your email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className = "text-dark" for="username">Username</Label>
                                    <Input type="username" name="username" id="username" placeholder="create a username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className = "text-dark" for="password">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="create a password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className = "text-dark" for="character">Character's Name</Label>
                                    <Input type="character" name="character" id="character" placeholder="create a name for your character" />
                                </FormGroup>
                                <Button>Join</Button>
                            </Form>
                        </CardBlock>
                    </Card>
                </Container>
			</div>
		)
	}
}

export default Register;


