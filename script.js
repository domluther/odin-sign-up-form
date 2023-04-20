signupForm = document.querySelector(".signup-form");
passwordOneEle = document.querySelector("#password");
passwordTwoEle = document.querySelector("#confirm-password");

const validateForm = function (e) {
  const form = e.target;
  console.log(e);
  if (form.checkValidity()) {
    if (passwordOneEle.value !== passwordTwoEle.value) {
      passwordOneEle.setCustomValidity("Invalid password");
      passwordTwoEle.setCustomValidity("Invalid password");
      e.preventDefault();
    }
  } else {
    console.log("there were errors");
    e.preventDefault();
  }
};

signupForm.addEventListener("submit", validateForm);
