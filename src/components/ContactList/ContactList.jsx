import { ContactListItem } from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      <ContactListItem
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
