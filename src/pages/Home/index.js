import React, { useState, useCallback, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';

import { Wrapper } from './styles';
import regular from '../../assets/images/regular.jpg';
import thebigbangtheory from '../../assets/images/thebigbangtheory.jpg';

const schema = Yup.object().shape({
  player1Name: Yup.string().required('Player name is required.'),
  player2Name: Yup.string().required('Player name is required.'),
});

export default function Home() {
  const [players, setPlayers] = useState({
    player1: { name1: '', bg1: '' },
    player2: { name2: '', bg2: '' },
    bestOf: 3,
  });
  // ComponentDidMount getting all data we have previous added
  useEffect(() => {
    const getPlayers = JSON.parse(localStorage.getItem('players'));

    if (getPlayers) {
      setPlayers(getPlayers);
    }
  }, []);
  // Player colors
  const [flags] = useState([
    'Red',
    'Blue',
    'Orange',
    'Green',
    'Yellow',
    'Pink',
  ]);
  const handleFlagP1Change = useCallback(
    event => {
      setPlayers({
        ...players,
        player1: { ...players.player1, bg1: event.target.value },
      });
    },
    [players]
  );
  const handleFlagP2Change = useCallback(
    event => {
      setPlayers({
        ...players,
        player2: { ...players.player2, bg2: event.target.value },
      });
    },
    [players]
  );
  // End of player colors

  const handleNameP1Change = useCallback(
    event => {
      setPlayers({
        ...players,
        player1: { ...players.player1, name1: event.target.value },
      });
    },
    [players]
  );
  const handleNameP2Change = useCallback(
    event => {
      setPlayers({
        ...players,
        player2: { ...players.player2, name2: event.target.value },
      });
    },
    [players]
  );
  // End of player name
  // Set BestOf
  const [bestOfs] = useState([3, 5, 7, 9, 11, 13, 15]);
  const handlBestOfChange = useCallback(
    event => {
      setPlayers({ ...players, bestOf: event.target.value });
    },
    [players]
  );
  // End of BestOf

  // Game Mode
  const [gameTypes] = useState(['Normal', 'TheBigBangTheory']);
  const [playerTypes] = useState(['Player', 'Computer', 'AdvComputer']);
  const [basicSymbols] = useState(['rock', 'paper', 'scissors']);
  const [customSymbols] = useState([
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock',
  ]);
  const [gamesMode, setGamesMode] = useState({
    game: 'Normal',
    playerType: 'Computer',
    play: 'play',
  });
  const handleGameTypeChange = useCallback(
    event => {
      setGamesMode({ ...gamesMode, game: event.target.value });
    },
    [gamesMode]
  );
  const handlePlayerTypeChange = useCallback(
    event => {
      setGamesMode({ ...gamesMode, playerType: event.target.value });
    },
    [gamesMode]
  );
  // End of game mode

  const handleSubmit = () => {
    // event.preventDefault();

    localStorage.setItem('modes', JSON.stringify(gamesMode));
    if (gamesMode.game === 'Normal') {
      localStorage.setItem('customSymbols', JSON.stringify(basicSymbols));
    } else if (gamesMode.game === 'TheBigBangTheory') {
      localStorage.setItem('customSymbols', JSON.stringify(customSymbols));
    }
    localStorage.setItem('players', JSON.stringify(players));
    history.push('/rockpaperscissors/game');
  };

  return (
    <>
      <Wrapper className="all">
        <div>
          <strong>Normal Game</strong>
          <img src={regular} alt="Normal game" />
        </div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <p>Name of the Player 1:</p>
          <Input
            type="text"
            name="player1Name"
            id="player1Name"
            onChange={handleNameP1Change}
            value={players.player1.name1}
            placeholder="Please add a player name"
          />
          <p>Name of the Player 2:</p>
          <Input
            type="text"
            name="player2Name"
            id="player2Name"
            onChange={handleNameP2Change}
            value={players.player2.name2}
            placeholder="Please add a player name"
          />
          <p>Color flag of the Player 1:</p>
          <select value={players.player1.bg1} onChange={handleFlagP1Change}>
            {flags.map(flag => (
              <option key={flag} value={flag}>
                {flag}
              </option>
            ))}
          </select>
          <p>Color flag of the Player 2:</p>
          <select value={players.player2.bg2} onChange={handleFlagP2Change}>
            {flags.map(flag => (
              <option key={flag} value={flag}>
                {flag}
              </option>
            ))}
          </select>
          <p>How long you want to play? Set the bestOf:</p>
          <select value={players.bestOf} onChange={handlBestOfChange}>
            {bestOfs.map(bestOf => (
              <option key={bestOf} value={bestOf}>
                {bestOf}
              </option>
            ))}
          </select>
          <p>What kind of game you want to play? (Instructions on edges)</p>
          <select value={gamesMode.game} onChange={handleGameTypeChange}>
            {gameTypes.map(gameType => (
              <option key={gameType} value={gameType}>
                {gameType}
              </option>
            ))}
          </select>
          <p>Would you like to play against who?</p>
          <select
            value={gamesMode.playerType}
            onChange={handlePlayerTypeChange}
          >
            {playerTypes.map(playerType => (
              <option key={playerType} value={playerType}>
                {playerType}
              </option>
            ))}
          </select>
          <button type="submit">Let&apos;s play!</button>
        </Form>
        <div>
          <strong>The big bang theory Game</strong>
          <img src={thebigbangtheory} alt="The big bang theory game" />
        </div>
      </Wrapper>
    </>
  );
}
