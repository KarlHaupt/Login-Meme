import * as api from "./service.js";
import * as Validation from "./validation.js";

document.getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // if(!Valid.validateEmail()) {
    //     return;
    // }

    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    const response = api.loginUser({ email: email, password: password });

    response.then((data) => {
      console.log('data: ', data)
    if (data) {
      console.log('success 3');
      window.location.href = "/login3";
    } else {
      console.log('error')
    }
    });
  });