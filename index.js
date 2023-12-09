import * as contactService from "./contacts.js";
import { program } from "commander";


const invokeAction = async ({ action, id, ...data }) => {
    switch (action) {
        case "list":
            const allContacts = await contactService.listContacts();
            return console.table(allContacts);
        
        case "get":
            const oneContact = await contactService.getContactById(id);
            return console.log(oneContact);
        
        case "add":
            const newContact = await contactService.addContact(data);
            return console.log(newContact);
        
        case "remove":
            const removedContact = await contactService.removeContact(id);
            return console.log(removedContact);
        
        default:
            console.warn("\x1B[31m Unknown action type!");
        }
};


program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);

// invokeAction({ action: "list" })
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({action: "add", name: "Harry Potter", email: "harry@hogwards.uk", phone: "(333) 444-5566"});
// invokeAction({ action: "remove", id: "z26nMfgd2NsYwUS9yuwqW" });