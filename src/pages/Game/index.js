import React, { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [Players, setPlayers] = useState({
    Player1: 'Blue',
    Player2: 'Red',
  });

  const changePlayerName = useCallback(() => {
    console.log(Players);
  }, [Players]);

  const playGame = () => {
    console.log(Players);
  };

  return (
    <div className="App">
      <div className="p1">a</div>
      <div className="p1">b</div>
    </div>
  );
}
