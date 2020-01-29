import React, { useState, useEffect, useCallback } from 'react';

import { Wrapper, PlayerSide, Button } from './styles';

import scissors from '../../assets/images/basic/scissors.png';
import rock from '../../assets/images/basic/rock.png';
import paper from '../../assets/images/basic/paper.png';

export default function Home() {
  const [players, setPlayers] = useState({
    player1: { name: 'Red', bg: 'red' },
    player2: { name: 'Blue', bg: 'blue' },
  });
  const [symbols, setSymbols] = useState({
    symbolp1: '',
    symbolp2: '',
  });
  const [basicSymbols, setBasicSymbols] = useState([
    'rock',
    'paper',
    'scissors',
  ]);
  const [customSymbols, setCustomSymbols] = useState([
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock',
  ]);

  const PlayerHand = ({ bg, symbol }) => {
    return <PlayerSide className="player" bg={bg} symbol={symbol} />;
  };

  const execGame = useCallback(() => {
    setSymbols(() => ({
      ...symbols,
      symbolp1: basicSymbols[Math.floor(Math.random() * basicSymbols.length)],
      symbolp2: basicSymbols[Math.floor(Math.random() * basicSymbols.length)],
    }));
  }, [basicSymbols, symbols]);

  return (
    <Wrapper className="App">
      <PlayerHand bg={players.player1.bg} symbol={symbols.symbolp1} />
      <PlayerHand bg={players.player2.bg} symbol={symbols.symbolp2} />
      {console.log(symbols, players)}
      <Button onClick={execGame}>Run Game</Button>
    </Wrapper>
  );
}
