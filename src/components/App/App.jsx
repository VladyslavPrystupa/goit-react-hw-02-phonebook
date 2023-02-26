import { Component } from 'react';
import { GlobalStyles } from '../App/GlobalStyles';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Header, SubHeader } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  contactsUpd = newContact => {
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  onContactDelete = id => {
    const indexOfContact = this.state.contacts.findIndex(
      contact => contact.id === id
    );
    this.state.contacts.splice(indexOfContact, 1);
    this.setState(prevState => {
      return { contacts: prevState.contacts };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredName = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filteredName)
    );

    return (
      <Container>
        <GlobalStyles />
        <Header>Phonebook</Header>
        <ContactForm contacts={contacts} contactsUpd={this.contactsUpd} />
        {contacts.length !== 0 && (
          <>
            <SubHeader>Contacts</SubHeader>
            <Filter filter={filter} onHandleChange={this.handleChange} />
            <ContactList
              filteredContacts={filteredContacts}
              onDeleteContact={this.onContactDelete}
            />
          </>
        )}
      </Container>
    );
  }
}
