import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();

  function onChange (event) {
    dispatch(filterContacts(event.currentTarget.value));
  }; 

  return (
    <label  className={css.form}>
      <span>Find contacts by name</span>
      <input className={css.input}  type="text" onChange={onChange} />
    </label>
  );
};

export default Filter;