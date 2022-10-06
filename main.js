// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global Variables
let contacts = loadContacts();
displayContacts();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  } else if (selection === "display-email") {
    displayByEmail();
  }
}

// MENU FUNCTIONS

function displayContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i]);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let name = prompt("Please enter name:");
  let email = prompt("Please enter email:");
  let index = findByEmail(email);
  if (index != -1) {
    email = prompt("Email already in use, please enter another");
  }
  let phoneNumber = prompt("Please enter phoneNumber:");
  let country = prompt("Please enter country:");
  contacts.push(newContact(name, email, phoneNumber, country));
  saveContacts();
  displayContacts();
  outputEl.innerHTML = `New Contact Added (${name})`;
}

function removeContact() {
  let email = prompt("Enter EMAIL of contact:");
  let index = findByEmail(email);
  if (index === -1) {
    alert("Contact with that email could not be found");
  } else {
    contacts.splice(index, 1);
  }
  saveContacts();
  displayContacts();
  outputEl.innerHTML = `Contact Removed (${"help me"})`;
}

function displayByName() {
  let outputStr = "";
  index = prompt("Enter NAME of contact:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.includes(index)) {
      outputStr += getContactHTMLStr(contacts[i]);
    }
  }
  outputEl.innerHTML = outputStr;
}

function displayByCountry() {
  let outputStr = "";
  index = prompt("Enter COUNTRY of contact:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country.includes(index)) {
      outputStr += getContactHTMLStr(contacts[i]);
    }
  }
  outputEl.innerHTML = outputStr;
}

function displayByEmail() {
  let outputStr = "";
  index = prompt("Enter EMAIL of contact:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].email.includes(index)) {
      outputStr += getContactHTMLStr(contacts[i]);
    }
  }
  outputEl.innerHTML = outputStr;
}

// Helper functions
function findByEmail(email) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].email === email) {
      return i;
    }
  }
  return -1;
}

function newContact(name, email, phoneNumber, country) {
  return {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    country: country,
  };
}

function getContactHTMLStr(contact) {
  return `
    <div>
      <h4>${contact.name}</h4>
      <p>${contact.email}</p>
      <p>${contact.phoneNumber} (${contact.country})
    </div>
  `;
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  let contactsStr = localStorage.getItem("contacts");
  return JSON.parse(contactsStr) ?? [];
}
