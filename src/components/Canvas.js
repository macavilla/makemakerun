import React from 'react';
import p5 from 'p5';

// STEP 1: We save our sketch in a function that takes in a P5 sketch object. 
// STEP 2: We created a reference node in our constructor called "this.myRef". 
// STEP 3: Then in our render, we have a div that is the reference node we declared in the constructor.
// STEP 4: We declare the creation of a new p5 object, giving it our Sketch function (from STEP 1), 
// and the reference node (from step 2 and 3). 


class Canvas extends React.Component {
  constructor(props) {
    super(props)
    // STEP 2: our instance needs some reference node to stand as its parent.
    this.state = {
      
    }
    this.myRef = React.createRef()
  }

  Sketch = (p) => {

    // STEP 1:the setup and draw functions work exactly as they do in regular P5
     p.setup = () => {
      p.createCanvas(720, 400);
      p.frameRate(30);
    }

     p.draw = () => {
      p.background([150, 10, 10]);
    }
  }

  // STEP 4: I declare the creation of the new P5 object and the reference node here 
  // so that mounting kicks off the attachment of my P5 sketch.

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      // STEP 3: We will use this reference node to attach whatever we want for our P5 sketch to the DOM. 
      <div className={'awesome canvas'} ref={this.myRef}>

      </div>
    )
  }
}


export default Canvas;