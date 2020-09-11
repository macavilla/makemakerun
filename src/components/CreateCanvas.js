import React, { useState } from 'react';

function CreateCanvas(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);



    function handleChange(e) {
        const { name, value } = e.target;


        if (name === 'width') {
            setWidth(value);
        } else if (name === 'height') {
            setHeight(value)
        }
    }
    function handleClick() {
        const canvasSize = { width: width, height: height }        
        props.handleCallback(canvasSize);
    }

    return (
        <div>

            <input name="width" type="number" placeholder="width" onChange={handleChange} />
            <input name="height" type="number" placeholder="height" onChange={handleChange} />

            <button onClick={handleClick} > Create Canvas </button>

        </div>)

}

export default CreateCanvas