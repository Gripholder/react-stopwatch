import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      timer: 0,
        paused: true,
      }
      this.timerId = null
      this.timeStart = this.timeStart.bind(this)
      this.timePause = this.timePause.bind(this)
      this.timeReset = this.timeReset.bind(this)
      this.timeUpdate = this.timeUpdate.bind(this)
  }

  timeStart(e){
  if(!this.timerId){
    this.timerId = setInterval( _ => this.timeUpdate(), 1000 )
  } else {
    clearInterval(this.timerId)
    this.timerId = null
    this.timerId = setInterval(_ => this.timeUpdate(), 1000)
  }
}

timePause(e){
  clearInterval(this.timerId)
  this.setState({
    paused: true
  })
}

timeReset(e){
  clearInterval(this.timerId)
  this.setState({
    timer: 0,
    paused: false
  })
}

  timeUpdate(){
   this.setState({
     timer: this.state.timer + 1,
     paused: false,
   })
 }

  render() {
    var timer = this.state.timer
    return (
      <div className="stopwatch">
        <h1>{timer}</h1>
        <div className="controls">
          <button onClick={ e => this.timeReset(e) }>Reset</button>
          <button onClick={ e => this.timeStart(e) }>Start</button>
          <button onClick={ e => this.timePause(e) }>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
