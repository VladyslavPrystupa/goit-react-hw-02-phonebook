import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onContactAdd = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(10),
    };

    const namesOfContacts = contacts.map(contact => contact.name);
    if (namesOfContacts.includes(name)) {
      this.reset();
      return alert('you have this contact name');
    }

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
    this.reset();
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onDeleteContact = id => {
    const indexOfContact = this.state.contacts.findIndex(
      contact => contact.id === id
    );
    this.state.contacts.splice(indexOfContact, 1);
    this.setState(prevState => {
      return { contacts: prevState.contacts };
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    const filteredName = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filteredName)
    );

    return (
      <>
        <form onSubmit={this.onContactAdd}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <label>
            Find contact
            <input
              onChange={this.handleChange}
              type="text"
              name="filter"
              value={filter}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <button
                  type="button"
                  onClick={() => this.onDeleteContact(contact.id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
