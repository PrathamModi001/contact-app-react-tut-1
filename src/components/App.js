import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import CardDetail from './CardDetail';
import api from '../api/contact';
import EditContact from './EditContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const response = await api.post("/contacts", contact);
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.error("Failed to add contact:", error);
    }
  };

  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  const editContactHandler = async (updatedContact) => {
    try {
      const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
      setContacts(
        contacts.map((contact) =>
          contact.id === updatedContact.id ? response.data : contact
        )
      );
    } catch (error) {
      console.error("Failed to edit contact:", error);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const response = await api.get("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      }
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, contacts]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container mx-auto my-4 flex justify-center">
          <input
            type="text"
            placeholder="Search Contacts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-3 pl-10 text-gray-700 bg-white border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundImage: `url('/search-icon.svg')`, backgroundPosition: '10px center', backgroundRepeat: 'no-repeat' }}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={filteredContacts}
                removeContactHandler={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<CardDetail contacts={contacts} />}
          />
          <Route 
            path="/edit/:id" 
            element={<EditContact contacts={contacts} editContactHandler={editContactHandler} />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
