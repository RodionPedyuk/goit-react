import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ name, number, getValue, submit }) => (
  <form onSubmit={submit}>
    <input
      value={name}
      onChange={getValue}
      type="text"
      placeholder="Enter name..."
      name="name"
    />
    <input
      value={number}
      onChange={getValue}
      type="text"
      placeholder="Enter number..."
      name="number"
    />
    <button type="submit">Add contact</button>
  </form>
);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  getValue: PropTypes.func,
  submit: PropTypes.func,
};

export default ContactForm;
