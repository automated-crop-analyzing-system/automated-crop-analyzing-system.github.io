/*
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
*/
 function login() {
   var userEmail = document.getElementById("email_feild").value;
   var userPass = document.getElementById("password_feild").value;

   window.alert(userEmail + "" +userPass);
 }
