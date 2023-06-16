const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const option = document.getElementById("option");
const message = document.getElementById("message");
const verify = document.getElementById("verify");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const emailCheck = (input) => {
  const re = /\S+@\S+\.\S+/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

const checkRequired = (inputarr) => {
  inputarr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const checkOption = (input) => {
  if ((input.value === "") | (input.value === 0)) {
    showError(input, `${getFieldName(input)} must be selected`);
  } else {
    showSuccess(input);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, subject, option, message, verify]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkLength(subject, 10, 100);
  checkLength(message, 20, 100);
  checkOption(option);
});
