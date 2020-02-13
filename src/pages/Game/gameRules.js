export default function playGame(keydown, modes, customSymbols) {
  // console.log(keydown);
  // countScore();
  // const countScore = () => {
  //   const { symbolp1, symbolp2 } = symbols;
  //   const {
  //     player1: { score1 },
  //     player2: { score2 },
  //     bestOf,
  //   } = players;
  //   console.log('countScore');
  //   console.log(symbolp1);
  //   console.log(symbolp2);
  //   // console.log(score1);
  //   // console.log(score2);
  //   // console.log(bestOf);
  // };
  // Function to count score
  // Ifs to define the game operational
  // Game modes are Regular(3 hands) and Custom (5 hands like The BigBang Theory)
  // Game Type are PLayerXPlayer, PlayerXComputer and PlayerXAdvanced Computer
  // Possible refactoring to use object literal instead
  // if (
  //   // This Main if is to avoid use of the following keys along with
  //   // predefined keys
  //   keydown.ctrlKey === false &&
  //   keydown.shiftKey === false &&
  //   keydown.altKey === false &&
  //   keydown.metaKey === false &&
  //   keydown.repeat === false
  // ) {
  //   // countScore();
  //   if (modes.game === 'regular' || modes.game === 'custom') {
  //     if (keydown.code === 'Digit1') {
  //       console.log('game single or custom and Digit1');
  //       if (modes.playerType === 'player') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], '');
  //       }
  //       if (modes.playerType === 'computer') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], 'random');
  //       }
  //       if (modes.playerType === 'advComputer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           // add logic to use:
  //           // The tactical computer player should always select the choice that would have beaten its last choice,
  //           // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
  //           // player’s move into account.
  //           // Check function getLastMove() to add this level of complexity
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //     }
  //     if (keydown.code === 'Digit2') {
  //       console.log('game single or custom and Digit2');
  //       if (modes.playerType === 'player') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], '');
  //       }
  //       if (modes.playerType === 'computer') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], 'random');
  //       }
  //       if (modes.playerType === 'advComputer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           // add logic to use:
  //           // The tactical computer player should always select the choice that would have beaten its last choice,
  //           // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
  //           // player’s move into account.
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //     }
  //     if (keydown.code === 'Digit3') {
  //       console.log('game single or custom and Digit3');
  //       if (modes.playerType === 'player') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], '');
  //       }
  //       if (modes.playerType === 'computer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //       if (modes.playerType === 'advComputer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           // add logic to use:
  //           // The tactical computer player should always select the choice that would have beaten its last choice,
  //           // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
  //           // player’s move into account.
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //     }
  //   }
  //   if (modes.game === 'custom') {
  //     if (keydown.code === 'Digit4') {
  //       console.log('game custom and Digit4');
  //       if (modes.playerType === 'player') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], '');
  //       }
  //       if (modes.playerType === 'computer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //       if (modes.playerType === 'advComputer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           // add logic to use:
  //           // The tactical computer player should always select the choice that would have beaten its last choice,
  //           // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
  //           // player’s move into account.
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //     }
  //     if (keydown.code === 'Digit5') {
  //       console.log('game custom and Digit5');
  //       if (modes.playerType === 'player') {
  //         funcSetSymbols(customSymbols[keydown.key - 1], '');
  //       }
  //       if (modes.playerType === 'computer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //       if (modes.playerType === 'advComputer') {
  //         funcSetSymbols(
  //           customSymbols[keydown.key - 1],
  //           // add logic to use:
  //           // The tactical computer player should always select the choice that would have beaten its last choice,
  //           // e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other
  //           // player’s move into account.
  //           customSymbols[Math.floor(Math.random() * customSymbols.length)]
  //         );
  //       }
  //     }
  //   }
  //   // second player code
  //   // separated it to avoid confusion
  //   if (
  //     (modes.game === 'regular' || modes.game === 'custom') &&
  //     modes.playerType === 'player'
  //   ) {
  //     if (keydown.code === 'Numpad1') {
  //       console.log('game single and Numpad1');
  //       funcSetSymbols('', customSymbols[0]);
  //     }
  //     if (keydown.code === 'Numpad2') {
  //       console.log('game single and Numpad2');
  //       funcSetSymbols('', customSymbols[1]);
  //     }
  //     if (keydown.code === 'Numpad3') {
  //       console.log('game single and Numpad3');
  //       funcSetSymbols('', customSymbols[2]);
  //     }
  //   }
  //   if (modes.game === 'custom' && modes.playerType === 'player') {
  //     if (keydown.code === 'Numpad4') {
  //       console.log('game single and Numpad4');
  //       funcSetSymbols('', customSymbols[3]);
  //     }
  //     if (keydown.code === 'Numpad5') {
  //       console.log('game single and Numpad5');
  //       funcSetSymbols('', customSymbols[4]);
  //     }
  //   }
  // }
  return 'error';
}
