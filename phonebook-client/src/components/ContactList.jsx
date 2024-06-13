// src/components/ContactList.jsx
import React from 'react';
import axios from 'axios';
const ContactList = ({ contacts, fetchContacts, setCurrentContact }) =>
{
 // Manejar la eliminación de un contacto
 const handleDelete = async (id) => {
 try {
 await axios.delete(`http://localhost:3001/contacts/${id}`);
 fetchContacts();
 } catch (error) {
 console.error('Error deleting contact', error);
 }
 };
 return (
 <div className='cont-list-contacts'>
 <ul>
 {contacts.map(contact => (
 <li key={contact._id}>
 {contact.name} - {contact.last_name} - {contact.age} -{contact.phone}
 <button className='button-Edit' onClick={() =>
setCurrentContact(contact)}>Edit</button>
 <button className='button-Delete' onClick={() =>
handleDelete(contact._id)}>Delete</button>
 </li>
 ))}
 </ul>
 </div>
 );
};
export default ContactList;