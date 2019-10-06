import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserStart, registrationUserStart } from '../../../App/store/actions'
import { 
    Form, 
    FormGroup, 
    Col, 
    FormControl, 
    ControlLabel, 
    // Checkbox, 
    Button } from 'react-bootstrap';
import './LoginForm.css';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    };

    onLoginUser = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password)
    }

    onFormInputChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;

        this.setState({
            [inputName]: inputValue,
        })
    }

    render() {
        return (
            <div className='sdf'>
            <h1>Logowanie</h1>
            <Form horizontal>
            <FormGroup controlId="formHorizontalEmailLogin">
                <Col componentClass={ControlLabel} sm={2}>
                Email
                </Col>
                <Col sm={10}>
                <FormControl 
                    name='email'
                    type="email" 
                    placeholder="Email" 
                    onChange={this.onFormInputChange}
                    value={this.state.email}
                />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPasswordLogin">
                <Col componentClass={ControlLabel} sm={2}>
                Password
                </Col>
                <Col sm={10}>
                <FormControl 
                    type="password" 
                    placeholder="Password" 
                    name='password'
                    title='Password'
                    onChange={this.onFormInputChange}
                    value={this.state.password}
                    />
                </Col>
            </FormGroup>

            {/* <FormGroup>
                <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup> */}

            <FormGroup>
                <Col smOffset={2} sm={10}>
                <Button 
                    type="submit"
                    onClick={this.onLoginUser}    
                >Zaloguj się</Button>
                </Col>
            </FormGroup>
            </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(loginUserStart(email, password)),
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)
