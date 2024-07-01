/*
	Your Name: Patrick DiMisa
	Last Modified Date: 07/02/2024
	File: event_registration.js
	File Description: Create a webpage that allows the user to purchase tickets, while displaying
	information about the event and cost. The form will allow users to purchase a predetermined
	number of tickets within a predetermined time window.
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;

// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

// display a ten minute countdown timer for the user to complete the transaction
var countdownElement = document.getElementById('countdown');
var countdownTimer;
var timeLeft = 10 * 60;

countdownTimer = setInterval(function () {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds: seconds;

  countdownElement.textContent =
  'You have ' +
  minutes +
  ':' +
  seconds +
  ' left to complete your purchase.';

  if (timeLeft === 0) {
    clearInterval(countdownTimer);
    alert('Your time has expired. Please begin your purchase again.');

    //resetting the page if time expires
    location.href = location.href;
  } else {
    timeLeft--;
  }
}, 1000);

// form submission
var ticketForm = document.getElementById('ticketForm');
var ticketQuantityInput = document.getElementById('ticketQuantity');
var ticketError = document.getElementById('ticketError');
var contactInfo = document.getElementById('contactInfo');
var totalCost = document.getElementById('totalCost');
var costMessage = document.getElementById('costMessage');

ticketForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var ticketQuantity = parseInt(ticketQuantityInput.value);

  if (isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 3) {
    ticketError.textContent = 'Please enter a valid number of tickets (1-3).';
    setFieldError('ticketQuantity', true);
  } else {
    ticketError.textContent = '';
    setFieldError('ticketQuantity', false);

    contactInfo.style.display = 'block';
    ticketForm.style.display = 'none';
    totalCost.style.display = 'block';

    // calculating total cost of ticket order
    var totalTicketCost = calculateTotalCost(ticketQuantity);
    costMessage.textContent = 'Total Cost: $' + totalTicketCost;

    // getting user's first name, last name, and email
    var firstName = prompt('Please enter your first name:');

    // checking validity of first name
    while (!isValidName(firstName)) {
      alert('Please enter a valid first name.');
      firstName = prompt('Please enter your first name:');
    }

    setFieldError('firstName', false);


    var lastName = prompt('Enter your last name:');

    // checking validity of last name
    while (!isValidName(lastName)) {
      alert('Please enter a valid last name.');
      lastName = prompt('Enter your last name:');
    }

    setFieldError('lastName', false);

    var email = prompt('Enter your email:');

    // checking validity of last name
    while (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      email = prompt('Enter your email:');
    }

    setFieldError('email', false);

    // submitting the form
    clearInterval(countdownTimer);
    alert('Thank you for your purchase! Grand total: $' + totalTicketCost);
    ticketForm.reset();
  }
});

// validating name
function isValidName(name) {
  var nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
}

// validating email
function isValidEmail(email) {
  var emailRegex = /^.+\.com$/i;
  return emailRegex.test(email);
}

// changing background color of form fields based on errors
function setFieldError(fieldId, error) {
  var field = document.getElementById(fieldId);
  if (error) {
    field.classList.add('error-input');
  } else {
    field.classList.remove('error-input');
  }
}

// grand total calculation
function calculateTotalCost(quantity) {
  var pricePerTicket = 5.5;
  return (quantity * pricePerTicket).toFixed(2);
}