/* eslint-disable no-console */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { sum } from 'mathjs';
import history from '../../services/history';

import {
  Container,
  Wrapper,
  BestOf,
  PlayerSide,
  Scorebox,
  Button,
} from './styles';

export default function Game() {
  // Begin of state area
  const [players, setPlayers] = useState({
    player1: { name1: '', bg1: '' },
    player2: { name2: '', bg2: '' },
    bestOf: 3,
  });
  useEffect(() => {
    // Getting values from the localStorage
    setPlayers(JSON.parse(localStorage.getItem('players')));
  }, []);

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
    localStorage.setItem('messages2', JSON.stringify(messages2));
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
    gsymbolp2: '',
  });
  useEffect(() => {
    // Adding values to the localStorage
    localStorage.setItem('gameSymbols', JSON.stringify(gameSymbols));
  }, [gameSymbols]);

  // This state define the modes, the modes are self-described below
  const [modes, setModes] = useState({
    game: '',
    playerType: '',
    play: '',
  });
  useEffect(() => {
    // Getting values from the localStorage
    setModes(JSON.parse(localStorage.getItem('modes')));
  }, []);

  const [customSymbols, setCustomSymbols] = useState(['']);
  useEffect(() => {
    // Getting values from the localStorage
    setCustomSymbols(JSON.parse(localStorage.getItem('customSymbols')));
  }, []);

  // End of State Area

  // previous Symbols
  const prevSym = () => {
    const storageSymbols = JSON.parse(localStorage.getItem('symbols'));
    const { symbolp1, symbolp2 } = storageSymbols;

    if (symbolp1 === 'rock') {
      setGameSymbols({ gsymbolp2: 'paper' });
    } else if (symbolp1 === 'paper') {
      setGameSymbols({ gsymbolp2: 'scissors' });
    } else if (symbolp1 === 'scissors') {
      setGameSymbols({ gsymbolp2: 'rock' });
    } else if (symbolp1 === 'lizard') {
      setGameSymbols({ gsymbolp2: 'scissors' });
    } else if (symbolp1 === 'spock') {
      setGameSymbols({ gsymbolp2: 'paper' });
    }

    setPrevSymbols({
      psymbolp1: symbolp1,
      psymbolp2: symbolp2,
    });
  };

  // Pausing the round to avoid uncontrolled continuous play
  useEffect(() => {
    const resetRound = () => {
      if (
        messages.message !== '' &&
        messages.message !== 'Hold on, unpausing the game in 2 seconds.' &&
        messages2.messageFinal === ''
      ) {
        setModes({ ...modes, play: 'pause' });
        setTimeout(() => {
          setMessages({
            ...messages,
            message: `Hold on, unpausing the game in 2 seconds.`,
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

  // Calculating winner of the round
  useEffect(() => {
    const calculateWinner = () => {
      // Loading values
      const { symbolp1, symbolp2 } = symbols;

      const {
        player1: { name1 },
        player2: { name2 },
      } = players;
      const { score1, score2 } = scores;

      // Logic of winner begin here
      if (symbolp1 === '' || symbolp2 === '') {
        // do nothing
      } else if (symbolp1 === symbolp2) {
        setMessages({
          ...messages,
          message: 'Draw, no points added.',
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
      if (modes.game === 'Normal' || modes.game === 'TheBigBangTheory') {
        if (keydown.code === 'Digit1') {
          if (modes.playerType === 'Player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'Computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'AdvComputer') {
            if (gameSymbols.gsymbolp2) {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2: gameSymbols.gsymbolp2,
              }));
            } else {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2:
                  customSymbols[
                    Math.floor(Math.random() * customSymbols.length)
                  ],
              }));
            }
          }
        }
        if (keydown.code === 'Digit2') {
          if (modes.playerType === 'Player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'Computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'AdvComputer') {
            if (gameSymbols.gsymbolp2) {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2: gameSymbols.gsymbolp2,
              }));
            } else {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2:
                  customSymbols[
                    Math.floor(Math.random() * customSymbols.length)
                  ],
              }));
            }
          }
        }
        if (keydown.code === 'Digit3') {
          if (modes.playerType === 'Player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'Computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'AdvComputer') {
            if (gameSymbols.gsymbolp2) {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2: gameSymbols.gsymbolp2,
              }));
            } else {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2:
                  customSymbols[
                    Math.floor(Math.random() * customSymbols.length)
                  ],
              }));
            }
          }
        }
      }
      if (modes.game === 'TheBigBangTheory') {
        if (keydown.code === 'Digit4') {
          if (modes.playerType === 'Player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'Computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'AdvComputer') {
            if (gameSymbols.gsymbolp2) {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2: gameSymbols.gsymbolp2,
              }));
            } else {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2:
                  customSymbols[
                    Math.floor(Math.random() * customSymbols.length)
                  ],
              }));
            }
          }
        }
        if (keydown.code === 'Digit5') {
          if (modes.playerType === 'Player') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
            }));
          }
          if (modes.playerType === 'Computer') {
            setSymbols(() => ({
              ...symbols,
              symbolp1: customSymbols[keydown.key - 1],
              symbolp2:
                customSymbols[Math.floor(Math.random() * customSymbols.length)],
            }));
          }
          if (modes.playerType === 'AdvComputer') {
            if (gameSymbols.gsymbolp2) {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2: gameSymbols.gsymbolp2,
              }));
            } else {
              setSymbols(() => ({
                ...symbols,
                symbolp1: customSymbols[keydown.key - 1],
                symbolp2:
                  customSymbols[
                    Math.floor(Math.random() * customSymbols.length)
                  ],
              }));
            }
          }
        }
      }

      // second player code
      // separated to avoid confusion
      if (
        (modes.game === 'Normal' || modes.game === 'TheBigBangTheory') &&
        modes.playerType === 'Player'
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

      if (modes.game === 'TheBigBangTheory' && modes.playerType === 'Player') {
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
    setGameSymbols({ gsymbolp2: '' });
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
  }, [modes]);

  const PlayerHand = ({ bg, symbol }) => {
    return <PlayerSide className="player" bg={bg} symbol={symbol} />;
  };

  PlayerHand.propTypes = {
    bg: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  };

  const handleBack = () => {
    history.push('/rockpaperscissors');
  };

  return (
    <>
      {console.log(symbols, players, messages, modes)}
      <Container>
        <div className="edges">
          <strong>Player One Commands:</strong>
          <p>1 - rock</p>
          <p>2 - paper</p>
          <p>3 - scissors</p>
          <p>(Below works only on The big bang theory game)</p>
          <p>4 - lizard</p>
          <p>5 - spock</p>
        </div>
        <div>
          <BestOf>BestOf: {players.bestOf}</BestOf>
          <BestOf>{modes.game}</BestOf>
          <Wrapper className="App">
            <div className="sides">
              <PlayerHand
                bg={players.player1.bg1}
                symbol={
                  symbols.symbolp1 ? symbols.symbolp1 : prevSymbols.psymbolp1
                }
              />
              <Scorebox>{scores.score1}</Scorebox>
            </div>
            <div className="sides">
              <PlayerHand
                bg={players.player2.bg2}
                symbol={
                  symbols.symbolp2 ? symbols.symbolp2 : prevSymbols.psymbolp2
                }
              />
              <Scorebox>{scores.score2}</Scorebox>
            </div>
            <div className="message">
              <p>
                {messages2.messageFinal
                  ? messages2.messageFinal
                  : messages.message}
              </p>
            </div>
            <Button onClick={resetGame}>Reset Game</Button>
            <Button onClick={handleBack}>Back to Welcome Page</Button>
          </Wrapper>
        </div>
        <div className="edges">
          <strong>Player Two Commands:</strong>
          <p>Numpad 1 - rock</p>
          <p>Numpad 2 - paper</p>
          <p>Numpad 3 - scissors</p>
          <p>(Below works only on The big bang theory game)</p>
          <p>Numpad 4 - lizard</p>
          <p>Numpad 5 - spock</p>
        </div>
      </Container>
    </>
  );
}
