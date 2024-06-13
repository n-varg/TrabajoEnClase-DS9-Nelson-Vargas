// src/App.jsx
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { fetchContacts } from './components/services/contactService';
const App = () => {
 const [contacts, setContacts] = useState([]);
 const [currentContact, setCurrentContact] = useState(null);
 // Función para obtener los contactos desde el servidor
 const getContacts = async () => {
 const contacts = await fetchContacts();
 setContacts(contacts);
 };
 useEffect(() => {
 getContacts();
 }, []);
 return (
 <div>
 <h1>Phonebook</h1>
 <ContactForm fetchContacts={getContacts}
currentContact={currentContact} setCurrentContact={setCurrentContact}
/>
<h1>Phonebook Contact List</h1>
 <ContactList contacts={contacts} fetchContacts={getContacts}
setCurrentContact={setCurrentContact} />
 </div>
 );
};
export default App;