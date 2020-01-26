import React from 'react';

const Searchbar = ({ getSearchValue, search, handleSubmit }) => {
  return (
    <div>
      <header className="Searchtab">
        <form onSubmit={handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={getSearchValue}
            className="SearchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
