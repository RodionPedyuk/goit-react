import React from 'react';
import { Link } from 'react-router-dom';
const MoviesPage = ({
  searchResult,
  handleSubmit,
  handleChange,
  inputValue,
  getDetails,
}) => {
  console.log('getDetails :', getDetails);
  return (
    <div>
      <form method="GET" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search Films"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResult.map(e => (
          <li key={e.id}>
            <Link id={e.id} onClick={getDetails} to={`/movies/${e.id}`}>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
