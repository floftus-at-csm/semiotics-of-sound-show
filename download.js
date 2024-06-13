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
import { getFirestore, doc, getDoc , serverTimestamp, collection } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


var url = new URL(window.location.href);
var id = url.searchParams.get('id');
console.log("the id is; ", id)

const docRef = doc(db, "degreeShowFinal", id);
const docSnap = await getDoc(docRef);
var current_imageDataURL = ""
var timestamp = ""
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  var data = docSnap.data();
  // console.log("image: ", data['image'])
  var generatedPattern = document.getElementById("generatedPattern");
  generatedPattern.src = data['image']
  current_imageDataURL = data['image'];
  console.log("the timestamp is: ", data['timestamp'])
  timestamp = data['timestamp']
  // generatedPattern.load()
  
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


var downloadButton  = document.getElementById("downloadButton");
downloadButton.addEventListener("click", function(){
  var generatedPattern = document.getElementById("generatedPattern");
  
    const date = timestamp.toDate();

  // Format date to a string (e.g., YYYYMMDD_HHMMSS)
  const formattedDate = formatDate(date);
  var current_filename = "Semiotics_of_Sound_"+formattedDate +'.png'
  downloadImage(current_imageDataURL, current_filename)

})

var endProgram  = document.getElementById("endProgram");
endProgram.addEventListener("click", function(){
  // savecanvas("end")
  console.log("end program");
  window.location.href="index.html";
});

var aboutProject  = document.getElementById("aboutProject");
aboutProject.addEventListener("click", function(){
  // savecanvas("end")
  console.log("about program");
  window.location.href="aboutProject.html";
});

function downloadImage(imageDataUrl, filename) {
  const link = document.createElement('a');
  link.href = imageDataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}_${month}_${year}_${hours}${minutes}`;
}

// Function to show a modal with buttons and handle redirection
function showAlertAndRedirect() {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the buttons
    const continueButton = document.getElementById('continueButton');
    const endButton = document.getElementById('endButton');

    // Set the timeout duration in milliseconds (120000ms = 2 minutes)
    const timeoutDuration = 60000;
    const modalTimeoutDuration = 15000;

// Use setTimeout to display the modal after the specified delay
    setTimeout(() => {
        modal.style.display = 'block';

        // Set another timeout to redirect if no action is taken within 30 seconds
        const modalTimeout = setTimeout(() => {
            window.location.href = 'index.html';
        }, modalTimeoutDuration);

        // When the user clicks on "Continue Session", close the modal and clear the modal timeout
        continueButton.onclick = function() {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
        }

        // When the user clicks on "End Session", redirect to the index page
        endButton.onclick = function() {
            window.location.href = 'index.html';
        }
    }, timeoutDuration);
}

// Call the function to set the timeout
showAlertAndRedirect();