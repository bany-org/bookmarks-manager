import React, { Component }  from 'react';
import { Character } from './Objects/char';
import { Sheep } from './Objects/Sheep';
import Hp from './Hp';

class Adventure3 extends Component {
    constructor() {
        super();
        // this.name = "Kuba";
        // this.hp = 30;
        // this.sound = "bee bee";
        // this.maxHp = 30;
        // this.recoveryTempo = 1200;

        this.state = {
            name: "Kuba",
            hp: 30,
            sound: "bee bee",
            maxHp: 30,
            recoveryTempo: 1200,
        }
    }

    getName() {
        return this.state.name;
    }

    getHp() {
        return this.state.hp
    }

    getVoice() {
        return this.state.sound
    }

    hpAutoRecovery() {
        if (this.state.hp < this.state.maxHp) {
            // this.hp++;
            this.setState((prevState) => ({
                hp: prevState.hp++
            }));
        }
        if (this.state.hp === this.state.maxHp) {
            clearInterval(this.hpAutoRecoveryInterval);
        }
        console.log('po', this.hp);
    }

    hpReduce(value) {
        // this.hp = this.hp - value;
        if (this.state.hp <= 0) {
            alert('koniec gry')
            return false;
        }
        this.hpAutoRecoveryInterval = setInterval(this.hpAutoRecovery.bind(this), this.state.recoveryTempo);
        this.setState((prevState) => ({
            hp: prevState.hp - value,
        }));
    }

    reduce = () => {
        this.hpReduce(5);
    }

    render() {
        console.log('render adv3', this.getHp())
        
        return (
            <div>

            <button onClick={this.reduce}>sdfsd</button>
            <Hp hp={this.state.hp} />
            </div>
        )
    }   
}

export default Adventure3;