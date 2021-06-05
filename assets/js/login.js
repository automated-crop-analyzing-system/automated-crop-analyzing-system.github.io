const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

(function() {

  //Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBexYX3nBz-RjZRnrYCkiz2TRSoJuWbsfs",
    authDomain: "acas-3a13f.firebaseapp.com",
    databaseURL: "https://acas-3a13f-default-rtdb.firebaseio.com",
    projectId: "acas-3a13f",
    storageBucket: "acas-3a13f.appspot.com",
    messagingSenderId: "58272733204",
    appId: "1:58272733204:web:96b8631d68f1e84312af01",
    measurementId: "G-05EBKZ3G7H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and password
    // TODO: CHECK 4 REAL EMAILZ
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    container.classList.add("sign-up-mode");
    // Get email and password
    const email = txtEmail2.value;
    const pass = txtPassword2.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.createUserWithEailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    }
    else {
      console.log('not logged in');
    }

  });

}());
