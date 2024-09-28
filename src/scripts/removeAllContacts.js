import { writeContacts } from '../utils/writeContacts.js';
const removeAllContacts = async () => {
  const contacts = [];
  await writeContacts(contacts);
  console.log(`Дані видалено!`);
};

removeAllContacts();
