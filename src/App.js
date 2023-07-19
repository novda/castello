import React, {useState} from 'react';
import Room from './components/Room/Room';
import rooms from './data/rooms'

import castelloPhoto from './data/castello.jpg'
import khn from './data/khn.png'
import { ConfigProvider, theme } from "antd";

import './App.css'

const App = () => {
  const { darkAlgorithm } = theme;

  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <div className='App'>
        <img src={khn} className='khn' />
        <img src={castelloPhoto} className='Castello-photo' />
        {rooms.map(r => <Room roomNumber={r.number} roomCostByHour={r.costByHour} key={r.number} />)}
      </div>
    </ConfigProvider>
  );
};

export default App;