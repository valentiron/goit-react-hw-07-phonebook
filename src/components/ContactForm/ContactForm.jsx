import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  function handleSubmit(event) {
    event.preventDefault();

    const { name, number } = event.currentTarget.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      name: name.value,
      phone: number.value,
    };

    dispatch(addContact(newContact));
    event.currentTarget.reset();
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input className={css.input} type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
