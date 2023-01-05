import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {

  state = {
    showTimer: false,
  };

  toggleTimer = () => {
    this.setState((prevState) => {
      const previousShowTimer = prevState.showTimer;

      return {
        showTimer: !previousShowTimer
      }
    });
  };

  render() {
    const { showTimer } = this.state;

    return (
      <div>
        <header>
          <h1>
            MEDITATION MOMENT
          </h1>
        </header>

        { showTimer === true && <Timer />}

        <button onClick={this.toggleTimer}>
          { showTimer ? 'ESCONDER TIMER' : 'LIGAR TIMER' }
        </button>
      </div>
    );
  }
}

export default App;
