import React from 'react';
import './App.css';

function App() {}

inputValue = () => {};
handleChange = (e) => {
this.setState({inputValue: e.target.value}) 
};

handleSubmit = e => {
  e.preventDefault();
  const searchResult = await services.searchFilms(this.StaticRange.inputValue);
  this.ListeningStateChangedEvent({searchResult})
};

export default App;
