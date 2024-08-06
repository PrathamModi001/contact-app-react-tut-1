import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // recieves a prevContacts array and returns a new array with the new contact
    setContacts((prevContacts) => [...prevContacts, contact]);
  }

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
