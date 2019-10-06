import React from 'react';

const BoardNumbers = (props) => {

    return (
        <table id="secTab">
            <tr>
                <td><button className="resNum" type="button" onClick={() => props.onclick(1)}>1</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(2)}>2</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(3)}>3</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(4)}>4</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(5)}>5</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(6)}>6</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(7)}>7</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(8)}>8</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(9)}>9</button></td>
                <td><button className="resNum" type="button" onClick={() => props.onclick(0)}>0</button></td>
            </tr>
        </table>
    )

}

export default BoardNumbers;