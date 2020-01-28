import React from 'react';
import { Link } from 'react-router-dom';

const moviesPage = (searchResult, handleSubmit, handleChange, inputValue) => {
  return (
    <div>
      <form method="GET" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="SEARCH MOVIE"
          onChange={handleChange}
          value={inputValue}
        ></input>
        <button type="submit">SEARCH</button>
      </form>
      <ul>
        {searchResult.map(e => (
          <li key={e.id}>
            <Link to={`./movies/${e.id}`}></Link>
            {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
