// import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch } from "react-redux";
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

export default function App() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);


  return (
    <div
      style={{
        padding: '15px 15px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactList />
    </div>
  );
}
