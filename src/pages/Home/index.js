/* eslint-disable no-console */
import React, { useState, useCallback } from 'react';

import { sum } from 'mathjs';

import { Wrapper, PlayerSide, Button } from './styles';

export default function Home() {
  const [players, setPlayers] = useState({
    player1: { name1: 'Red', bg1: 'red', score1: 1 },
    player2: { name2: 'Blue', bg2: 'blue', score2: 1 },
    bestOf: 3,
  });
  const [messages, setMessages] = useState({
    message: '',
  });
  const [symbols, setSymbols] = useState({
    symbolp1: '',
    symbolp2: '',
  });
  const [prevSymbols, setprevSymbols] = useState({
    psymbolp1: '',
    psymbolp2: '',
  });

  const [modes, setModes] = useState({
    game: 'custom', // regular, custom, end (This one is to avoid the game to continue)
    playerType: 'computer', // player, computer, advComputer
  });
  const [customSymbols, setCustomSymbols] = useState([
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock',
  ]);

  const calculateWinner = useCallback(() => {
    const { symbolp1, symbolp2 } = symbols;
    const { message } = messages;
    const { psymbolp1, psymbolp2 } = prevSymbols;
    setprevSymbols(() => ({
      psymbolp1: symbolp1,
      psymbolp2: symbolp2,
    }));

    const {
      player1: { name1, score1 },
      player2: { name2, score2 },
      bestOf,
    } = players;

    if (symbolp1 === '' || symbolp2 === '') {
      // do nothing
    } else if (symbolp1 === symbolp2) {
      setMessages({
        message: 'draw, no points added',
      });
    } else if (
      (symbolp1 === 'rock' && symbolp2 === 'scissors') ||
      (symbolp1 === 'scissors' && symbolp2 === 'lizard') ||
      (symbolp1 === 'lizard' && symbolp2 === 'paper') ||
      (symbolp1 === 'paper' && symbolp2 === 'spock') ||
      (symbolp1 === 'spock' && symbolp2 === 'rock') ||
      (symbolp1 === 'rock' && symbolp2 === 'lizard') ||
      (symbolp1 === 'scissors' && symbolp2 === 'paper') ||
      (symbolp1 === 'lizard' && symbolp2 === 'spock') ||
      (symbolp1 === 'paper' && symbolp2 === 'spock') ||
      (symbolp1 === 'spock' && symbolp2 === 'scissors')
    ) {
      setPlayers({
        ...players,
        player1: { ...players.player1, score1: sum(score1, 1) },
      });
      setMessages({
        message: `Player ${name1} win this round.`,
      });
    } else {
      setPlayers({
        ...players,
        player2: { ...players.player2, score2: sum(score2, 1) },
      });
      setMessages({
        message: `Player ${name2} win this round.`,
      });
    }

    console.log(bestOf);
    console.log(score1);
    console.log(score2);
    if (
      bestOf === score1 + score2 ||
      score1 - bestOf === 1 ||
      score2 - bestOf === 1
    ) {
      if (score1 > score2) {
        setModes({ ...modes, game: 'end' });
        setMessages({
          message: `Game ended, player ${name1} won the game!`,
        });
      }
      if (score2 > score1) {
        setModes({ ...modes, game: 'end' });
        setMessages({
          message: `Game ended, player ${name2} won the game!`,
        });
      }
    }

    // console.log('Depois');
    // console.log(`1 ${symbolp1}`);
    // console.log(`2 ${symbolp2}`);
    // console.log(`3 ${psymbolp1}`);
    // console.log(`4 ${psymbolp2}`);
    // console.log(`5 ${modes.game} ${modes.playerType}`);
    // console.log(`6 ${message}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbols, modes, messages]);

  document.onkeydown = keydown => {
    if (
      // This Main IF is to avoid use of the following keys along with
      // predefined keys
      keydown.ctrlKey === false &&
      keydown.shiftKey === false &&
      keydown.altKey === false &&
      keydown.metaKey === false &&
      keydown.repeat === false
    ) {
      if (modes.game === 'regular' || modes.game === 'custom') {
        if (keydown.code === 'Digit1') {
          if (modes.playerType === 'player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'advComputer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
            // add logic to use:
            // The tactical computer player should always select the choice that would have beaten its last choice,
            // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
            // player’s move into account.
            // Check function getLastMove() to add this level of complexity
          }
        }
        if (keydown.code === 'Digit2') {
          if (modes.playerType === 'player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'advComputer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
        }
        if (keydown.code === 'Digit3') {
          if (modes.playerType === 'player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'advComputer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
        }
      }
      if (modes.game === 'custom') {
        if (keydown.code === 'Digit4') {
          if (modes.playerType === 'player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'advComputer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
        }
        if (keydown.code === 'Digit5') {
          if (modes.playerType === 'player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'advComputer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
        }
      }

      // second player code
      // separated it to avoid confusion
      if (
        (modes.game === 'regular' || modes.game === 'custom') &&
        modes.playerType === 'player'
      ) {
        if (keydown.code === 'Numpad1') {
          setSymbols(() => ({
            ...symbols,
            symbolp2: customSymbols[0],
          }));
        }
        if (keydown.code === 'Numpad2') {
          setSymbols(() => ({
            ...symbols,
            symbolp2: customSymbols[1],
          }));
        }
        if (keydown.code === 'Numpad3') {
          setSymbols(() => ({
            ...symbols,
            symbolp2: customSymbols[2],
          }));
        }
      }

      if (modes.game === 'custom' && modes.playerType === 'player') {
        if (keydown.code === 'Numpad4') {
          setSymbols(() => ({
            ...symbols,
            symbolp2: customSymbols[3],
          }));
        }
        if (keydown.code === 'Numpad5') {
          setSymbols(() => ({
            ...symbols,
            symbolp2: customSymbols[4],
          }));
        }
      }
    }
    calculateWinner();
  };

  const resetGame = useCallback(() => {
    // nested object literal
    setSymbols(() => ({
      symbolp1: '',
      symbolp2: '',
    }));
  }, []);

  const PlayerHand = ({ bg, symbol }) => {
    return <PlayerSide className="player" bg={bg} symbol={symbol} />;
  };
  return (
    <>
      <Wrapper className="App">
        <PlayerHand bg={players.player1.bg1} symbol={symbols.symbolp1} />
        <PlayerHand bg={players.player2.bg2} symbol={symbols.symbolp2} />
        {console.log(symbols, players, messages)}
        <Button onClick={resetGame}>Reset Game</Button>
      </Wrapper>
    </>
  );
}
