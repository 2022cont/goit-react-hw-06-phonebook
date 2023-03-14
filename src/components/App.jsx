import { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from './form/Form';
import { ContactList } from './сontactList/ContactList';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const [filterName, setFilterName] = useState('');

  const onInputClick = event => {
    event.preventDefault();
    setFilterName(event.target.value);
  };


  const filtered = !filterName
    ? contacts
    : contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );


  return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>

      <label >Find contact by name</label>

      <input
        type="text"
        placeholder={filterName ? filterName : 'Search ...'}
        value={filterName}

        onChange={onInputClick}

      />

      <ContactList contactsFilters={ filtered} />

    </div>
  );
}
