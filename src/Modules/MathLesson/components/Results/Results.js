import React from 'react';

const Results = (props) => {

    const correct = Math.round((props.points/props.attempts * 100))

    return (
        <div>
            <h1>Twój wynik</h1>
            <p id="queNum">Ilość prób: {props.attempts}</p>
            <p id="pktNum">Twój wynik: {props.points} pkt.</p>
            <p id="statPar">Poprawnych odpowiedzi: {correct}%</p>
            <p>Ocena:</p>
            <p id="ocena"></p>
        </div>
    )

}

export default Results;