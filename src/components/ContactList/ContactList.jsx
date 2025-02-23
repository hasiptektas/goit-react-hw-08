/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
export default function ContactList({ contacts }) {
    const dispatch = useDispatch();

    console.log(contacts);
  
    return (
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={(id) => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    );
  }