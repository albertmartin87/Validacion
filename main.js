const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const email = document.getElementById('email');
const random= document.getElementById('random');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const NombreValue = Nombre.value.trim();
	const emailValue = email.value.trim();
	const randomValue = random.value.trim();
	
	
	if(NombreValue === '') {
		setErrorFor(Nombre, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(Nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(randomValue === '') {
		setErrorFor(random, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(random);
	}
	
}	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
