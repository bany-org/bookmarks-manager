import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import AppMain from './components/AppMain/AppMain';
import { connect } from "react-redux";
import { loginUserSuccess } from "./store/actions";
// import MainPage from '../Main/components/MainPage/MainPage';
import './App.css';


class App extends Component {

    componentWillMount() {
        const token = window.localStorage.getItem("token");
        const localId = window.localStorage.getItem("userId")

        if (token && localId) {
            this.props.userIsLogged(token, localId);
        }
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
            {!this.props.logged && (
                <div>
                    <LoginForm />
                    <hr />
                    <RegistrationForm />
                </div>
            )}
            {
                this.props.logged && (
                    <AppMain />
                )
            }
            <AppFooter />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      logged: state.auth.isUserLogged
    }
  };

const mapDispatchToProps = dispatch => { 
    return {
        userIsLogged: (token, userId) => dispatch(loginUserSuccess(token, userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
