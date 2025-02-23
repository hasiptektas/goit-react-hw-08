import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import ContactFormModal from '../../components/ContactFormModal/ContactFormModal';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='mx-auto'>
      <h1 className='text-center my-5'>Kişiler</h1>

      <div className='d-flex justify-content-between my-5'>
        <div style={{marginLeft: '50px'}}><Filter /></div>
      
        <ContactFormModal />
      </div>
      
      <ContactList contacts={contacts} />
    </div>
  );
}