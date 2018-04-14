import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions';
import { FormErrors } from './FormErrors';
import { 
    Card, 
    CardBlock, 
    Container,
    Col, 
    Button, 
    Form,
    FormGroup, 
    Label, 
    Input,
    Row
} from 'reactstrap';

export class Login extends Component{
	constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            username: '',
            password: '',
            formErrors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false,
            loginMessage: '' 
        };

        this.toggle = this.toggle.bind(this); 
        this.handleUserInput = this.handleUserInput.bind(null);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentWillReceiveProps(formProps){
        console.log("*************************");
        console.log(formProps.login); 
        console.log("*************************");

        var errorMessage = formProps.login.response.data.msg;
        const history = createHistory();
           
        ///BACKEND VALIDATION ////
        if(errorMessage  === 'loginSuccess'){
           history.push('/choose'); 
           history.go('/choose'); 
        }else if(errorMessage  === 'badUserName'){
            console.log("BAD USERNAME")
            this.setState({
                registerMessage: 'Username not found. Please try again.'
            })
            setTimeout(() =>{
                window.location.reload();
            }, 2000)
        }else if(errorMessage  === 'wrongPassword'){
            console.log("BAD PASSWORD")
            this.setState({
                registerMessage: 'Wrong password. Please try again.'
            })
            setTimeout(() =>{
                window.location.reload();
            }, 2000)
        }
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("USER LOGGED IN!!")
        
        var loginData = {
            username: e.target[0].value,
            password: e.target[1].value,
        }
        this.props.loginUser(loginData);
    }

    toggle(tab){
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleUserInput = (e) => {
        e.preventDefault();
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
            usernameValid = value.length >= 3;
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
                    <Card className = "login-card">
                        <CardBlock>
                            <Form className = "login-content" onSubmit = {this.handleSubmit}>
                                <div className = "panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors}/>
                                    <div className = "panel-message"><p>{this.state.registerMessage}</p></div>
                                </div>
                                <Row> 
                                    <Col md= "8" className={`p-3 m-auto ${this.errorClass(this.state.formErrors.username)}`}>
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input
                                                required
                                                type="text" 
                                                name="username" 
                                                placeholder="enter username" 
                                                value = {this.state.username}  
                                                onChange = {this.handleUserInput}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col md = "8" className={`m-auto p-3 ${this.errorClass(this.state.formErrors.password)}`}>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input
                                                required 
                                                type="password" 
                                                name="password"  
                                                placeholder="enter password" 
                                                value = {this.state.password}  
                                                onChange={this.handleUserInput}
                                            />
                                        </FormGroup> 
                                    </Col>
                                </Row>

                                <div disabled ={!this.state.formValid} className = "button hvr-bob d-none d-md-block">
                                    <div className = "line-container d-none d-md-block">
                                        <Button disabled ={!this.state.formValid} type = "submit"><span className = "text d-none d-md-block">PLAY</span></Button>
                                        <div className="line line--top-left line--thick thick-line--short d-none d-md-block"></div>
                                        <div className="line line--top-right line--thick thick-line--short d-none d-md-block"></div>
                                        <div className="line line--bottom-left line--thick thick-line--long d-none d-md-block"></div>
                                        <div className="line line--bottom-right line--thick thick-line--long d-none d-md-block"></div>
                                        <div className="line line--top line--thin d-none d-md-block"></div>
                                        <div className="line line--bottom line--thin d-none d-md-block"></div>
                                    </div>
                                </div>
                                <Button color = "primary" size="sm" disabled ={!this.state.formValid} type = "submit" className = "mobile-btn d-md-none" block>PLAY</Button>
                            </Form>
                        </CardBlock>
                    </Card>
                </Container>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
    return{
        login: state.loginReducer
    }
}

export default connect(mapStateToProps, actions)(Login); 



