// Selectores
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneCode = document.querySelector("#phone-code");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const formBtn = document.querySelector("#form-btn");

// Regex
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/;
const USERNAME_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const NUMBER_REGEX = /^[0-9]{6,16}$/;

// Validaciones
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;

// Funcion
const validation = (e, validation, element) => {
	const information = e.target.parentElement.children[1];
	if (validation) {
		element.classList.add("correct");
		element.classList.remove("incorrect");
		information.classList.remove("show-information");
	} else {
		element.classList.remove("correct");
		element.classList.add("incorrect");
		information.classList.add("show-information");
	}
};

[...countries].forEach((option) => {
	option.innerHTML = option.innerHTML.split("(")[0];
});

usernameInput.addEventListener("input", (e) => {
	usernameValidation = USERNAME_REGEX.test(e.target.value);
	validation(e, usernameValidation, usernameInput);
});

emailInput.addEventListener("input", (e) => {
	emailValidation = EMAIL_REGEX.test(e.target.value);
	validation(e, emailValidation, emailInput);
});

countries.addEventListener("input", (e) => {
	const optionSelected = [...e.target.children].find(option => option.selected);
	phoneCode.innerHTML = `+${optionSelected.value}`;
    countriesValidation = optionSelected.value === '' ? false : true;
	console.log(countriesValidation)
    countries.classList.add('correct');
    phoneCode.classList.add("correct");
});

phoneInput.addEventListener("input", (e) => {
	phoneValidation = NUMBER_REGEX.test(e.target.value);
	const information = e.target.parentElement.parentElement.children[1];
	if (phoneValidation) {
		phoneInput.classList.add("correct");
		phoneInput.classList.remove("incorrect");
		information.classList.remove("show-information");
	} else {
		phoneInput.classList.remove("correct");
		phoneInput.classList.add("incorrect");
		information.classList.add("show-information");
	}
});

passwordInput.addEventListener("input", (e) => {
	passwordValidation = PASSWORD_REGEX.test(e.target.value);
	validation(e, passwordValidation, passwordInput);
});

confirmPasswordInput.addEventListener("input", (e) => {
	confirmPasswordValidation = passwordInput.value === e.target.value;
	validation(e, confirmPasswordValidation, confirmPasswordInput);
});
