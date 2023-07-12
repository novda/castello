import React from 'react';
import Room from './components/Room/Room';
import rooms from './data/rooms'

const App = () => {
  return (
    <div><Room roomNumber={1} /><Room roomNumber={2} /><Room roomNumber={3} /></div>
  );
};

export default App;