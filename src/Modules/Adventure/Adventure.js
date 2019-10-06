import React, { Component } from 'react';
import { connect } from "react-redux";
import { goldIncrease } from "./store/actions";

import las from './Graphics/las.jpg'
import jaskinia from './Graphics/jaskinia.jpg';
import trening from './Graphics/trening.jpg';
import bazar from './Graphics/bazar.jpg';


import './Adventure.css';

class Adventure extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        // this.handleClick = this.handleClick.bind(this);
        this.state = { 
            counter: 0,
            health: 100,
            maxHealth: 100,
            energy: 100,
            maxEnergy: 100,	
            str: 10,
            def: 0,
            strLevel: 0,
            defLevel: 0,
            monsterStr: 0,
        };

       
        // this.maxHealth = 100;
        // this.state.energy = 100;
        // this.state.str = 0;
        // this.state.maxEnergy = 100;	
        // this.state.def = 0;
        // this.strLevel = 0; 
        // this.defLevel = 0;
        // this.monsterStr = 0;
        this.monsterDef = 0;
        // this.gold = 0;
        this.profit = 0;
        this.eventNumber = 0;
        this.workNumber = 0;
        this.workLevel = 1;
        this.swordLevel = 0;
        this.armorLevel = 0;
    }
    
    componentDidMount() {
        this.inter1 = setInterval(this.controlHealth,100); 
        this.inter2 = setInterval(this.regenHealth,5000); 
        this.inter3 = setInterval(this.regenEnergy,1000); 
        this.inter4 = setInterval(this.controlLocationButton,100);
        this.inter5 = setInterval(this.controlWorkButton,100); 
        this.inter6 = setInterval(this.controlStrButton,100);
        this.inter7 = setInterval(this.controlDefButton,100);
        this.inter8 = setInterval(this.controlStrButton2,100);
        this.inter9 = setInterval(this.controlDefButton2,100);
        this.inter10 = setInterval(this.controlHealPotion,100);
        this.inter11 = setInterval(this.controlEnergyPotion,100);
        this.inter12 = setInterval(this.controlSword,100);
        this.inter13 = setInterval(this.controlArmor,100);
       
    }

    componentWillUnmount() {
        clearInterval(this.inter1);  
        clearInterval(this.inter2); 
        clearInterval(this.inter3); 
        clearInterval(this.inter4); 
        clearInterval(this.inter5); 
        clearInterval(this.inter6); 
        clearInterval(this.inter7); 
        clearInterval(this.inter8); 
        clearInterval(this.inter9); 
        clearInterval(this.inter10);
        clearInterval(this.inter11);
        clearInterval(this.inter12);
        clearInterval(this.inter13);
    }

    controlHealth = () => {
        if (this.state.health < 1) {
           alert("no i dupa")
        }
    }

    regenHealth = () => {						
        if (this.state.health < this.state.maxHealth) {
            // this.state.health = this.state.health +1;
            this.setState((state) => ({
                health: state.health + 1,
            }));
            // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.state.maxHealth;
        }
    }

    regenEnergy = () => {
        if (this.state.energy < this.state.maxEnergy) {
            // this.state.energy = this.state.energy +1;
            this.setState((state) => ({
                energy: state.energy + 1,
            }));
            // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy; 		
        }
    }

    controlLocationButton = () => {	
        const loc1Button = document.getElementById("loc1Button");
        const loc2Button = document.getElementById("loc2Button");

        if (this.state.energy >= 20) {
            loc1Button.disabled = false;
            loc2Button.disabled = false;
        } else if (this.state.energy>=10) {
            loc1Button.disabled = false;
            loc2Button.disabled = true;
        } else {	
            loc1Button.disabled = true;
            loc2Button.disabled = true;
        }
    }

    controlWorkButton = () => {
        const workButton = document.getElementById("workButton");

        if (this.workLevel == 1 && this.state.energy >= 10) {
            workButton.disabled = false;
        } else if (this.workLevel == 2 && this.state.energy >= 20) {
            workButton.disabled = false;
        } else if(this.workLevel == 3 && this.state.energy >= 30) {
            workButton.disabled = false;
        } else {
            workButton.disabled = true;
        }
    }

    controlStrButton = () => {
        const addStrButton = document.getElementById("addStrButton");

        if (this.state.strLevel == 0 && this.props.gold >= 1) {
            addStrButton.disabled = false;
        } else if (this.state.strLevel == 1 && this.props.gold >= 2) {
            addStrButton.disabled = false;
        } else if (this.state.strLevel == 2 && this.props.gold >= 4) {
            addStrButton.disabled = false;
        } else if (this.state.strLevel == 3 && this.props.gold >= 8) {
            addStrButton.disabled = false;
        } else if (this.state.strLevel == 4 && this.props.gold >= 16) {
            addStrButton.disabled = false;
        } else if (this.state.strLevel == 5 && this.props.gold >= 32) {
            addStrButton.disabled = false;
        } else {
            addStrButton.disabled = true;
        }
    }

    controlDefButton = () => {
        const addDefButton = document.getElementById("addDefButton");

        if (this.state.defLevel == 0 && this.props.gold >= 1) {
            addDefButton.disabled = false;
        } else if (this.state.defLevel == 1 && this.props.gold >= 2) {
            addDefButton.disabled = false;
        } else if (this.state.defLevel == 2 && this.props.gold >= 4) {
            addDefButton.disabled = false;
        } else if (this.state.defLevel == 3 && this.props.gold >= 8) {
            addDefButton.disabled = false;
        } else if (this.state.defLevel == 4 && this.props.gold >= 16) {
            addDefButton.disabled = false;
        } else if (this.state.defLevel == 5 && this.props.gold >= 32) {
            addDefButton.disabled = false;
        } else {
            addDefButton.disabled = true;
        }
    }

    controlStrButton2 = () => {
        const addStrButton = document.getElementById("addStrButton");
        let strLevel = 0;
        let gold = 0;

        if (this.state.str < 10) {
            strLevel = 0;
            gold = 1;
        } else if (this.state.str < 20) {
            strLevel = 1;
            gold = 2;
        } else if (this.state.str < 30) {
            strLevel = 2;
            gold = 4;
        } else if (this.state.str < 40) {
            strLevel = 3;
            gold = 8;
        } else if (this.state.str < 50) {
            strLevel = 4;
            gold = 16;
        } else if (this.state.str < 60) {
            strLevel = 5;
            gold = 32;
        } else {

        }

        addStrButton.innerHTML = "Siła +1 Złoto -" + gold;

        this.setState({
            strLevel: strLevel,
        });
    }

    controlDefButton2 = () => {
        if (this.state.def < 10) {
            // this.defLevel = 0;
            this.setState((state) => ({
                defLevel: 0,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -1";
        } else if (this.state.def < 20) {
            // this.defLevel = 1;
            this.setState((state) => ({
                defLevel: 1,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -2";
        } else if (this.state.def < 30) {
            // this.defLevel = 2;
            this.setState((state) => ({
                defLevel: 2,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -4";
        } else if (this.state.def < 40) {
            // this.defLevel = 3;
            this.setState((state) => ({
                defLevel: 3,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -8";
        } else if (this.state.def < 50) {
            // this.defLevel = 4;
            this.setState((state) => ({
                defLevel: 4,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -16";
        } else if (this.state.def < 60) {
            // this.defLevel = 5;
            this.setState((state) => ({
                defLevel: 5,
            }));
            document.getElementById("addDefButton").innerHTML = "Obrona +1 Złoto -32";
        } else {

        }
    }

    controlHealPotion = () => {
        if (this.state.health <= (this.state.maxHealth - 40) && this.props.gold >= 20) {
            document.getElementById("healPotionButton").disabled = false;
        } else {
            document.getElementById("healPotionButton").disabled = true;
        }
    }

    controlEnergyPotion = () => {
        if(this.state.energy <= (this.state.maxEnergy - 40) && this.props.gold >= 20) {
            document.getElementById("energyPotionButton").disabled = false;
        } else {
            document.getElementById("energyPotionButton").disabled = true;
        }
    }

    controlSword = () => {
        if(this.swordLevel == 0 && this.props.gold >= 50) {
            document.getElementById("swordButton").disabled = false;
        } else if (this.swordLevel == 1 && this.props.gold >= 100) {
            document.getElementById("swordButton").disabled = false;
        } else if (this.swordLevel == 2 && this.props.gold >= 200) {
            document.getElementById("swordButton").disabled = false;
        } else if (this.swordLevel == 3 && this.props.gold >= 300) {
            document.getElementById("swordButton").disabled = false;
        } else {
            document.getElementById("swordButton").disabled = true;
        }
    }

    controlArmor = () => {
        if(this.armorLevel == 0 && this.props.gold >= 50) {
            document.getElementById("armorButton").disabled = false;
        } else if (this.armorLevel == 1 && this.props.gold >= 100) {
            document.getElementById("armorButton").disabled = false;
        } else if (this.armorLevel == 2 && this.props.gold >= 200) {
            document.getElementById("armorButton").disabled = false;
        } else if (this.armorLevel == 3 && this.props.gold >= 300) {
            document.getElementById("armorButton").disabled = false;
        } else {
            document.getElementById("armorButton").disabled = true;
        }
    }

// Nawigacja 
//
    returnFunc = () => {
        document.getElementById("div2").style.visibility = "visible";
        document.getElementById("div3").style.visibility = "hidden";
        document.getElementById("div4").style.visibility = "hidden";
        document.getElementById("div5").style.visibility = "hidden";
        document.getElementById("div6").style.visibility = "hidden";
        document.getElementById("body1").style.backgroundImage = ""; 
    }		

    goDiv3Func = () => {
        document.getElementById("body1").style.backgroundImage = `url(${bazar})`; 
        document.getElementById("div3").style.visibility = "visible";
        document.getElementById("div2").style.visibility = "hidden";
    }

    goDiv4Func = () => {
        document.getElementById("div4").style.visibility = "visible";
        document.getElementById("div2").style.visibility = "hidden";
        document.getElementById("body1").style.backgroundImage = `url(${trening})`; 
    }

    goDiv6Func = () => {
        document.getElementById("div6").style.visibility = "visible";
        document.getElementById("div2").style.visibility = "hidden";
    }

// Funkcja pracy
//
    workFunc = () => {		
        if (this.workNumber < 99) {
            this.workNumber = this.workNumber + 1;
            // this.gold = this.gold + 1;
            this.props.inreaseGold(1)
            this.setState((state) => ({
                energy: state.energy - 10,
            }));
            document.getElementById("workButton").innerHTML = "Łapanie szczurów (" + this.workNumber + "/100) Złoto +1 Energia -10";
        } else if (this.workNumber == 99) {
            this.workLevel = 2;
            this.workNumber = this.workNumber + 1;
            // this.gold = this.gold + 1;
            this.props.inreaseGold(1)
            this.setState((state) => ({
                energy: state.energy - 10,
            }));
            document.getElementById("workButton").innerHTML = "Polowanie na jelenie (" + this.workNumber + "/200) Złoto +3 Energia -20";
        } else if (this.workNumber < 199) {
            this.workNumber = this.workNumber + 1;
            // this.gold = this.gold + 3;
            this.props.inreaseGold(3)
            this.setState((state) => ({
                energy: state.energy + 1,
            }));
            document.getElementById("workButton").innerHTML = "Polowanie na jelenie (" + this.workNumber + "/200) Złoto +3 Energia -20";
        } else if (this.workNumber == 199) {
            this.workLevel = 3;
            this.workNumber = this.workNumber + 1;
            // this.gold = this.gold + 3;
            this.props.inreaseGold(3)
            this.setState((state) => ({
                energy: state.energy - 20,
            }));
            document.getElementById("workButton").innerHTML = "Polowanie na jelenie (" + this.workNumber + "/300) Złoto +6 Energia -30";
        } else if (this.workNumber < 300) {
            this.workNumber = this.workNumber + 1;
            // this.gold = this.gold + 6;
            this.props.inreaseGold(6)
            this.setState((state) => ({
                energy: state.energy - 30,
            }));
            // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy; 
            document.getElementById("workButton").innerHTML = "Polowanie na słonie (" + this.workNumber + "/300) Złoto +6 Energia -30";
        }
    }

// Funkcja treningu siły

    addStrFunc = () => {
        let cost = 0;

        if (this.state.str < 10) {
            cost = 1;
        } else if (this.state.str < 20) {
            cost = 2;
        } else if (this.state.str < 30) {
            cost = 4;
        } else if (this.state.str < 40) {
            cost = 8;
        } else if (this.state.str < 50) {
            cost = 16;
        } else if (this.state.str < 60) {
            cost = 32;
        } else {
            document.getElementById("addStrButton").disabled = true;
        }

        // this.gold = this.gold - cost;
        this.props.inreaseGold(-cost)
        this.setState((state) => ({
            str: state.str + 1,
        }));
    }   

// Trening obrony
//
    addDefFunc = () => {
        let cost = 0;

        if (this.state.def < 10) {
            cost = 1;
        } else if (this.state.def < 20) {
            cost = 2;
        } else if (this.state.def < 30) {
            cost = 4;
        } else if (this.state.def < 40) {
            cost = 8;	
        } else if (this.state.def < 50) {
            cost = 16;
        } else if (this.state.def < 60) {
            cost = 32;
        } else {
            document.getElementById("addDefButton").disabled = true;
        }

        // this.gold = this.gold - cost;
        this.props.inreaseGold(-cost)
        this.setState((state) => ({
            def: state.def + 1,
        }));
    }

// Funkcje mikstur //
//
    useHealPotionFunc = () => {
        // this.gold = this.gold - 20;
        this.props.inreaseGold(-20)
        this.setState((state) => ({
            health: state.health + 40,
        }));
    }

    useEnergyPotionFunc = () => {
        // this.gold = this.gold - 20;
        this.props.inreaseGold(-20)
        this.setState((state) => ({
            energy: state.energy + 40,
        }));
    }

// Funkcje broni
//
    buySwordFunc = () => {
        if (this.swordLevel == 0) {
           this.setState((state) => ({
                str: state.str + 10,
            }));
            // this.gold = this.gold - 50;
            this.props.inreaseGold(-50)
            document.getElementById("swordButton").innerHTML = "Miecz Lv.2 +20 Siły(100 złota)";
            document.getElementById("playerWeapon").innerHTML = "Broń: Miecz Lv.1 (+10 siły)";
            this.swordLevel = 1;
        } else if (this.swordLevel == 1) {
            this.setState((state) => ({
                str: state.str + 20,
            }));
            // this.gold = this.gold - 100;
            this.props.inreaseGold(-100)
            document.getElementById("swordButton").innerHTML = "Miecz Lv.3 +30 Siły(200 złota)";
            document.getElementById("playerWeapon").innerHTML = "Broń: Miecz Lv.2 (+20 siły)";
            this.swordLevel = 2;
        } else if (this.swordLevel == 2) {
           this.setState((state) => ({
                str: state.str + 30,
            }));
            // this.gold = this.gold - 200;
            this.props.inreaseGold(-200)
            document.getElementById("swordButton").innerHTML = "Miecz Lv.4 +40 Siły(300 złota)";
            document.getElementById("playerWeapon").innerHTML = "Broń: Miecz Lv.3 (+30 siły)";
            this.swordLevel = 3;
        }
    }

// Funkcje zbroi
//
    buyArmorFunc = () => {
        if (this.armorLevel == 0) {
            this.setState((state) => ({
                def: state.def + 10,
            }));
            // this.gold = this.gold - 50;
            this.props.inreaseGold(-50)
            document.getElementById("armorButton").innerHTML = "Zbroja Lv.2 +20 Siły(100 złota)";
            document.getElementById("playerArmor").innerHTML = "Zbroja: Zbroja Lv.1 (+10 obrony)"; 
            this.armorLevel = 1;
        } else if (this.armorLevel == 1) {
            this.setState((state) => ({
                def: state.def + 20,
            }));
            // this.gold = this.gold - 100;
            this.props.inreaseGold(-100)
            document.getElementById("armorButton").innerHTML = "Zbroja Lv.3 +30 Siły(200 złota)";
            document.getElementById("playerArmor").innerHTML = "Zbroja: Zbroja Lv.2 (+20 obrony)"; 
            this.armorLevel = 2;
        } else if (this.armorLevel == 2) {
            this.setState((state) => ({
                def: state.def + 30,
            }));
            // this.gold = this.gold - 200;
            this.props.inreaseGold(-200)
            document.getElementById("armorButton").innerHTML = "Zbroja Lv.4 +40 Siły(300 złota)";
            document.getElementById("playerArmor").innerHTML = "Zbroja: Zbroja Lv.3 (+30 obrony)"; 
            this.armorLevel = 3;
        }
    }

// Funkcja pierwszej przygody 
//
    goLoc1Func = () => {
        this.setState((state) => ({
            energy: state.energy - 10,
        }));

        document.getElementById("div5").style.visibility = "visible";	
        document.getElementById("div2").style.visibility = "hidden";
        document.getElementById("div3").style.visibility = "hidden";
        document.getElementById("div4").style.visibility = "hidden";
        document.getElementById("div6").style.visibility = "hidden";
        document.getElementById("body1").style.backgroundImage = `url(${las})`; 	
        document.getElementById("adventure1").innerHTML = "";
        document.getElementById("adventure2").innerHTML = "";
        document.getElementById("adventure3").innerHTML = "";	
        
        this.eventNumber = Math.floor((Math.random() * 14) + 1);		
        let monsterStr = 0;
        let profit = 0;

        this.eventNumber = 1;

        switch (this.eventNumber) {
            case 1:
                monsterStr = Math.floor((Math.random() * 10) + 0);		
                document.getElementById("adventure1").innerHTML = "Napotykasz Jeleniorożca!<br/> Siła: 0 - 9";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	

                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 9
                    if (profit > 0) {
                        // this.gold = this.gold + profit;
                        // this.props.inreaseGold(profit)
                        this.character.addGold(profit);
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ profit;	
                    } else {
                        // this.gold = this.gold + 1;
                        // this.props.inreaseGold(1)
                        this.character.addGold(1);
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    // this.setState((state) => ({
                    //     health: state.health - ((monsterStr - state.def) * 2),
                    // }));
                    this.character.hpReduce((monsterStr - this.state.def) * 2)
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

                break;

            case 2:
                monsterStr = Math.floor((Math.random()*10)+5);		
                document.getElementById("adventure1").innerHTML = "Napotykasz Jeleniorożca Złotego!<br/> Siła: 5 - 14";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	

                if (this.state.str > monsterStr) {
                profit = (monsterStr * 2) - this.state.str; //max 14
                    if (profit > 0) {
                        // this.gold = this.gold + profit;
                        this.props.inreaseGold(profit)
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ profit;
                    } else {
                        // this.gold = this.gold + 1;
                        this.props.inreaseGold(1)
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 3:
            monsterStr = Math.floor((Math.random() * 10) + 10);		
            document.getElementById("adventure1").innerHTML = "Napotykasz Żyrafolwa!<br/> Siła: 10 - 19";
            document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	
                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 19
                    if (profit > 0) {
                        // this.gold = this.gold + profit;
                        this.props.inreaseGold(profit)
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +" + profit;
                    } else {
                        // this.gold = this.gold + 1;
                        this.props.inreaseGold(1)
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 4:
                monsterStr = Math.floor((Math.random() * 10) + 15);	
                document.getElementById("adventure1").innerHTML = "Napotykasz Żyrafolwa Wielkiego!<br/> Siła: 15 - 24";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	
                    if (this.state.str > monsterStr) {
                        profit = (monsterStr * 2) - this.state.str; //max 24
                        if (profit > 0) {
                            this.gold = this.gold + profit;
                            document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +" + profit;
                        } else {
                            this.gold = this.gold + 1;
                            document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                        }
                    } else if (this.state.str < monsterStr) {
                        document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                        this.setState((state) => ({
                            health: state.health - ((monsterStr - state.def) * 2),
                        }));
                    } else {
                        document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                    }

            break;

            case 5:
                document.getElementById("adventure1").innerHTML = "Trafiasz nad piękny wodospad.";
                if (this.state.maxEnergy <= 120) {
                    document.getElementById("adventure2").innerHTML = "Pijąc z niego wodę, czujesz jak o 10 wzrasta Twoja maksymalna energia!";		
                    this.setState((state) => ({
                        maxEnergy: state.maxEnergy + 10,
                    }));	
                } else if (this.state.maxEnergy <= 135) {
                    document.getElementById("adventure2").innerHTML = "Pijąc z niego wodę, czujesz jak o 5 wzrasta Twoja maksymalna energia!";		
                    this.setState((state) => ({
                        maxEnergy: state.maxEnergy + 5,
                    }));	
                } else {	
                    document.getElementById("adventure2").innerHTML = "Jakie to jeszcze piękne miejsca czekają na odkrycie w tym lesie?";
                }

            break;

            case 6:
                document.getElementById("adventure1").innerHTML = "Długie spacery to samo zdrowie.";

                if (this.state.maxHealth <= 120) {
                    document.getElementById("adventure2").innerHTML = "+20 do maksymalnego poziomu Zycia!";		
                    this.setState((state) => ({
                        maxHealth: state.maxHealth + 20
                    }));
                } else if (this.state.maxHealth <= 150) {
                    document.getElementById("adventure2").innerHTML = "+10 do maksymalnego poziomu Zycia!";		
                    this.setState((state) => ({
                        maxHealth: state.maxHealth + 10
                    }));
                } else {	
                    document.getElementById("adventure2").innerHTML = "Tylko się nie zgub...";
                }

            break;

            case 7:
                document.getElementById("adventure1").innerHTML = "W trakcie wędrówki zjadasz znalezione przy drodze jagody.";

                if (this.state.energy <= this.state.maxEnergy - 40) {
                    document.getElementById("adventure2").innerHTML = "Twoja energia została zregenerowana o 40";		
                    this.setState((state) => ({
                        energy: state.energy + 40,
                    }));	
                } else if (this.state.energy <= this.state.maxEnergy - 20) {
                    document.getElementById("adventure2").innerHTML = "Twoja energia została zregenerowana o 20!";		
                    this.setState((state) => ({
                        energy: state.energy + 20,
                    }));	
                } else {	
                    document.getElementById("adventure3").innerHTML = "Szkoda że nie masz śmietany i cukru...";
                }	
            break;

            case 8:
                document.getElementById("adventure1").innerHTML = "Trafiasz do chaty znachora.";

                if (this.state.health <= this.state.maxHealth - 60) {
                    document.getElementById("adventure2").innerHTML = "Ten dobry człowiek leczy kilka Twoich poważnych ran.<br/> Życie +60";		
                    this.setState((state) => ({
                        health: state.health + 60,
                    }));	
                } else if (this.state.health <= this.state.maxHealth - 30) {
                    document.getElementById("adventure2").innerHTML = "Pomaga Ci opatrzyć lekkie otarcia.<br/> Życie +30!";		
                    this.setState((state) => ({
                        health: state.health +30 ,
                    }));
                } else {	
                    document.getElementById("adventure3").innerHTML = "Na szczęście od rana czujesz się całkniem nieźle.";
                }

            break;

            case 9:
                document.getElementById("adventure1").innerHTML = "Napotykasz w lesie drwala!<br>Pomagasz mu ściąć kilka drzew.";

                if (this.state.str < 10) {
                    document.getElementById("adventure2").innerHTML = "Dzięki temu twoja siła wzrasta o 2!";		
                    this.setState((state) => ({
                        str: state.str + 2,
                    }));
                } else if (this.state.str < 20) {
                    document.getElementById("adventure2").innerHTML = "Dzięki temu twoja siła wzrasta o 1!";		
                    this.setState((state) => ({
                       str: state.str + 1,
                    }));	
                } else {	
                    document.getElementById("adventure2").innerHTML = "Nawet się nie spociłeś...!";
                }

            break;

            case 10:
                document.getElementById("adventure1").innerHTML = "Przez przypadek usiadłeś na mrowisku...";

                if (this.state.def < 10) {
                    document.getElementById("adventure2").innerHTML = "Obrona przed mrówkami to świetne ćwiczenie.<br/>Obrona wzrasta o 2!";		
                    this.setState((state) => ({
                        def: state.def + 2,
                    }));
                } else if (this.state.def < 20) {
                    document.getElementById("adventure2").innerHTML = "Obrona przed mrówkami to świetne ćwiczenie.<br/>Obrona wzrasta o 1!";		
                    this.setState((state) => ({
                        def: state.def + 1,
                    }));
                } else {	
                    document.getElementById("adventure2").innerHTML = "Następnym razem patrz gdzie siadasz!";
                }	
            
            break;

            case 11:
                monsterStr = Math.floor((Math.random() * 10) + 0);		
                document.getElementById("adventure1").innerHTML = "Napotykasz Jeleniorożca!<br/> Siła: 0 - 9";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + monsterStr;	
                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 
                    if (profit > 0) {
                        this.gold = this.gold + this.profit;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +" + profit;
                    } else {
                        this.gold = this.gold + 1;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 12:
                monsterStr = Math.floor((Math.random() * 10) + 5);		
                document.getElementById("adventure1").innerHTML = "Napotykasz Jeleniorożca Złotego!<br/> Siła: 5 - 14";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + monsterStr;	

                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max

                    if (profit > 0) {
                        this.gold = this.gold + profit;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ profit;
                    } else {
                        this.gold = this.gold + 1;	
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 13:
                monsterStr = Math.floor((Math.random() * 10) + 10);	
                document.getElementById("adventure1").innerHTML = "Napotykasz Żyrafolwa!<br/> Siła: 10 - 19";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	
                
                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 
                    
                    if (profit > 0) {
                        this.gold = this.gold + profit;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +" + profit;
                    } else {
                        this.gold = this.gold + 1;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 14:
                monsterStr = Math.floor((Math.random() * 10) + 15);	
                document.getElementById("adventure1").innerHTML = "Napotykasz Żyrafolwa Złotego!<br/> Siła: 15 - 24";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	
 
                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 
                    
                    if (profit > 0) {
                        this.gold = this.gold + profit;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ profit;
                    } else {
                        this.gold = this.gold + 1;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            case 15:
                monsterStr = Math.floor((Math.random() * 10) + 20);
                document.getElementById("adventure1").innerHTML = "Napotykasz Jeleniorożca Elitarnego!<br/> Siła: 20 - 29";
                document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " + this.state.str + "<br/>Siła potwora: " + monsterStr;	
                if (this.state.str > monsterStr) {
                    profit = (monsterStr * 2) - this.state.str; //max 
                    if (profit > 0) {
                        this.gold = this.gold + profit;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +" + profit;
                    } else {
                        this.gold = this.gold + 1;
                        document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
                    }
                } else if (this.state.str < monsterStr) {
                    document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((monsterStr - this.state.def) * 2);
                    this.setState((state) => ({
                        health: state.health - ((monsterStr - state.def) * 2),
                    }));
                } else {
                    document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
                }

            break;

            default:
                document.getElementById("adventure1").innerHTML = "6-10 Default Nic się nie dzieje";
                document.getElementById("adventure2").innerHTML = "";
                document.getElementById("adventure3").innerHTML = "";
            break;
        }
    }

// // Funkcja drugiej przygody 
// //
//     goLoc2Func = () => {
// // this.state.energy = this.state.energy - 20;
// this.setState((state) => ({
//     energy: state.energy - 20,
// }));
// // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy; 	
// document.getElementById("div5").style.visibility = "visible";	
// document.getElementById("div2").style.visibility = "hidden";
// document.getElementById("div3").style.visibility = "hidden";
// document.getElementById("div4").style.visibility = "hidden";
// document.getElementById("div6").style.visibility = "hidden";
// document.getElementById("body1").style.backgroundImage = `url(${jaskinia})`; 	
// this.eventNumber = Math.floor((Math.random()*14)+1);		
// document.getElementById("adventure1").innerHTML = "";
// document.getElementById("adventure2").innerHTML = "";
// document.getElementById("adventure3").innerHTML = "";			
// switch(this.eventNumber)
//     {
//     case 1:
//     // this.monsterStr = Math.floor((Math.random()*10)+20);	
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10)+ 20),
//     }));		
// //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Atakuje Cię Wielki Pająk!<br/> Siła: 20 - 29";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 19
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 9
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;

//     case 2:
//     // this.monsterStr = Math.floor((Math.random()*10)+25);	
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10)+ 25),
//     }));		
// //	this.monsterDef = Math.floor((Math.random()*10)+5);	
//     document.getElementById("adventure1").innerHTML = "Atakuje Cię Wielki Pająk Włochaty!<br/> Siła: 25 - 34";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 29
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 14
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;

//     case 3:
//     // this.monsterStr = Math.floor((Math.random()*10)+30);	
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10)+ 30),
//     }));		
// //	this.monsterDef = Math.floor((Math.random()*10)+10);	
//     document.getElementById("adventure1").innerHTML = "Z góry spada na Ciebie Nietoperz Krwiopijca!<br/> Siła: 30 - 39";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 39
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 19
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;
//     case 4:
//     this.monsterStr = Math.floor((Math.random()*10)+35);
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10)+ 35),
//     }));			
// //	this.monsterDef = Math.floor((Math.random()*10)+10);	
//     document.getElementById("adventure1").innerHTML = "Z góry spada na Ciebie Zmutowany Nietoperz Jadowity!<br/> Siła: 35 - 44";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 49
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 24
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;

//     case 5:
//     document.getElementById("adventure1").innerHTML = "W jednym z tuneli znajdujesz mały strumyczek.";
//         if (this.state.maxEnergy<=180) {
//             document.getElementById("adventure2").innerHTML = "Pijąc z niego wodę, czujesz jak o 20 wzrasta Twoja maksymalna energia!";		
//             // this.state.maxEnergy = this.state.maxEnergy + 20;
//             this.setState((state) => ({
//                 maxEnergy: state.maxEnergy + 20,
//             }));
//             // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy;	
//         } else if (this.state.maxEnergy <= 200) {
//             document.getElementById("adventure2").innerHTML = "Pijąc z niego wodę, czujesz jak o 10 wzrasta Twoja maksymalna energia!";		
//             this.state.maxEnergy = this.state.maxEnergy +10;
//             // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy;	
//         } else {	
//             document.getElementById("adventure2").innerHTML = "Woda jest bardzo orzeźwiająca...";
//         }		
//     break;

//     case 6:
//     document.getElementById("adventure1").innerHTML = "Przeciskanie się wąskmi tunelami to spory wysiłek...";
//         if(this.state.maxHealth<=200)	
//             {
//             document.getElementById("adventure2").innerHTML = "+20 do maksymalnego poziomu Zycia!";		
//             // this.maxHealth = this.maxHealth + 20;
//             this.setState((state) => ({
//                 maxHealth: state.maxHealth + 20,
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;	
//             }
//         else if(this.maxHealth<=240)	
//             {
//             document.getElementById("adventure2").innerHTML = "+10 do maksymalnego poziomu Zycia!";		
//             // this.maxHealth = this.maxHealth + 10;
//             this.setState((state) => ({
//                 maxHealth: state.maxHealth + 10,
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;	
//             }		
//         else
//             {	
//             document.getElementById("adventure2").innerHTML = "... i czasem można walnąć głową w skałę";
//             }	
//     break;

//     case 7:
//     document.getElementById("adventure1").innerHTML = "Ten grzyb na ścianie wydaje się być jadalny!";
//         if(this.state.energy<=this.state.maxEnergy-80)	
//             {
//             document.getElementById("adventure2").innerHTML = "Twoja energia została zregenerowana o 80";		
//             // this.state.energy = this.state.energy + 80;
//             this.setState((state) => ({
//                 energy: state.energy + 80,
//             }));
//             // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy;	
//             }
//         else if(this.state.energy<=this.state.maxEnergy-60)	
//             {
//             document.getElementById("adventure2").innerHTML = "Twoja energia została zregenerowana o 60!";		
//             // this.state.energy = this.state.energy + 60;
//             this.setState((state) => ({
//                 energy: state.energy + 60,
//             }));
//             // document.getElementById("playerEnergy").innerHTML = "Energia: " + this.state.energy + "/" + this.state.maxEnergy;	
//             }	
//         else
//             {	
//             document.getElementById("adventure3").innerHTML = "Każdy grzyb jest jadalny - ale niektóre tylko raz...";
//             }	
//     break;
//     case 8:
//     document.getElementById("adventure1").innerHTML = "Natrafiasz na leczniczy mech skalny.";
//         if (this.state.health <= this.state.maxHealth - 100) {
//             document.getElementById("adventure2").innerHTML = "Okłady z niego sprawiają, że twoje rany goją się znacznie szybciej.<br/> Życie +100";		
//             // this.state.health = this.state.health + 100;
//             this.setState((state) => ({
//                 health: state.health + 100,
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;	
//             }
//         else if (this.state.health <= this.state.maxHealth - 60) {
//             document.getElementById("adventure2").innerHTML = "Okłady z niego sprawiają, że twoje rany goją się znacznie szybciej.<br/> Życie +60!";		
//             // this.state.health = this.state.health + 60;
//             this.setState((state) => ({
//                 health: state.health + 60,
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;	
//             }	
//         else
//             {	
//             document.getElementById("adventure3").innerHTML = "Może weźmiesz trochę na później.";
//             }	
//     break;

//     case 9:
//     document.getElementById("adventure1").innerHTML = "Dalszą drogę uniemożliwia zasypany tunel!<br>Odgarniasz kamienie gołymi rękami.";
//         if(this.state.str<60)	
//             {
//             document.getElementById("adventure2").innerHTML = "Dzięki temu twoja siła wzrasta o 8!";		
//         //    this.state.str =this.state.str + 8;
//            this.setState((state) => ({
//             str: state.str + 8,
//         }));
//             // document.getElementById("playerStr").innerHTML = "Siła: " +this.state.str;	
//             }	
//         else if(this.state.str<70)	
//             {
//             document.getElementById("adventure2").innerHTML = "Dzięki temu twoja siła wzrasta o 5!";		
//         //    this.state.str =this.state.str + 5;
//            this.setState((state) => ({
//             str: state.str + 5,
//         }));
//             // document.getElementById("playerStr").innerHTML = "Siła: " +this.state.str;	
//             }
//         else
//             {	
//             document.getElementById("adventure2").innerHTML = "Nawet się nie spociłeś...!";
//             }	
//         break;

//     case 10:
//     document.getElementById("adventure1").innerHTML = "Niechcący płoszysz gromadę nietoperzy...";
//         if(this.state.def<60)	
//             {
//             document.getElementById("adventure2").innerHTML = "Obrona przed tymi latającymi szczurami poprawia twój refleks.<br/>Obrona wzrasta o 8!";		
//             // this.def = this.def + 8;
//             this.setState((state) => ({
//                 def: state.def + 8,
//             }));
//             // document.getElementById("playerDef").innerHTML = "Obrona: " + this.def;	
//             }	
//         else if(this.state.def<80)	
//             {
//             document.getElementById("adventure2").innerHTML = "Obrona przed tymi latającymi szczurami poprawia twój refleks.<br/>Obrona wzrasta o 5!";		
//             // this.def = this.def + 5;
//             this.setState((state) => ({
//                 def: state.def + 1,
//             }));
//             // document.getElementById("playerDef").innerHTML = "Obrona: " + this.def;	
//             }
//         else
//             {	
//             document.getElementById("adventure2").innerHTML = "Następnym razem poruszaj się ostrożniej!";
//             }	
//         break;

//     case 11:
//         this.monsterStr = Math.floor((Math.random()*10)+20);		
//         this.setState((state) => ({
//             monsterStr: Math.floor((Math.random()*10)+ 20),
//         }))
//         //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Atakuje Cię Wielki Pająk!<br/> Siła: 20 - 29";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr) {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//         } else {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//         }
//     break;

//     case 12:
//     // this.monsterStr = Math.floor((Math.random()*10)+25);	
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10) + 25),
//     }));		
// //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Atakuje Cię Wielki Pająk Włochaty!<br/> Siła: 25 - 34";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr) {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//         } else {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//         }
//     break;

//     case 13:
//     // this.monsterStr = Math.floor((Math.random()*10)+30);	
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10)+ 30),
//     }));		
// //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Z góry spada na Ciebie Nietoperz Krwiopijca!<br/> Siła: 30 - 39";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;
//     case 14:
//     // this.monsterStr = Math.floor((Math.random()*10)+35);
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10) + 35),
//     }));			
// //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Z góry spada na Ciebie Zmutowany Nietoperz Jadowity!<br/> Siła: 35 - 44";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max 
//             if(this.profit>3)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 3;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +3";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Przegrywasz. <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;
//     case 15:
//     this.monsterStr = Math.floor((Math.random()*100)+100);		
//     this.setState((state) => ({
//         monsterStr: Math.floor((Math.random()*10) + 100),
//     }));	
// //	this.monsterDef = Math.floor((Math.random()*10)+0);	
//     document.getElementById("adventure1").innerHTML = "Spotykasz Martę!<br/> Siła: 100 - 199";
//     document.getElementById("adventure2").innerHTML = "Walka!<br/>Twoja siła: " +this.state.str + "<br/>Siła potwora: " + this.state.monsterStr;	
//         if(this.state.str>this.state.monsterStr)
//             {
//         //	this.profit = (this.monsterStr*3)-this.state.str; //max 
//             this.profit = (this.state.monsterStr*2)-this.state.str; //max
//             if(this.profit>0)
//                 {
//                 this.gold = this.gold + this.profit;
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +"+ this.profit;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 }
//             else
//                 {
//                 this.gold = this.gold + 1;
//                 document.getElementById("playerGold").innerHTML = "Złoto: " + this.gold;	
//                 document.getElementById("adventure3").innerHTML = "Wygrywasz.<br/>Złoto +1";
//                 }
//             }
//         else if(this.state.str<this.state.monsterStr)
//             {
//             document.getElementById("adventure3").innerHTML = "Koniec grania! <br/>Życie -" + ((this.state.monsterStr-this.state.def)*2);
//             // this.state.health = this.state.health - ((this.monsterStr-this.def)*2);
//             this.setState((state) => ({
//                 health: state.health - ((state.monsterStr - state.def) * 2),
//             }));
//             // document.getElementById("playerHealth").innerHTML = "Życie: " + this.state.health + "/" + this.maxHealth;
//             }
//         else
//             {
//             document.getElementById("adventure3").innerHTML = "Po krótkiej wymianie spojrzeń potwór odchodzi w swoją stronę.";
//             }
//     break;

//     default:
//         document.getElementById("adventure1").innerHTML = "6-10 Default Nic się nie dzieje";
//         document.getElementById("adventure2").innerHTML = "";
//         document.getElementById("adventure3").innerHTML = "";
//     break;
//     }
// }

    render() {

        // console.log(this.character.hp);
        return (
            <div id="body1">
                <div className="wewdiv" id="div1">
                    <h3>Postać</h3>		
                    {/* <p id="playerHealth">Życie: {this.state.health + "/" + this.state.maxHealth}</p> */}
                    <p id="playerHealth">Życie: {this.character.hp + "/" + this.character.maxHp}</p>
                    <p id="playerEnergy">Energia: {this.state.energy + "/" + this.state.maxEnergy}</p>
                    <p id="playerStr">Siła: {this.state.str}</p>
                    <p id="playerDef">Obrona: {this.state.def}</p>
                    {/* <p id="playerGold">Złoto: {this.props.gold}</p> */}
                    <p id="playerGold">Złoto2: {this.character.getGold()}</p>
                    <p id="playerWeapon">Broń: brak</p>
                    <p id="playerArmor">Zbroja: brak</p>
                </div>

                <div className="wewdiv" id="div2">
                    <h3>Lokacje</h3>
                    <button className="button" id="div3Button" onClick={this.goDiv3Func}>Bazar</button><br/>
                    <button className="button" id="div4Button" onClick={this.goDiv4Func}>Trening</button><br/>
                    <button className="button" id="div6Button" onClick={this.goDiv6Func}>Praca</button>
                    <h3>Wyprawy</h3>
                    <button className="button" id="loc1Button" onClick={this.goLoc1Func}>Las -10 Energii</button><br/>
                    <button className="button" id="loc2Button" onClick={this.goLoc2Func}>Jaskinia -20 Energii</button><br/><br/>
                </div>

                <div className="wewdiv" id="div3">
                    <h3>Bazar</h3>
                    <button className="button" id="swordButton" onClick={this.buySwordFunc}>Miecz Lv.1 +10 Siły(50 złota)</button><br/>
                    <button className="button" id="armorButton" onClick={this.buyArmorFunc}>Zbroja Lv.1 +10 Obrony (50 złota)</button><br/><br/>
                    <button className="button" id="healPotionButton" onClick={this.useHealPotionFunc}>Mikstura (+40 Życia - 20 Złota)</button><br/>
                    <button className="button" id="energyPotionButton" onClick={this.useEnergyPotionFunc}>Mikstura (+40 Energii -20 złota)</button><br/><br/>
                    <button className="button" id="return1Button" onClick={this.returnFunc}>Powrót</button>
                </div>

                <div className="wewdiv" id="div4">
                        <br/>
                    <h3>Trening</h3>
                    <button className="button" id="addStrButton" onClick={this.addStrFunc}>Siła +1 Złoto -1</button><br/>
                    <button className="button" id="addDefButton" onClick={this.addDefFunc}>Obrona +1 Złoto -1</button><br/><br/>
                    <button className="button" id="return2Button" onClick={this.returnFunc}>Powrót</button>
                </div>

                <div className="wewdiv" id="div5">
                    <h3>Wydarzenia</h3>
                    <p id="adventure1"></p>
                    <p id="adventure2"></p>
                    <p id="adventure3"></p>
                    <button className="button" id="return3Button" onClick={this.returnFunc}>Powrót</button>
                </div>

                <div className="wewdiv" id="div6">
                    <h3>Praca</h3>
                    <button className="button" id="workButton" onClick={this.workFunc}>Łapanie szczurów (0/100) Złoto +1 Energia -10</button><br/><br/>
                    <button className="button" id="return3Button" onClick={this.returnFunc}>Powrót</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      gold: state.adventure.gold,
    }
  };

const mapDispatchToProps = dispatch => { 
    return {
        inreaseGold: (value) => dispatch(goldIncrease(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adventure);