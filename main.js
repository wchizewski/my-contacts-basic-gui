// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Global Variables
// let contacts = loadContacts();
// displayAll();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
let contacts = [];


function displayContacts() {
  console.log('Display Contacts');
}

function addContact() {
  let name = prompt("Please enter name:")
  let email = prompt("Please enter email:")
  let phoneNumber = prompt("Please enter phoneNumber:")
  let country = prompt("Please enter country:")
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

function newContact()

// function loadContacts() {
//   let contactsStr = localStorage.getItem("contacts");
//   return JSON.parse(contactsStr) ?? [];
// }