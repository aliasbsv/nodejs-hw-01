import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  await writeContacts(contacts);
  console.log('Додано новий контакт');
};
addOneContact();
