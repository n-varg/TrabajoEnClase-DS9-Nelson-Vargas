// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ContactForm = ({ fetchContacts, currentContact, setCurrentContact}) => {
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [last_name, setLastName] = useState('');
 const [age, setAge] = useState('');
 
 // Efecto para actualizar el formulario cuando se selecciona un contacto para editar
 useEffect(() => {
 if (currentContact) {
 setName(currentContact.name);
 setLastName(currentContact.last_name);
 setPhone(currentContact.phone);
 setAge(currentContact.age);
 }
 }, [currentContact]);
 // Manejar el envío del formulario
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 if (currentContact) {
 // Actualizar contacto existente
 await
axios.patch(`http://localhost:3001/contacts/${currentContact._id}`, {
name, phone, age, last_name });
 setCurrentContact(null);
 } else {
 // Crear nuevo contacto
 await axios.post('http://localhost:3001/contacts', { name,
phone, age, last_name });
 }
 fetchContacts();
 setName('');
 setPhone('');
 setLastName('');
 setAge('');
 } catch (error) {
 console.error('Error saving contact', error);
 }
 };
 return (
 <form className='cont-form' onSubmit={handleSubmit}>
 <div className='cont-in'>
 <label>Name</label>
 <input type="text" value={name} onChange={(e) =>
setName(e.target.value)} required />
 </div>

 <div>
 <label>Last Name</label>
 <input type="text" value={last_name} onChange={(e) =>
setLastName(e.target.value)} required />
 </div>

 <div>
 <label>Phone</label>
 <input type="text" value={phone} onChange={(e) =>
setPhone(e.target.value)} required />
 </div>

 <div>
 <label>Age</label>
 <input type="text" value={age} onChange={(e) =>
setAge(e.target.value)} required />
 </div>

 <button className='button-addcontact' type="submit">{currentContact ? 'Update Contact' : 'AddContact'}</button>
 </form>
 );
};
export default ContactForm;