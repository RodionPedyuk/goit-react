import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onHandleSearch }) => (
  <>
    <h3>Find contacts by name</h3>
    <input
      onInput={onHandleSearch}
      type="text"
      placeholder="enter contacts"
    ></input>
  </>
);

Filter.propTypes = {
  onHandleSearch: PropTypes.func,
};

export default Filter;
