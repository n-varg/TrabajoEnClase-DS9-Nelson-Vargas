// models/Contact.js
const mongoose = require("mongoose");
// Definición del esquema del contacto
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});
// Creación del modelo de contacto
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
