import React from 'react';
import p5 from 'p5';
// import Sketch from "./SketchFunctional"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {
     p.setup = () => {
      p.createCanvas(this.props.width, this.props.height);
      p.frameRate(30);
    }

     p.draw = () => {
      p.background([150, 10, 10]);
    }
    console.log('after draw');
  }

  RemoveSketch = (p) => {
    p.remove();
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }




  render() {
    return (
  
      <div className={'awesome canvas'} ref={this.myRef}>
        {/* <Sketch /> */}

      </div>
    )
  }
}


export default Canvas;