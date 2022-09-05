
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAWo1RS2TXE8SQYHMzzxrsALZp0Cqx-ZwE",
    authDomain: "formulario-mundo-invertido.firebaseapp.com",
    databaseURL: "https://formulario-mundo-invertido-default-rtdb.firebaseio.com",
    projectId: "formulario-mundo-invertido",
    storageBucket: "formulario-mundo-invertido.appspot.com",
    messagingSenderId: "895456374017",
    appId: "1:895456374017:web:04fb3fccd4006bc44cff00"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
export default app