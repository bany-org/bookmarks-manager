import React, { Component } from 'react';

class InputField extends Component {



    changeValue = (e) => {
        console.log(e.target.value)

        this.setState({
            currentValue: e.target.value,
        })
    }

    

    render() {

        return (
            <input 
                id="inpNum"
                type="text" 
                size="4" 
                maxlength="4" 
                autocomplete=""
                onChange={this.changeValue}
                onCheck={(val) => this.props.onCheck(val)}
            />
        )
    
    }   
}

export default InputField;