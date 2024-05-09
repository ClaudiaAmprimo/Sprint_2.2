
// Exercise 6
function validate(event) {
  event.preventDefault();
	let error = 0;
  const expresionesRegulares = {
    name : /^[a-zA-Z\s]+$/, //deben contener sólo letras
    phone : /^\d{9}$/, //debe contener sólo números
    password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/, //debe incluir números y letras
    email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ //debe tener formato de email
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
