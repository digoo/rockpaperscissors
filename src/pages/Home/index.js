/* eslint-disable no-console */
import React, { useState, useCallback, useEffect } from 'react';

import { sum } from 'mathjs';

import { Wrapper, BestOf, PlayerSide, Scorebox, Button } from './styles';

export default function Home() {
  // Begin of state area
  const [players, setPlayers] = useState({
    player1: { name1: 'Red', bg1: 'red' },
    player2: { name2: 'Blue', bg2: 'blue' },
    bestOf: 3,
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const [scores, setScores] = useState({
    score1: 0,
    score2: 0,
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const [messages, setMessages] = useState({
    message: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const [messages2, setMessages2] = useState({
    messageFinal: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('messages', JSON.stringify(messages2));
  }, [messages2]);

  // This state will be used to show the current symbol
  const [symbols, setSymbols] = useState({
    symbolp1: '',
    symbolp2: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('symbols', JSON.stringify(symbols));
  }, [symbols]);

  // This state is to show what was the previous symbol, to be used by advanced computer
  const [prevSymbols, setPrevSymbols] = useState({
    psymbolp1: '',
    psymbolp2: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('prevSymbols', JSON.stringify(prevSymbols));
  }, [prevSymbols]);

  // This state should be used to evaluate the score
  const [gameSymbols, setGameSymbols] = useState({
    gsymbolp1: '',
    gsymbolp2: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('gameSymbols', JSON.stringify(gameSymbols));
  }, [gameSymbols]);

  // This state define the modes, the modes are self-described below
  const [modes, setModes] = useState({
    game: 'custom', // regular, custom, end (This one is to avoid the game to continue)
    playerType: 'computer', // player, computer, advComputer
    play: 'play', // play, pause, end
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('modes', JSON.stringify(modes));
  }, [modes]);

  // this state <must has the name changed in the future> are used to define as the array of symbols and should be populate by the option the
  // player want to play, if regular or adv/custom
  const [customSymbols, setCustomSymbols] = useState([
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock',
  ]);
  useEffect(() => {
    // Adding values to the localStorage
    // should be realocated to different page or header/menu/etc
    localStorage.setItem('customSymbols', JSON.stringify(customSymbols));
  }, [customSymbols]);

  // End of State Area

  // previous Symbols
  const prevSym = () => {
    const storageSymbols = localStorage.getItem('symbols');
    console.log(`storageSymbols: ${storageSymbols}`);
    const parsedStorageSymbols = JSON.parse(storageSymbols);

    setPrevSymbols({
      psymbolp1: parsedStorageSymbols.symbolp1,
      psymbolp2: parsedStorageSymbols.symbolp2,
    });
  };

  // Pausing the round to avoid uncontrolled continuous play
  useEffect(() => {
    const resetRound = () => {
      if (
        messages.message !== '' &&
        messages.message !== 'Reseting the game after 2 seconds.' &&
        messages2.messageFinal === ''
      ) {
        setModes({ ...modes, play: 'pause' });
        setTimeout(() => {
          setMessages({
            ...messages,
            message: `Reseting the game after 2 seconds.`,
          });
        }, 2000);
        setTimeout(() => {
          prevSym();
          setSymbols({
            symbolp1: '',
            symbolp2: '',
          });
          setMessages({ ...messages, message: '' });
          setModes({ ...modes, play: 'play' });
        }, 4000);
      }
      if (messages2.messageFinal !== '') {
        setModes({ ...modes, play: 'end' });
      }
    };
    resetRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages2, messages]);

  // Set winner of the game
  useEffect(() => {
    const {
      player1: { name1 },
      player2: { name2 },
      bestOf,
    } = players;
    const { score1, score2 } = scores;

    if (
      bestOf === score1 + score2 ||
      score1 > bestOf / 2 ||
      score2 > bestOf / 2
    ) {
      if (score1 > score2) {
        setModes({ ...modes, play: 'end' });
        setMessages2({
          ...messages2,
          messageFinal: `Game ended, player ${name1} win the game!`,
        });
      }
      if (score2 > score1) {
        setModes({ ...modes, play: 'end' });
        setMessages2({
          ...messages2,
          messageFinal: `Game ended, player ${name2} win the game!`,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scores]);

  useEffect(() => {
    const calculateWinner = () => {
      // Loading values
      const { symbolp1, symbolp2 } = symbols;
      const { gsymbolp1, gsymbolp2 } = gameSymbols;
      const { psymbolp1, psymbolp2 } = prevSymbols;

      setGameSymbols({
        ...gameSymbols,
        gsymbolp1: symbolp1,
        gsymbolp2: symbolp2,
      });
      console.log(`gsymbolp1: ${gsymbolp1}`);
      console.log(`gsymbolp2: ${gsymbolp2}`);

      localStorage.setItem('prevP1', symbolp1);
      localStorage.setItem('prevP2', symbolp2);

      const {
        player1: { name1 },
        player2: { name2 },
        // bestOf,
      } = players;
      const { score1, score2 } = scores;

      // Logic of winner begin here
      if (symbolp1 === '' || symbolp2 === '') {
        // do nothing
      } else if (symbolp1 === symbolp2) {
        setMessages({
          ...messages,
          message: 'draw, no points added.',
        });
      } else if (
        (symbolp1 === 'rock' && symbolp2 === 'scissors') ||
        (symbolp1 === 'rock' && symbolp2 === 'lizard') ||
        (symbolp1 === 'paper' && symbolp2 === 'rock') ||
        (symbolp1 === 'paper' && symbolp2 === 'spock') ||
        (symbolp1 === 'scissors' && symbolp2 === 'lizard') ||
        (symbolp1 === 'scissors' && symbolp2 === 'paper') ||
        (symbolp1 === 'lizard' && symbolp2 === 'paper') ||
        (symbolp1 === 'lizard' && symbolp2 === 'spock') ||
        (symbolp1 === 'spock' && symbolp2 === 'rock') ||
        (symbolp1 === 'spock' && symbolp2 === 'scissors')
      ) {
        setScores({
          ...scores,
          score1: sum(score1, 1),
        });
        setMessages({
          ...messages,
          message: `Player ${name1} won this round.`,
        });
      } else {
        setScores({
          ...scores,
          score2: sum(score2, 1),
        });
        setMessages({
          ...messages,
          message: `Player ${name2} won this round.`,
        });
      }
    };
    calculateWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbols]);

  document.onkeydown = keydown => {
    const { play } = modes;
    if (
      // This Main IF is to avoid use of the following keys along with
      // predefined keys
      keydown.ctrlKey === false &&
      keydown.shiftKey === false &&
      keydown.altKey === false &&
      keydown.metaKey === false &&
      keydown.repeat === false &&
      play === 'play'
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
  };

  const resetGame = useCallback(() => {
    // nested object literal
    setSymbols(() => ({
      symbolp1: '',
      symbolp2: '',
    }));
    setPrevSymbols({
      psymbolp1: '',
      psymbolp2: '',
    });
    setModes({ ...modes, play: 'play' });
    setMessages({
      message: '',
    });
    setMessages2({
      messageFinal: '',
    });
    setScores({
      score1: 0,
      score2: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PlayerHand = ({ bg, symbol }) => {
    return <PlayerSide className="player" bg={bg} symbol={symbol} />;
  };
  return (
    <>
      {console.log(symbols, players, messages)}
      <BestOf>BestOf: {players.bestOf}</BestOf>
      <Wrapper className="App">
        <div className="sides">
          <PlayerHand
            bg={players.player1.bg1}
            symbol={symbols.symbolp1 ? symbols.symbolp1 : prevSymbols.psymbolp1}
          />
          <Scorebox>{scores.score1}</Scorebox>
        </div>
        <div className="sides">
          <PlayerHand
            bg={players.player2.bg2}
            symbol={symbols.symbolp2 ? symbols.symbolp2 : prevSymbols.psymbolp2}
          />
          <Scorebox>{scores.score2}</Scorebox>
        </div>
        <div className="message">
          <p>
            {messages2.messageFinal ? messages2.messageFinal : messages.message}
          </p>
        </div>
        <Button onClick={resetGame}>Reset Game</Button>
      </Wrapper>
    </>
  );
}
