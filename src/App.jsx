import React from 'react';
import './App.css';
import Timer from './components/Timer';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
      <div id="app">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MEDITATION MOMENT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  { showTimer === true && <Timer />}
                </Typography>
              </CardContent>
            </CardActionArea>

            <Button
            variant="contained"
            onClick={this.toggleTimer}
          >
            { showTimer ? 'ESCONDER TIMER' : 'LIGAR TIMER' }
          </Button>
          </Card>
      </div>
    );
  }
}

export default App;
