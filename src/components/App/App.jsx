import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import actions from 'redux/contacts/contacts-actions';

import s from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.asyncFetchContacts());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
