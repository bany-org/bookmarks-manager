import React, { Component } from 'react';

import Results from './components/Results/Results';
import Subjects from './components/Subjets/Subjets';
import LastAnswerOpinion from './components/LastAnswerOpinion/LastAnswerOpinion';
import CurrentTask from './components/CurrentTask/CurrentTask';
import BoardNumbers from './components/BoardNumbers/BoardNumbers';
import InputField from './components/InputField/InputField';

import './MathLesson.css';

// const wyniki = () => {
//     if (stat<=100 && stat>=90) {
//         document.getElementById("ocena").innerHTML = "bardzo dobry";
//     } else if (stat<90 && stat>=70) {
//         document.getElementById("ocena").innerHTML = "dobry";
//     } else if(stat<70 && stat>=50) {
//         document.getElementById("ocena").innerHTML = "dostateczny";
//     } else if (stat<50 && stat>=30) {
//         document.getElementById("ocena").innerHTML = "dopuszczający";
//     } else if(stat<30 && stat>=0) {
//         document.getElementById("ocena").innerHTML = "niedostateczny";
//     } else {
//         document.getElementById("ocena").innerHTML = "brak danych";	
//     }
// }	

    var mno = 10;
    var odp;
    var c;
    var d;
    var ocena;
    // var inter1 = setInterval(wyniki,100);

    // const taskTypes = [
    //     "notSelected",
    //     "addingEasy",
    //     "addingHard",
    // ];

    const taskTypes = {
        addingEasy: {
            subject: "22222",
            mno: 10,
            sign: "+",
        },
        addingHard: {
            subject: "33333",
            mno: 100,
            sign: "+",
        },
        mnozenie: {
            subject: "4444",
            mno: 10,
            sign: "*",
        },
    };

class MathLesson extends Component {

    state = {
        attempts: 0,
        points: 0,
        currentTaskType: "addingEasy",
        lastAnswer: null,
        lastAnswerCorrect: true,
    }

    componentWillReceiveProps(nextProps, prevProps) {
        if (nextProps !== prevProps) {
            this.generateNewNumbers();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleShortcuts)
        const num = this.generateNewNumbers('addingEasy');
        this.setState({
            x: num.x,
            y: num.y,
            z: num.z,
            sign: num.sign,
        });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleShortcuts)
    }

    generateRandomNumber = (multiply) => {
        return Math.round(Math.random()*multiply);
    };

    generateNewNumbers = (task) => {
        let mno = taskTypes[task]["mno"];
        let sign = taskTypes[task]["sign"];

        let x = this.generateRandomNumber(mno);
        let y = this.generateRandomNumber(mno);
        let z = 0;

        switch(sign) {
            case '+':
                z = x + y;
                break;
            case '-':
                z = x - y;
                break;
            case '*':
                z = x * y;
                break;

            default:
                break;
        }

        return ({
            x: x,
            y: y,
            z: z,
            sign: sign,
        })
    }

    myFunction1 = (prawidlowa) => {
        odp = document.getElementById("inpNum").value;

        if (odp == prawidlowa) {
            const num = this.generateNewNumbers(this.state.currentTaskType);
     
            this.setState({
                x: num.x,
                y: num.y,
                z: num.z,
                sign: num.sign,
                points: this.state.points + 1,
                lastAnswerCorrect: true,
                attempts: this.state.attempts + 1
            });
        } else {
            this.setState({
                lastAnswerCorrect: false,
                attempts: this.state.attempts + 1
            });
        }
        document.getElementById("inpNum").value = "";
    }   

    clearLastAnswerState = () => {
        this.setState({
            lastAnswer: null,
            lastAnswerCorrect: null,
        })
    }

    changeTask = (task) => {
        if (task !== this.state.currentTaskType) {
            const num = this.generateNewNumbers(task);
            this.setState({
                x: num.x,
                y: num.y,
                z: num.z,
                sign: num.sign,
                currentTaskType: task,
            })
        }
    }

    // dodlat = () => {
    //     this.setState({
    //         currentTaskType: "addingEasy",
    //     })
    // }
    
    // dodtru = () => {
    //     this.setState({
    //         currentTaskType: "addingHard",
    //     });
    // }

    // mnozenie = () => {
    //     this.setState({
    //         currentTaskType: "mnozenie",
    //     })
    // }

    // odejmowanie = () => {
    //     this.setState({subject: "Temat: Odejmowanie."})
    //     this.setState({mno: 100});
    //     this.setState({rodzaj: 4});
    //     this.setState({x: this.generateRandomNumber(this.state.mno)});
    //     this.setState({y: this.generateRandomNumber(this.state.mno)});
    //         if(this.state.x < this.state.y)
    //         {
    //             c = this.state.x;
    //             this.setState({x: this.state.y});
    //             this.setState({y: c});
    //         }
    //     this.setState({z: this.state.x - this.state.y});
    //     this.setState({sign: '-'});
    //     this.clearLastAnswerState();
    // }	

    // dzielenie = () => {
    //     this.setState({subject: "Temat: Dzielenie."})
    //     this.setState({mno: 10});
    //     this.setState({rodzaj: 5});
    //     this.setState({x: this.generateRandomNumber(this.state.mno) + 1});
    //     this.setState({y: this.generateRandomNumber(this.state.mno) + 1});
    //     d = this.state.x * this.state.y;
    //     this.setState({z: this.state.x});
    //     this.setState({sign: '/'});
    //     this.clearLastAnswerState();
    // }
    
    refresh = () =>{
        // location.reload();
    }

    onNumberClick = (number) => {
        document.getElementById("inpNum").value = document.getElementById("inpNum").value + number;
    }

    myFunction2 = () => {
        document.getElementById("inpNum").value = "";
    }	

    handleShortcuts = (event) => {
        const pressedKeyCode = event.keyCode;
        const asciTable = {
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
        }

        if (asciTable[pressedKeyCode]) {
            document.getElementById("inpNum").value = document.getElementById("inpNum").value + asciTable[pressedKeyCode]
        } else if (pressedKeyCode == 13) {
            document.getElementById('subBut').click();
        } else if (pressedKeyCode == 8) {
            document.getElementById("inpNum").value = "";
        }
        
        return false;
    }

    // function actTime() {
    //     var d = new Date();
    //     var hours = d.getHours();
    //     var minutes = d.getMinutes();
        
    //         if (minutes < 10) {
    //             minutes = "0" + minutes;
    //         }	
    //         document.getElementById("timeDiv").innerHTML = hours + ":" + minutes;
    // }
    // setInterval(actTime,1000);	
    
    onInputChange = (e) => {
        console.log(e.target.value)
    }

    render() { 

        // const num = this.generateNewNumbers();
        const popodp = this.state.z;
        const zadanie = `${this.state.x} ${this.state.sign} ${this.state.y} = `
        
		
    return (
        <div>
            <table id="mainTab">
				<tr>
					<td colspan="3" id="tdPole1">
						<div id="timeDiv"></div>
					</td>
				</tr>
				
				<tr>
					<td id="tdPole2">
                        <Subjects 
                            change={(task) => this.changeTask(task)}
                        />
					</td>
					
					<td id="tdPole3">
                     
                        <CurrentTask  // subject only
                            taskType={this.state.currentTaskType}
                        />

						<p id="zadanie" align="center">{zadanie}</p>
						<input 
                            id="inpNum" 
                            type="text" 
                            size="4" 
                            maxlength="4" 
                            autocomplete="" 
                            onChange={this.onInputChange} 
                            value={this.state.currentAnswer}>
                            </input><br/>
                        {/* <InputField 
                            onCheck={}
                        /> */}

                        <BoardNumbers 
                            onclick={(number) => this.onNumberClick(number)}
                        />

                        <button type="button" id="backBut" onClick={this.myFunction2}>Zetrzyj</button>
                        <button type="button" id="subBut" onClick={() => this.myFunction1(popodp)}>Sprawdź</button>
					</td>
					<td id="tdPole4">
                        <Results 
                            attempts={this.state.attempts}
                            points={this.state.points}
                        />
					</td>
				</tr>
				<tr>
					<td colspan="3" id="tdPole5">
					{/* <button id="resButton" onClick={this.refresh}>Zacznij od nowa</button> */}
					{/* <a href="https://bany.pc.pl/main-page/index.html">Powrót</a> */}
					</td>
				</tr>
			</table>
            <LastAnswerOpinion 
                lastAnswerCorrect={this.state.lastAnswerCorrect}
                lastAnswer={this.state.lastAnswer}
                correctAnswer={popodp}
            />
        </div>
    )
}
};

export default MathLesson;