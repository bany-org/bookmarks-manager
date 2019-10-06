import React from 'react';

import TASKS from '../../config';



const Subjects = (props) => {



    return (
        <div>
            <h1 align="center">Tematy:</h1>
            <button className="resNum" onClick={() => props.change("addingEasy")}>1. Łatwe dodawanie</button>
            <br/><br/>
            <button className="resNum" onClick={() => props.change("addingHard")}>2. Trudne dodawanie</button>
            <br/><br/>
            <button className="resNum" onClick={props.odejmowanie} disabled>3. Odejmowanie</button>
            <br/><br/>
            <button className="resNum" onClick={() => props.change("mnozenie")}>4. Mnożenie</button>
            <br/><br/>
            <button className="resNum" onClick={() => props.change("dzielenie")} disabled>5. Dzielenie</button>
        </div>
    )

}

export default Subjects;