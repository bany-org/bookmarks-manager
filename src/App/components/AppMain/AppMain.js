import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './AppMain.css'

import NavBar from '../NavBar/NavBar';
import MainPage from '../MainPage/MainPage'
import UserPanel from '../UserPanel/UserPanel';
import Authors from '../Authors/Authors';

import MasterMind from '../../../Modules/MasterMind/MasterMind';
import Typer from '../../../Modules/Typer/Typer';
import MathLesson from '../../../Modules/MathLesson/MathLesson';
import Bookmarks from '../../../Modules/Bookmarks/Bookmarks';
import FindDiffGame from '../../../Modules/FindDiffGame/FindDiffGame';
import Adventure from '../../../Modules/Adventure/Adventure';
import Adventure2 from '../../../Modules/Adventure/Adventure2';

class AppMain extends Component {

    state = {
        name: '',
    };

    saveUserName = () => {
        // this.props.saveName(this.state.name)
    }

    onNameInputChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;

        this.setState({
            [inputName]: inputValue,
        })
    }

    render() {
        return (
            <div className="AppMain">
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/authors" component={Authors} />
                        <Route exact path="/userpanel" component={UserPanel} />
                        <Route exact path="/bookmarks" component={Bookmarks} />
                        <Route exact path="/mastermind" component={MasterMind} />
                        <Route exact path="/typer" component={Typer} />
                        <Route exact path="/mathlesson" component={MathLesson} />
                        <Route exact path="/compare" component={FindDiffGame} />
                        {/* <Route exact path="/adventure" component={Adventure} /> */}
                        <Route exact path="/adventure" component={Adventure2} />
                    </React.Fragment>
                </Router>
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
      name: state.auth.name,
    }
  };

const mapDispatchToProps = dispatch => {
    return {
        // saveName: (name) => dispatch(changeName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);