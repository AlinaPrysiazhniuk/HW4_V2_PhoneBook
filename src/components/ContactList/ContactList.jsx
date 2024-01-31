import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list_contact} >
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={css.item_contact}>
          <p className={css.name_contact}>
            {name}: {number}
          </p>
          <button className={css.button_delete} type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};