import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registrationUserStart } from '../../../App/store/actions';
import { 
    Form, 
    FormGroup, 
    Col, 
    FormControl, 
    ControlLabel,
    // Checkbox, 
    Button } from 'react-bootstrap';

// import './RegistrationForm.css';

class RegistrationForm extends Component {

    state = {
        email: '',
        password: '',
    };

    onFormInputChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;

        this.setState({
            [inputName]: inputValue,
        })
    }

    onRegisterUser = () => {
        this.props.registerUser(this.state.email, this.state.password)

        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div className='sdf'>
            <h1>Rejestracja</h1>
            <Form horizontal>
            <FormGroup controlId="formHorizontalEmailRegistration">
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

            <FormGroup controlId="formHorizontalPasswordRegistration">
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
                    onClick={this.onRegisterUser}   
                >Zarejestruj się</Button>
                </Col>
            </FormGroup>
            </Form>
            </div>
            // <div className="main">
            //     <div className="main-Register">
            //         <p>
            //             e-mail
            //             <input 
            //                 name='email'
            //                 type="text"
            //                 onChange={this.onFormInputChange}
            //                 value={this.state.email}
            //             />
            //         </p>
            //         <p>
            //             hasło
            //             <input 
            //                 name='password'
            //                 type="password" 
            //                 onChange={this.onFormInputChange}
            //                 value={this.state.password}
            //             />
            //         </p>
            //         {/* <p>
            //             Powtórz hasło
            //             <input type="password" />
            //         </p> */}
            //         <p>
            //             <button onClick={this.onRegisterUser}>
            //                 Zarejestruj
            //             </button>
            //         </p>
            //     </div>
            // </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (email, password) => dispatch(registrationUserStart(email, password)),
    }
}

export default connect(null, mapDispatchToProps)(RegistrationForm);
