import React, { Component } from 'react';

const subjects = {
    notSelected:  "",
    addingEasy: "Dodawanie do 20",
    addingHard: "Dodawanie do 200",
    mnozenie: "Mnożenie",
};

const CurrentTask = ({ taskType }) => {
   
    return (
        <div>
            <h1>Lekcja</h1>
            <h2 id="temath2" align="left">Temat: {subjects[taskType]}</h2>
        </div>
    )
    
}

export default CurrentTask;