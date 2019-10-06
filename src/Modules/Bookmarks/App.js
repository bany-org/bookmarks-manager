import React, {Component} from 'react';
import LinksArea from './containers/LinksArea/LinksArea';
import NavBar from './containers/NavBar/NavBar';

class App extends Component {

    state = {
        email: '',
        password: '',
        token: '',
        searchfield: '',
        addNewLinkForm: false,
    };

    showHideForm = () => {
        this.setState({
            addNewLinkForm: !this.state.addNewLinkForm
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    };

    render() {
        return (
            <div>
                <NavBar 
                    showDesc={this.props.showDesc} 
                    hideDesc={this.props.hideDesc}
                    showForm={this.state.addNewLinkForm}
                    onShowHideForm={this.showHideForm}
                    onShowHideDesc={this.showHideDesc} 
                    onSearchChange={this.onSearchChange}
                />
                <LinksArea />
            </div>
        )
    }
}


export default App;
