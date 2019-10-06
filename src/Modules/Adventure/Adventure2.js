import React, { Component } from 'react';
import Rooster from './Objects/Rooster';
import { Sheep } from './Objects/Sheep';
import { connect } from "react-redux";
import { goldIncrease } from "./store/actions";
import {Character} from './Objects/char';
import Hp from './Hp';

import rooster from './Objects/rooster.jpeg';
import sheep from './Objects/sheep.jpeg';

import './Adventure2.css';

class Adventure2 extends Component {
    constructor() {
        super();

        this.player = Rooster.getInstance();
        // this.player2 = new Rooster("Marta");
        // this.player = new Character('kuba');
    }

    // selectCharacter = (e) => {
    //     console.log(this.player.getHp());
    // }

    reduceHp = () => {
        this.player.hpReduce(10, (el) => this.props.goldIncrease(el))
    }

    render() {
        // this.player.hpReduce(20);
        // console.log('render w adventure2', this.player.getHp())
        // const hp = this.player.getHp();
        console.log('adventure render');

        return (
            <div style={{display: "flex"}}>
                {/* <button type="button" className="button" onClick={this.selectCharacter} >
                    <img src={rooster} className="button_img" id="rooster"/>
                </button> */}
                <button className="button" onClick={this.reduceHp}>
                    <img src={sheep} className="button_img" id="sheep" />
                </button>
                <Hp />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   hp: state.adventure.hp,
    }
  };

const mapDispatchToProps = dispatch => { 
    return {
        goldIncrease: (value) => dispatch(goldIncrease(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adventure2);

// export default Adventure2;