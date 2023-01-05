import React from "react";

const ONE_SECOND = 1000;
const TIME_LIMIT = 5;

class Timer extends React.Component {

  constructor() {
    super();
    console.log('constructor()');
  };

  state = {
    seconds: 0,
    phases: ['Inspira...', 'Segura...', 'Expira...'],
    currentPhaseIndex: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);
  };

  componentDidUpdate() {
    const { seconds } = this.state;

    if (seconds === TIME_LIMIT) {
      this.setState((prevState) => {
        const previousIndex = prevState.currentPhaseIndex;

        return {
          seconds: 0,
          currentPhaseIndex: previousIndex < 2 ? previousIndex + 1 : 0,
        }
      })
    }
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  };

  render() {
    const { seconds, phases, currentPhaseIndex } = this.state;

    return (
      <div>
        <h2>{ phases[currentPhaseIndex] }</h2>
        <h1>{ seconds }</h1>
      </div>
    )
  }
}

export default Timer;