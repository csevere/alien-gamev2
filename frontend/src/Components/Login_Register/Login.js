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

export class Login extends Component{
	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this); 
        this.handleUserInput = this.handleUserInput.bind(null);

        this.state = {
            activeTab: '1',
            username: '',
            password: '',
            formErrors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
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
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {

          case 'username':
            //check for min 6 chars
            usernameValid = value.length >= 6;
            fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
            break;
            //check for min 6 characters
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        //setState to update the formErrors and the field validity 
        //and we pass the validateForm callback to set the value of formValid.
        this.setState({formErrors: fieldValidationErrors,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
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
                                <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                                    <Label for="username">Username</Label>
                                    <Input
                                        required
                                        type="text" 
                                        name="username" 
                                        placeholder="enter username" 
                                        value = {this.state.username}  
                                        onChange = {this.handleUserInput}
                                    />
                                </div>

                                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                    <Label for="password">Password</Label>
                                    <Input
                                        required 
                                        type="password" 
                                        name="password"  
                                        placeholder="enter password" 
                                        value = {this.state.password}  
                                        onChange={this.handleUserInput}
                                    />
                                </div>

                                <div type = "submit" disabled ={!this.state.formValid} className = "button hvr-bob">
                                    <div className = "line-container">
                                        <Link disabled ={!this.state.formValid} to = "/scene"><span className = "text">PLAY</span></Link>
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

export default Login;
