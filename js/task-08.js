const email = document.querySelector('input[name ="email"]');
const password = document.querySelector('input[name ="password"]');
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value) {
    alert("Please, enter your email");
  }
  if (!password.value) {
    alert("Please, enter your password");
  }
  if (email.value && password.value) {
    const object = {
      email: email.value,
      password: password.value,
    };
    console.log(object);
    event.currentTarget.reset();
  }
});
