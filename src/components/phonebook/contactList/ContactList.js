import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onHandleDelete, filter }) => (
  <ul>
    {filter.length === 0
      ? contacts.map(elem => (
          <li id={elem.id} key={elem.id}>
            {elem.name}:{elem.number}
            <button onClick={onHandleDelete}>DELETE</button>
          </li>
        ))
      : filter.map(elem => (
          <li id={elem.id} key={elem.id}>
            {elem.name}:{elem.number}
            <button onClick={onHandleDelete}>DELETE</button>
          </li>
        ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onHandleDelete: PropTypes.func,
  filter: PropTypes.array,
};

export default ContactList;
