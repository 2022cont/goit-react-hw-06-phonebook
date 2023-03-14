import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Form from './form/Form';
import { ContactList } from './сontactList/ContactList';

import { getTodosSlice, todoDeleted, getTodosSliceRemove} from '../redux/todosSlice';

export default function App() {
  const contacts = useSelector(getTodosSlice);
  const contactsRn = useSelector(getTodosSliceRemove);
  const [contactsNew, setContactsNew] = useState([]);
   const dispatch = useDispatch();
  const [filterName, setFilterName] = useState('');

  const onInputClick = event => {
    event.preventDefault();
    setFilterName(event.target.value);
  };

  const deleteContact = (id) => {
    dispatch(todoDeleted(id));
   setContactsNew([...contactsRn]);
     
  };

  const filtered = !filterName
    ? contacts
    : contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );

  console.log('contactsNew', contactsNew);

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

      <ContactList contacts={filtered ? filtered : contactsNew} onDeleteContact={deleteContact}/>

    </div>
  );
}
