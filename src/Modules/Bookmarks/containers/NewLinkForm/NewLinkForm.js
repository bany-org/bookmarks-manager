import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { saveItemStart } from '../../../../App/store/actions';

import './NewLinkForm.css'

class Form extends Component {
    state = {
        name: '',
        link: '',
        desc: '',
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    onSaveItem = () => {
        const userData = {...this.state}
        this.props.saveItem(userData)
        this.setState({
            name: '',
            link: '',
            desc: '',
        })
    }

    render() {
        let activator = true;

        if (this.state.link !== '' && this.state.name !== '') {
            activator = false;
        }

        return (
            <div className='elements flex ma1'>
                <Input 
                    name='link'
                    title='Link'
                    subtitle='Link'
                    type='text'
                    onInputChange={this.onInputChange}
                    value={this.state.link}
                />
                <Input 
                    name='name'
                    title='Name'
                    subtitle='podaj nazwe'
                    type='text'
                    onInputChange={this.onInputChange}
                    value={this.state.name}
                />
                <Input 
                    name='desc'
                    title='Opis'
                    subtitle='kilka słów opisu'
                    type='text'
                    onInputChange={this.onInputChange}
                    value={this.state.desc}
                />
                <Button 
                    onClick={this.onSaveItem}
                    isVisible={activator} 
                    labelIn={'Zapisz'} 
                    labelOut={'Brak danych'}
                    disabled={activator}
                />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        databaseId: state.auth.localId,
        token: state.auth.idToken,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveItem: (data) => dispatch(saveItemStart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);