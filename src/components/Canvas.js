import React from 'react';
import p5 from 'p5';

class CanvasExample extends React.Component {
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
  }


  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
  
      <div className={'awesome canvas'} ref={this.myRef}>

      </div>
    )
  }
}


export default CanvasExample;