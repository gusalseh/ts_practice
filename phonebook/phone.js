var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var PhoneType;
(function (PhoneType) {
    PhoneType["Home"] = "home";
    PhoneType["Office"] = "office";
    PhoneType["Studio"] = "studio";
})(PhoneType || (PhoneType = {}));
// api
function fetchContacts() {
    const contacts = [
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
    });
}
// main
class AddressBook {
    constructor() {
        this.contacts = [];
        // this.fetchData();
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetchContacts().then(response => this.contacts = response);
        });
    }
    findContactByName(name) {
        return this.contacts.filter(contact => contact.name === name);
    }
    findContactByAddress(address) {
        return this.contacts.filter(contact => contact.address === address);
    }
    findContactByPhone(phoneNumber, phoneType) {
        return this.contacts.filter(contact => contact.phones[phoneType].num === phoneNumber);
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    displayListByName() {
        return this.contacts.map(contact => contact.name);
    }
    displayListByAddress() {
        return this.contacts.map(contact => contact.address);
    }
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let addressBook = new AddressBook();
        yield addressBook.fetchData();
        let target = addressBook.findContactByName("마동석");
        console.log(target);
    });
}
run();
