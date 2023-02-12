import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/operations';

import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css'

const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.item}>
      <span>{name}</span>
      <span>{phone}</span>
      <button  className={css.button} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsItem;