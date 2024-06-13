const firebaseConfig = {
    apiKey: "AIzaSyAx-_HVvfOEoJg6j6KOZkHdD4X5ieC-v9k",
    authDomain: "semiotics-of-sound.firebaseapp.com",
    projectId: "semiotics-of-sound",
    storageBucket: "semiotics-of-sound.appspot.com",
    messagingSenderId: "486008437140",
    appId: "1:486008437140:web:1ba524120cc2cd4c1cf781",
    measurementId: "G-BYZJS87ZXC"
  };
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, setDoc, serverTimestamp, collection } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var currentURL = "";

// console.log("the cookie is: ", document.cookie)
// let decodedCookie = decodeURIComponent(document.cookie);
// let currentPatterns = decodedCookie.split(":")[1].split(",")
// console.log(currentPatterns)

var sendCopy =  document.getElementById("sendCopy");
sendCopy.addEventListener("click", function(){
   saveCanvas("qr"); // potentiall have input to this function
  console.log("send the user a copy");
  
});
var endProgram  = document.getElementById("endProgram");
endProgram.addEventListener("click", function(){
  saveCanvas("end")
  console.log("end program");
  window.location.href="index.html";
});

function saveCanvas(trajectory) {
  var canvas = document.getElementById("defaultCanvas0");
  console.log("canvas is: ", canvas)
    // Get the data URL of the canvas
    const dataURL = canvas.toDataURL('image/png');

    // Add a new document with a generated ID
    const docRef = doc(collection(db, "degreeShowFinal"));

    // Save the data URL to Firestore
    setDoc(docRef, {
        image: dataURL,
      timestamp: serverTimestamp(),
      weavingPatterns: currentPatterns
    }).then(() => {
      if(trajectory == "qr"){
        console.log("Document successfully written!");
        // Create a URL with the document ID as a search parameter
        const url = new URL(window.location.origin + '/qrPage.html')
        // const url = new URL('https://aluminum-ringed-mountain.glitch.me/qrPage.html');
        url.searchParams.set('id', docRef.id);
        console.log("URL with document ID: ", url.toString());
        window.location.href=url;
      }
        
      
        
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}
