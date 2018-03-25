import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'
import { FormErrors } from './FormErrors';
import { connect} from 'react-redux';
import * as actions from '../../Actions';
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

class Register extends Component{
	constructor(props) {
        super(props);
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
            formValid: false,
            registerMessage: '',
            usernameError: null,
            emailError: null,
            formError: false
        }
        this.toggle = this.toggle.bind(this); 
        this.handleUserInput = this.handleUserInput.bind(null);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentWillReceiveProps(formProps){
        console.log("*************************");
        console.log(formProps.register); 
        console.log(formProps.register.response.data.msg); 
        console.log("*************************");

        var errorMessage = formProps.register.response.data.msg;
        const history = createHistory();
        const location = history.location;
        const unlisten = history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state)
          })
           
        ///BACKEND VALIDATION ////
        if(errorMessage  == 'playerInserted'){
           history.push('/scene');
           history.go('/scene'); 
        }else if(errorMessage  == 'emailAlreadyExists'){
            console.log("EMAIL TAKEN")
            this.setState({
                registerMessage: 'This email is already linked to an account.'
            })
            setTimeout(() =>{
                window.location.reload();
            }, 2000)
            
        }else if(errorMessage  == 'usernameAlreadyExists'){
            console.log("USERNAME TAKEN")
            this.setState({
                registerMessage: 'This username is already linked to an account.'
            })
            setTimeout(() =>{
                window.location.reload();
            }, 2000)

        }else if(errorMessage  == 'characterAlreadyExists'){
            console.log("CHARACTER TAKEN")
            this.setState({
                registerMessage: 'This character name is already linked to an account.'
            })
            setTimeout(() =>{
                window.location.reload();
            }, 2000)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("USER SUBMITTED THE FORM!!")
        
        var registerData = {
            email: e.target[0].value,
            username: e.target[1].value,
            password: e.target[2].value,
            character: e.target[3].value
        }
        var error = false;

        //username
        if(registerData.username.length < 3){
            var usernameError = 'error';
            error = true;
        }else{
            var usernameError ='success';
        }

        //email 
        if(registerData.email.length < 3){
            var emailError = 'error';
            error = true;
        }else{
            var emailError = 'success';
        }

         //character
         if(registerData.character.length < 3){
            var emailError = 'error';
            error = true;
        }else{
            var emailError = 'success';
        }

        if(error){
            this.setState({
                formError: true,
                emailError,
                usernameError
            })
            console.log(error);
        }else{
            this.props.registerUser(registerData);
        }
    }

    ///FRONTEND VALIDATION 

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
                usernameValid = value.length >= 5;
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
                            <Form className = "login-content" onSubmit = {this.handleSubmit}>
                                <div className = "panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors} />
                                    <div className = "panel-message"><p>{this.state.registerMessage}</p></div>
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
                               
                                <div disabled ={!this.state.formValid} className = "button hvr-bob">
                                    <div className = "line-container">
                                        <Button disabled ={!this.state.formValid} type ="submit"><span className = "text">JOIN</span></Button>
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

function mapStateToProps(state){
    return{
        register: state.registerReducer 
    }
}

export default connect(mapStateToProps, actions)(Register);


