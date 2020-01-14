import React, { Component } from 'react';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

const itemId = require('uuid/v4');

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  getValue = e => {
    const { name, value } = e.target;
    this.setState({ id: itemId(), [name]: value });
  };

  submit = e => {
    e.preventDefault();
    if (
      e.target.name.value.length === 0 ||
      e.target.number.value.length === 0
    ) {
      alert(`Please enter contact info!`);
      return;
    }

    let uniqueContact = true;

    this.state.contacts.forEach(contact => {
      if (contact.name === e.target.name.value) {
        uniqueContact = false;
        alert(`${e.target.name.value} is already in your phonebook!`);
      }
    });

    if (uniqueContact === true) {
      this.getContact({
        name: this.state.name,
        number: this.state.number,
        id: itemId(),
      });
    }

    this.setState({ name: '', number: '' });
  };

  getContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onHandleDelete = e => {
    const id = e.target.closest('li').id;
    this.deleteContact(id);
  };

  onHandleSearch = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filter = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            getValue={this.getValue}
            submit={this.submit}
          />
          <h2>Contacts</h2>

          <Filter onHandleSearch={this.onHandleSearch} />
          <ContactList
            filter={filter}
            contacts={this.state.contacts}
            onHandleDelete={this.onHandleDelete}
          />
        </div>
      </>
    );
  }
}
