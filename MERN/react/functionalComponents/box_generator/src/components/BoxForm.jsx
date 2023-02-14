import React from "react";
import { useState } from "react";

const BoxForm = props => {
    const [boxs, setBoxs] = useState([{color:"red",size:200}]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState();

    const submitBox = (e) => {
        e.preventDefault();
        const numSize = parseInt(size);
        if (isColor(color)) setBoxs([...boxs, {color,size:numSize}])
        setColor('');
        setSize('');
    }

    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }

    return (
        <>
            <form action="">
                <div className="row">
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div className="row">
                    <label htmlFor="size">Size in px:</label>
                    <input type="number" name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}/>
                </div>
                <div className="row">
                    <button onClick={(e) => submitBox(e)}>Submit</button>
                </div>
            </form>
            <hr />
            <div className="boxes">
                {boxs.map((box, i) => {
                    return (
                    <div className="box" key={i} style={{background:box.color, height:box.size, width:box.size}}></div>)
                })}
            </div>
        </>
    );
}

export default BoxForm;