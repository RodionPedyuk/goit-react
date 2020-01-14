import React from 'react';
import './App.css';
import publications from '../publications.json';
import Feedback from './feedback/Feedback';
import Reader from './reader/Reader';
import Phonebook from './phonebook/phonebook';

function App() {
  return (
    <div>
      <Feedback />
      <Reader publications={publications} />
      <Phonebook />
    </div>
  );
}

export default App;
