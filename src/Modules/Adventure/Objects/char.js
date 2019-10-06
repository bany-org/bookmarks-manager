import { call } from "redux-saga/effects";

export class Character {
    getName() {
        return this.name;
    }

    getHp() {
        return this.hp
    }

    getVoice() {
        return this.sound
    }

    hpAutoRecovery() {
        if (this.hp < this.maxHp) {
            this.hp++;
            this.callback(this.hp);
        }
        if (this.hp === this.maxHp) {
            clearInterval(this.hpAutoRecoveryInterval);
        }
    }

    hpReduce(value, callback) {
        this.callback = callback;
        this.hp = this.hp - value;
        if (this.hp <= 0) {
            alert('koniec gry')
            return false;
        }
        this.hpAutoRecoveryInterval = setInterval(this.hpAutoRecovery.bind(this), this.recoveryTempo);
    }
}
