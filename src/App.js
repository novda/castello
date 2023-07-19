import React from 'react';
import Room from './components/Room/Room';
import rooms from './data/rooms'

import catelloPhoto from './data/castello.jpg'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <img src={catelloPhoto} className='Castello-photo'/>
      {rooms.map(r => <Room roomNumber={r.number} roomCostByHour={r.costByHour} key={r.number}/>)}
    </div>
  );
};

export default App;