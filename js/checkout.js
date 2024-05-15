
// Exercise 6
function validate(event) {
  event.preventDefault();

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
    fName.classList.remove("is-valid")
    fName.classList.add("is-invalid")

	} else {
    fName.classList.add("is-valid")
    fName.classList.remove("is-invalid")
  }

	if(fEmail.value == "" || !expresionesRegulares.email.test(fEmail.value) || fEmail.textContent.length >= 3){
    fEmail.classList.remove("is-valid")
    fEmail.classList.add("is-invalid")
	} else {
    fEmail.classList.add("is-valid")
    fEmail.classList.remove("is-invalid")
  }

	if(fAddress.value == "" || !expresionesRegulares.name.test(fAddress.value) || fAddress.textContent.length >= 3){
    fAddress.classList.remove("is-valid")
    fAddress.classList.add("is-invalid")
	} else {
    fAddress.classList.add("is-valid")
    fAddress.classList.remove("is-invalid")
  }

	if(fLastN.value == "" || !expresionesRegulares.name.test(fLastN.value) || fLastN.textContent.length >= 3){
    fLastN.classList.remove("is-valid")
    fLastN.classList.add("is-invalid")
	} else {
    fLastN.classList.add("is-valid")
    fLastN.classList.remove("is-invalid")
  }

	if(fPassword.value == "" || !expresionesRegulares.password.test(fPassword.value)){
    fPassword.classList.remove("is-valid")
    fPassword.classList.add("is-invalid")
	} else {
    fPassword.classList.add("is-valid")
    fPassword.classList.remove("is-invalid")
  }

	if(fPhone.value == "" || !expresionesRegulares.phone.test(fPhone.value) || fLastN.textContent.length >= 3){
    fPhone.classList.remove("is-valid")
    fPhone.classList.add("is-invalid")
	} else {
    fPhone.classList.add("is-valid")
    fPhone.classList.remove("is-invalid")
  }
}
