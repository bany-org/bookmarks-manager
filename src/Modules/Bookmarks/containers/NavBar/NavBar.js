import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import NewLinkForm from '../NewLinkForm/NewLinkForm';
import './NavBar.css'

class NavBar extends Component {

    state = {
        addNewLinkMode: false,
    }

    onShowHideForm = () => {
        this.setState({
            addNewLinkMode: !this.state.addNewLinkMode,
        })
    }

    onLogout = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <Button 
                        onClick={this.onShowHideForm} 
                        isVisible={this.state.addNewLinkMode} 
                        labelIn={'Dodaj link'} 
                        labelOut={'Ukryj rofmularz'}
                    />
                </div>
                <div>
                    {this.state.addNewLinkMode &&  <NewLinkForm />}
                </div>
            </div>
        )
    }
}

export default NavBar;