import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './phonebook/ContactForm/ContactForm';
import { ContactList } from './phonebook/ContactList/ContactList';
import { Filter } from './phonebook/Filter/Filter';
import { getContactsThunk } from '../redux/contactsThunk';
import { selectContacts } from '../redux/selectors';
import { AppContainer, Title } from './phonebook/Phonebook.styled';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <ContactList />
          <ToastContainer />
        </>
      )}
    </AppContainer>
  );
}
