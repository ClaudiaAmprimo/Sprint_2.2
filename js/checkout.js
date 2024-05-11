
// Exercise 6
function validate(event) {
  event.preventDefault();
	let error = 0;
  const expresionesRegulares = {
    name : /^[a-zA-Z\s]+$/, //must contain letters only
    phone : /^\d{9}$/, //must contain 9 numbers
    password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/, //numbers and letters between 4 and 8 characters
    email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ //email format
  }
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !expresionesRegulares.name.test(fName.value) || fName.textContent.length >= 3){
    fName.classList.add("is-invalid")
	}

	if(fEmail.value == "" || !expresionesRegulares.email.test(fEmail.value) || fEmail.textContent.length >= 3){
    fEmail.classList.add("is-invalid")
	}

	if(fAddress.value == "" || !expresionesRegulares.name.test(fAddress.value) || fAddress.textContent.length >= 3){
    fAddress.classList.add("is-invalid")
	}

	if(fLastN.value == "" || !expresionesRegulares.name.test(fLastN.value) || fLastN.textContent.length >= 3){
    fLastN.classList.add("is-invalid")
	}

	if(fPassword.value == "" || !expresionesRegulares.password.test(fPassword.value)){
    fPassword.classList.add("is-invalid")
	}

	if(fPhone.value == "" || !expresionesRegulares.phone.test(fPhone.value) || fLastN.textContent.length >= 3){
    fPhone.classList.add("is-invalid")
	}
}
