interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  }
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
function fetchContacts(): Promise<Contact[]> {
  const contacts:  Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 8201033334444,
        },
      },
    },

    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 8201055556666,
        },
        office: {
          num: 8201077778888,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  })
}

// main
class AddressBook {
    contacts: Contact[] = [];

    constructor() {
      // this.fetchData();
    }

    async fetchData(): Promise<void> {
      await fetchContacts().then(response => this.contacts = response);
    }

    findContactByName(name: string): Contact[] {
      return this.contacts.filter(contact => contact.name === name);
    }

    findContactByAddress(address: string): Contact[] {
      return this.contacts.filter(contact => contact.address === address);
    }

    findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
      return this.contacts.filter(contact => contact.phones[phoneType].num === phoneNumber);
    }

    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }

    displayListByName(): string[] {
      return this.contacts.map(contact => contact.name)
    }

    displayListByAddress(): string[] {
      return this.contacts.map(contact => contact.address)
    }
}

async function run() {
  let addressBook: AddressBook = new AddressBook();
  await addressBook.fetchData();
  let target: Contact[] = addressBook.findContactByName("마동석");
  console.log(target)
}

run();