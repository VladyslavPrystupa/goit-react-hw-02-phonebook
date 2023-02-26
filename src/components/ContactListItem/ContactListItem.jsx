import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts.map(contact => {
    return (
      <li key={contact.id}>
        {contact.name} {contact.number}
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          delete
        </button>
      </li>
    );
  });
};

ContactListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
