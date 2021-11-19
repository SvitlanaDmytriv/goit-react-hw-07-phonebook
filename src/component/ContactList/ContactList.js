import { PersonXFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button/Button';
import { PencilSquare } from 'react-bootstrap-icons';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsAction';

function ContactList({ toggleModallEdit }) {
  const visibleContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const deleteItem = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={s.listItem}>
          <div className={s.contactItem}>
            <div>
              <span className={s.contact}>{name} :</span>
              <Button
                type="button"
                className={s.buttonEdit}
                onClick={toggleModallEdit}
              >
                <PencilSquare width="15" height="15" className={s.iconEdit} />
              </Button>
            </div>
            <span className={s.contact}>{number}</span>
          </div>
          <Button
            className={s.button}
            type="button"
            onClick={() => deleteItem(id)}
          >
            <PersonXFill width="20" height="30" className={s.icon} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsAll: PropTypes.array,
  value: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ContactList;
