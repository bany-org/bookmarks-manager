import { Character } from './char';

export class Sheep extends Character {
    constructor(name) {
        super()
        this.name = name;
        this.hp = 30;
        this.sound = "bee bee";
        this.maxHp = 30;
        this.recoveryTempo = 1200;
    }
}
