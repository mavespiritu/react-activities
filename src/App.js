
import './App.css';
import PlayerFunction from './components/PlayerFunction';
import {useState} from 'react';

function App() {
  const [players, setPlayers] = useState([
    {name: 'Jordan', number: 23},
    {name: 'James', number: 23},
    {name: 'Bryant', number: 24},
]);

  let playersDisplay = players.map(player => <PlayerFunction name={player.name} number={player.number} />)

  return (
    <div className="App">
      <header className="App-header">
      {playersDisplay}
      </header>
    </div>
  );
}

export default App;
