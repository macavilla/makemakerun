import React, { useState } from 'react';

function CreateCanvas(props) {

    const [width, setWidth] = useState(720);
    const [height, setHeight] = useState(400);



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
        console.log('handleClick CreateCanvas');
        
        console.log('width: ', width);
        console.log('height: ', height);

        props.handleCallback(canvasSize);


        console.log('acá iría el handlecallback');
    }

    return (
        <div>

            <input name="width" type="number" placeholder="width" onChange={handleChange} />
            <input name="height" type="number" placeholder="height" onChange={handleChange} />

            <button onClick={handleClick} > Create Canvas </button>

        </div>)

}

export default CreateCanvas