import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts = getFiltredContacts();

  function getFiltredContacts() {
    const lowercaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  };

  return (
    <>
      <ul>
        {filterContacts.map(({id, name, phone}) => (
          <ContactItem
            key={id}
            contact={{ id, name, phone }}
          />
        ))}
      </ul>
    </>
  
  );
};

export default ContactsList;
