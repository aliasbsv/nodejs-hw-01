import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contacts = await readContacts();
  const count = contacts.length;
  if (count === 0) {
    console.log('У вас немає жодного контакту');
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
  console.log('Останній контакт видалено');
};

removeLastContact();
