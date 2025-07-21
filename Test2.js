const contacts=new Map();

function addContact(name,age,email,location){
    contacts.set(name, {age,email,location});
}

function getContactDetails(name){
    if(contacts.has(name)){
        return contacts.get(name);
    } else{
        return "Contact "+name+" not found.";
    }
}

addContact("jojo",54,"jojo@abc.com","Beed");
addContact("regude",40,"regudw@abc.com","Beed");

console.log(getContactDetails("jojo"))

console.log(getContactDetails("charlie"));