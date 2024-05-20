import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import initialData from '../../data/initialData.json';
import css from './App.module.css';

const getInitialData = () => {
  const savedData = window.localStorage.getItem('data');
  const newData = savedData ? JSON.parse(savedData) : initialData;
  return newData.length > 0 ? newData : initialData;
};

function App() {
  const [contacts, setContacts] = useState(getInitialData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchValue={filter} onFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
