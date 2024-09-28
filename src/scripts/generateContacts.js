import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`Додано ${number} нових контактів!`);
};

generateContacts(5);
