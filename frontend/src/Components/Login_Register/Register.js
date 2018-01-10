import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { FormErrors } from './FormErrors';
import { 
    Card, 
    CardBlock, 
    CardTitle, 
    CardText,
    Container, 
    Button, 
    Form, 
    FormGroup, 
    FormControl,
    Label, 
    Input, 
    FormText
} from 'reactstrap';

export class Register extends Component{
	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this); 
        this.handleUserInput = this.handleUserInput.bind(null);

        this.state = {
            activeTab: '1',
            email: '',
            username: '',
            password: '',
            character: '',
            formErrors: {email: '', username: '', password: '', character: ''},
            emailValid: false,
            usernameValid: false,
            passwordValid: false,
            characterValid: false, 
            formValid: false 
        };
    }

    toggle(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value; 
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
	}

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;  
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        let characterValid = this.state.characterValid; 
      
        switch(fieldName) {

            case 'email':
                //simple regex for emails
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
                //check for min 6 characters
            case 'username':
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '': ' is too short';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'character':
                characterValid = value.length > 0;
                fieldValidationErrors.character = characterValid ? '': ' needs a name';
                break;
            default:
                break;
        }
        //setState to update the formErrors and the field validity 
        //and we pass the validateForm callback to set the value of formValid.
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid,
                        characterValid: characterValid
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.usernameValid && this.state.passwordValid && this.state.characterValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

	render(){

		return(
            <div>
                <Container className = "login-wrapper">
                    <Card className = "p-3 login-card">
                        <CardBlock>
                            <Form className = "login-content">
                                <div className = "panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <div className = "d-flex flex-row">
                                    <FormGroup className = "p-2">
                                        <Label for="email">Email</Label>
                                        <Input 
                                            required 
                                            type="email" 
                                            name="email" 
                                            placeholder="enter your email"
                                            value = {this.state.email}  
                                            onChange = {this.handleUserInput} 
                                        />
                                    </FormGroup>

                                    <FormGroup className = "p-2">
                                        <Label for="username">Username</Label>
                                        <Input 
                                            required
                                            type="username" 
                                            name="username" 
                                            placeholder="create a username"
                                            value = {this.state.username}  
                                            onChange = {this.handleUserInput}  

                                        />
                                    </FormGroup>
                                </div>

                                <div className = "d-flex flex-row">
                                    <FormGroup className = "p-2">
                                        <Label for="password">Password</Label>
                                        <Input 
                                            required
                                            type="password" 
                                            name="password" 
                                            placeholder="create a password" 
                                            value = {this.state.password}  
                                            onChange = {this.handleUserInput} 
                                        
                                        />
                                    </FormGroup>

                                    <FormGroup className = "p-2">
                                        <Label for="character">Character's Name</Label>
                                        <Input 
                                            type="character" 
                                            name="character" 
                                            placeholder="name your character" 
                                            value = {this.state.character}  
                                            onChange = {this.handleUserInput} 
                                        
                                        />
                                    </FormGroup>
                                </div>
                               
                                <div type = "submit" disabled ={!this.state.formValid} className = "button hvr-bob">
                                    <div className = "line-container">
                                        <Link disabled ={!this.state.formValid} to = "/scene"><span className = "text">JOIN</span></Link>
                                        <div className="line line--top-left line--thick thick-line--short"></div>
                                        <div className="line line--top-right line--thick thick-line--short"></div>
                                        <div className="line line--bottom-left line--thick thick-line--long"></div>
                                        <div className="line line--bottom-right line--thick thick-line--long"></div>
                                        <div className="line line--top line--thin"></div>
                                        <div className="line line--bottom line--thin"></div>
                                    </div>
                                </div>
                            </Form>
                        </CardBlock>
                    </Card>
                </Container>
			</div>
		)
	}
}

export default Register;


