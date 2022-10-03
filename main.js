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
    findByEmail();
  }
}

// MENU FUNCTIONS

function displayContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  let name = prompt("Please enter name:");
  let email = prompt("Please enter email:");
  let phoneNumber = prompt("Please enter phoneNumber:");
  let country = prompt("Please enter country:");
  contacts.push(newContact(name, email, phoneNumber, country));
  saveContacts();
  displayContacts();
  alert("New Contact Added!");
}

function removeContact() {
  let index = +prompt("Enter # of contact:");
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
    saveContacts();
    displayContacts();
    alert("Contact Removed");
  } else if (index === "") {
    alert("Please enter a number");
  } else {
    alert("Invalid Contact #");
  }
}

function displayByName() {
  let outputStr = "";
  outputStr = prompt("Enter NAME of contact:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.includes(outputStr)) {
      outputStr = getContactHTMLStr(contacts[i], i);
    }
  }
  outputEl.innerHTML = outputStr;
}

function displayByCountry() {
  let outputStr = "";
  outputStr = prompt("Enter COUNTRY of contact:");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].country.includes(outputStr)) {
      outputStr = getContactHTMLStr(contacts[i], i);
    }
  }
  outputEl.innerHTML = outputStr;
}

function findByEmail() {}

// Helper functions
function newContact(name, email, phoneNumber, country) {
  return {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    country: country,
  };
}

function getContactHTMLStr(contact, i) {
  return `
    <div>
      <h4>${i}; ${contact.name}</h4>
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
