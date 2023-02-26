import PropTypes from 'prop-types';
import { Contact, Button } from './ContactListItem.styled';
export const ContactListItem = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts.map(contact => {
    return (
      <Contact key={contact.id}>
        {contact.name}: {contact.number}
        <Button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </Button>
      </Contact>
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
