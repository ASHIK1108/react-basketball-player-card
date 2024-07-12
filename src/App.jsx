import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';

function App() {
  const player = {
    name: 'LeBron James',
    image: 'https://cdn.britannica.com/82/212182-050-50D9F3CE/basketball-LeBron-James-Cleveland-Cavaliers-2018.jpg',
    position: 'Forward',
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
