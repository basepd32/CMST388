// form validation
function validateForm() {

  // retrieving and defining user inputted form values
  var fName = document.getElementById("fName").value.trim();
  var lName = document.getElementById("lName").value.trim();
  var city = document.getElementById("city").value.trim();
  var state = document.getElementById("state").value.trim();
  var zip = document.getElementById("zip-code").value.trim();
  var areaCode = document.getElementById("area=code").value.trim();
  var phoneNumber = document.getElementById("phone-number").value.trim();
  var email = document.getElementById("email").value.trim();
  var confirmEmail = document.getElementById("confirm-email").value.trim();

  var mealPreference = document.querySelector('input[name="meal-preference"]:checked');
  var contactMethods = document.querySelector('input[name="contact-method"]:checked');

  // any validation errors stored here
  var errors = [];

  // validating first name - only alphabetic characters
  if (fName === "") {
    errors.push("Please enter a first name.");
  } else if (!/^[A-Za-z]+$/.test(fName)) {
    errors.push("First name can only contain letters.");
  }

  // validating last name - only alphabetic characters
  if (fName === "") {
    errors.push("Please enter a last name.");
  } else if (!/^[A-Za-z]+$/.test(lName)) {
    errors.push("First name can only contain letters.");
  }

  // validating city - only alphabetic characters
  if (city === "") {
    errors.push("Please enter a city.");
  } else if (!/^[A-Za-z]+$/.test(city)) {
    errors.push("City can only contain letters.");
  }

  // validating state - one option must be selected
  if (state === "") {
    errors.push("Please select a state.");
  }

  // validating zip - must be 5 digits long
  if (zip === "") {
    errors.push("Please enter a zip code");
  } else if (!/^\d{5}$/.test(zipCode)) {
    errors.push("Zip code must be 5 digits long.");
  }

  // validating area code - must be 3 digits long
  if (areaCode === "") {
    errors.push("Please enter an area code.");
  } else if (!/^\d{3}$/.test(areaCode)) {
    errors.push("Area code must be 3 digits long.");
  }

  // validating phone number - must be 7 digits long
  if (phoneNumber === "") {
    errors.push("Please enter an phone number.");
  } else if (!/^\d{7}$/.test(phoneNumber)) {
    errors.push("Phone number must be 7 digits long.");
  }

  // validating email - must be conventional string@string.com
  if (email === "") {
    errors.push("Please enter an email.");
  } else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
    errors.push("Invalid email.");
  }

  // validating email address - must match first email exactly
  if (email !== confirmEmail) {
    errors.push("Email address does not match.");
  }

  // validating meal preference - one must be selected
  if (!mealPreference) {
    errors.push("Please select a meal preference.");
  }

  // validating contact method - at least two must be selected
  if (contactMethods.length < 2) {
    errors.push("Please select at least two contact methods.");
  }

  // displaying errors (if any exist)
  if (errors.length > 0) {
    var errorString = "Errors:\n";
    for (var i = 0; i < errors.length; i++) {
      errorString += "- " + errors[i] + "\n";
    }
    alert(errorString);
    return false;
  } 

  // if no errors are present, construct form data object
  else {
    var formData = {
      "First Name": fName,
      "Last Name": lName,
      "Address": city + ", " + state + ", " + zip,
      "Phone Number": "(" + areaCode + ") " + phoneNumber,
      "Email Address": email,
      "Meal Preference": mealPreference.value,
      "Prefered Contact Method": [],
      "Comments": document.getElementById("comments").value.trim()
    };

    // adding contact methods to form data object
    for (var j = 0; j < contactMethods.length; j++) {
      formData["Contact Methods"].push(contactMethods[j].value);
    }

    // displaying form data and greenlighting sumbission of form
    alert("Form data:\n" + JSON.stringify(formData));
    return true;
  }
}

// resetting form
function resetForm() {
  document.getElementById("registration-form").reset();
}