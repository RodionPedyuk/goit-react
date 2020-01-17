import React, { Component } from 'react';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

const itemId = require('uuid/v4');

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...JSON.parse(localStorage.getItem('contacts')),
        ],
      };
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

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
