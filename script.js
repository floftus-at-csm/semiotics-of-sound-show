
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  function writeSelection(patterns){
    var currentPatternSelectionText = document.getElementById("currentPatternSelection");
    currentPatternSelectionText.innerHTML = patterns.join(', ')
  }
  
  const btn = document.querySelector("button"); // Get the button from the page
  if (btn) { // Detect clicks on the button
    btn.onclick = function () {
      // The 'dipped' class in style.css changes the appearance on click
      btn.classList.toggle("dipped");
    };
  }
  
  var listOfPatterns = [];
  var fourfourTwillButton = document.getElementById("fourfourTwill");
  fourfourTwillButton.onclick = function(){
    console.log("fourfourTwill")
    if(listOfPatterns.includes('fourfourTwill')){
      // alert("you've already chosen this pattern")
      
      listOfPatterns = removeItemOnce(listOfPatterns, "fourfourTwill") //removes item from list
  
      fourfourTwillButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      fourfourTwillButton.classList.add("unselectedPattern")
      
    }else{
    listOfPatterns.push("fourfourTwill");  
      fourfourTwillButton.classList.add("selectedPattern");
      fourfourTwillButton.classList.remove("unselectedPattern");
    }
    
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
    
  }
  
  var threefiveTwillButton = document.getElementById("threefiveTwill");
  threefiveTwillButton.onclick = function(event){
    event.preventDefault()
    console.log("threefiveTwill")
    if(listOfPatterns.includes('threefiveTwill')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "threefiveTwill") //removes item from list
       threefiveTwillButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      threefiveTwillButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("threefiveTwill"); 
      threefiveTwillButton.classList.add("selectedPattern")
      threefiveTwillButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var fourtwoPlainButton = document.getElementById("fourtwoPlain"); // document = HTML
  fourtwoPlainButton.onclick = function(event){
    event.preventDefault()
    console.log("fourtwoPlain")
    if(listOfPatterns.includes('fourtwoPlain')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns,"fourtwoPlain") //removes item from list
       fourtwoPlainButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
       fourtwoPlainButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("fourtwoPlain"); 
      fourtwoPlainButton.classList.add("selectedPattern")
      fourtwoPlainButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var onethreeBrokenTwill = document.getElementById("onethreebrokenTwill"); // document = HTML
  onethreeBrokenTwill.onclick = function(event){
    event.preventDefault()
    console.log("onethreebrokenTwill")
    if(listOfPatterns.includes('onethreebrokenTwill')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "onethreebrokenTwill") //removes item from list
       onethreeBrokenTwill.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      onethreeBrokenTwill.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("onethreebrokenTwill");  
      onethreeBrokenTwill.classList.add("selectedPattern")
      onethreeBrokenTwill.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var honeycombButton = document.getElementById("honeycomb"); // document = HTML
  honeycombButton.onclick = function(event){
    event.preventDefault()
    console.log("honeycomb")
    if(listOfPatterns.includes('honeycomb')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "honeycomb") //removes item from list
       honeycombButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      honeycombButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("honeycomb");  
      honeycombButton.classList.add("selectedPattern")
      honeycombButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var combinationTwillButton = document.getElementById("combinationTwill"); // document = HTML
  combinationTwillButton.onclick = function(event){
    event.preventDefault()
    console.log("combinationTwill")
    if(listOfPatterns.includes('combinationTwill')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "combinationTwill") //removes item from list
       combinationTwillButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      combinationTwillButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("combinationTwill");  
      combinationTwillButton.classList.add("selectedPattern")
      combinationTwillButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var eightSatinButton = document.getElementById("eightSatin"); // document = HTML
  eightSatinButton.onclick = function(event){
    event.preventDefault()
    console.log("eightSatin")
    if(listOfPatterns.includes('eightSatin')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "eightSatin") //removes item from list
       eightSatinButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      eightSatinButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("eightSatin");  
      eightSatinButton.classList.add("selectedPattern")
      eightSatinButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var eightSateenButton = document.getElementById("eightSateen"); // document = HTML
  eightSateenButton.onclick = function(event){
    event.preventDefault()
    console.log("eightSateen")
    if(listOfPatterns.includes('eightSateen')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "eightSateen") //removes item from list
       eightSateenButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      eightSateenButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("eightSateen");  
      eightSateenButton.classList.add("selectedPattern")
      eightSateenButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var blackwhiteTwillButton = document.getElementById("blackwhiteTwill"); // document = HTML
  blackwhiteTwillButton.onclick = function(event){
    event.preventDefault()
    console.log("blackwhiteTwill")
    if(listOfPatterns.includes('blackwhiteTwill')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "blackwhiteTwill") //removes item from list
       blackwhiteTwillButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      blackwhiteTwillButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("blackwhiteTwill");  
      blackwhiteTwillButton.classList.add("selectedPattern");
      blackwhiteTwillButton.classList.remove("unselectedPattern");
    }
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  var entwinedTwillButton = document.getElementById("entwinedTwill"); // document = HTML
  entwinedTwillButton.onclick = function(event){
    event.preventDefault()
    console.log("entwinedTwill")
    if(listOfPatterns.includes('entwinedTwill')){
      // alert("you've already chosen this pattern")
       listOfPatterns = removeItemOnce(listOfPatterns, "entwinedTwill") //removes item from list
       entwinedTwillButton.classList.remove("selectedPattern") // remove 'selectedpattern' from classList
      entwinedTwillButton.classList.add("unselectedPattern") // remove 'selectedpattern' from classList
    }else{
      listOfPatterns.push("entwinedTwill");  
      entwinedTwillButton.classList.add("selectedPattern")
      entwinedTwillButton.classList.remove("unselectedPattern");
    }
    entwinedTwillButton.
    console.log(listOfPatterns);
    writeSelection(listOfPatterns);
  }
  
  let nextBool = false;
  let currentPatterns = [];
    console.log("in next area")
  
  
    let sketchHolder = document.getElementById('mainCanvas');
    var topText = document.getElementById("topText");
    let mic, recorder, soundFile;
    let cnv;
    let state = 0; // mousePress will increment from Record, to Stop, to Play
    let song, analyzer;
    let numBlocks = 400;
    let blockWidth = 1;
    let prevCentroid = 0;
    let drawBool = false;
    let blackC;
    let fft;
    let fourfourTwill = [
        [1,1,1,2,2,2,2,1],
        [1,1,1,2,2,2,2,1],
        [1,1,2,2,2,2,1,1],
        [1,1,2,2,2,2,1,1],
        [1,2,2,2,2,1,1,1],
        [1,2,2,2,2,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,1,1,1,1,2],
        [2,2,2,1,1,1,1,2],
        [2,2,1,1,1,1,2,2],
        [2,2,1,1,1,1,2,2],
        [2,1,1,1,1,2,2,2],
        [2,1,1,1,1,2,2,2],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2]
      ];
  
    let threefiveTwill = [
        [1,1,2,2,2,2,2,1],
        [1,1,2,2,2,2,2,1],
        [1,2,2,2,2,2,1,1],
        [1,2,2,2,2,2,1,1],
        [2,2,2,2,2,1,1,1],
        [2,2,2,2,2,1,1,1],
        [2,2,2,2,1,1,1,2],
        [2,2,2,2,1,1,1,2],
        [2,2,2,1,1,1,2,2],
        [2,2,2,1,1,1,2,2],
        [2,2,1,1,1,2,2,2],
        [2,2,1,1,1,2,2,2],
        [2,1,1,1,2,2,2,2],
        [2,1,1,1,2,2,2,2],
        [1,1,1,2,2,2,2,2],
        [1,1,1,2,2,2,2,2]
      ];
  
    let fivethreeTwill= [
        [2,2,1,1,1,1,1,1],
        [2,2,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,2,2],
        [1,1,1,1,1,1,2,2],
        [1,1,1,1,1,2,2,2],
        [1,1,1,1,1,2,2,2],
        [1,1,1,1,2,2,2,1],
        [1,1,1,1,2,2,2,1],
        [1,1,1,2,2,2,1,1],
        [1,1,1,2,2,2,1,1],
        [1,1,2,2,2,1,1,1],
        [1,1,2,2,2,1,1,1],
        [1,2,2,2,1,1,1,1],
        [1,2,2,2,1,1,1,1],
        [2,2,21,1,1,1,1]
      ];
  
  
    let fourtwoPlain= [
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1]
      ];
  
    let onethreebrokenTwill = [
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [2,1,2,2,2,1,2,2],
        [1,2,2,2,1,2,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [2,1,2,2,2,1,2,2],
        [1,2,2,2,1,2,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [2,1,2,2,2,1,2,2],
        [1,2,2,2,1,2,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [2,1,2,2,2,1,2,2],
        [1,2,2,2,1,2,2,2]
      ];
  
    let recliningTwill = [
        [2,2,2,2,2,2,1,1],
        [2,2,2,2,1,1,2,2],
        [2,2,1,1,2,2,2,2],
        [1,1,2,2,2,2,2,2],
        [2,2,2,2,2,2,1,1],
        [2,2,2,2,1,1,2,2],
        [2,2,1,1,2,2,2,2],
        [1,1,2,2,2,2,2,2],
        [2,2,2,2,2,2,1,1],
        [2,2,2,2,1,1,2,2],
        [2,2,1,1,2,2,2,2],
        [1,1,2,2,2,2,2,2],
        [2,2,2,2,2,2,1,1],
        [2,2,2,2,1,1,2,2],
        [2,2,1,1,2,2,2,2],
        [1,1,2,2,2,2,2,2]
      ];
  
    let honeycomb = [
        [2,2,2,1,2,2,2,2],
        [2,2,1,2,1,2,2,2],
        [2,1,2,1,2,1,2,2],
        [1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1],
        [1,2,1,1,1,2,1,2],
        [2,1,2,1,2,1,2,2],
        [2,2,1,2,1,2,2,2],
        [2,2,2,1,2,2,2,2],
        [2,2,1,2,1,2,2,2],
        [2,1,2,1,2,1,2,2],
        [1,2,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,1],
        [1,2,1,1,1,2,1,2],
        [2,1,2,1,2,1,2,2],
        [2,2,1,2,1,2,2,2]
      ];
  
    let combinationTwill = [
        [2,1,1,1,1,2,2,2],
        [1,2,1,1,2,1,2,2],
        [1,1,2,1,2,2,1,2],
        [1,1,1,2,2,2,2,1],
        [2,1,1,1,1,2,2,2],
        [1,2,1,1,2,1,2,2],
        [1,1,2,1,2,2,1,2],
        [1,1,1,2,2,2,2,1],
        [2,1,1,1,1,2,2,2],
        [1,2,1,1,2,1,2,2],
        [1,1,2,1,2,2,1,2],
        [1,1,1,2,2,2,2,1],
        [2,1,1,1,1,2,2,2],
        [1,2,1,1,2,1,2,2],
        [1,1,2,1,2,2,1,2],
        [1,1,1,2,2,2,2,1]
      ];
  
    let eightSatin = [
        [2,2,2,2,2,1,2,2],
        [2,2,1,2,2,2,2,2],
        [2,2,2,2,2,2,2,1],
        [2,2,2,2,1,2,2,2],
        [2,1,2,2,2,2,2,2],
        [2,2,2,2,2,2,1,2],
        [2,2,2,1,2,2,2,2],
        [1,2,2,2,2,2,2,2],
        [2,2,2,2,2,1,2,2],
        [2,2,1,2,2,2,2,2],
        [2,2,2,2,2,2,2,1],
        [2,2,2,2,1,2,2,2],
        [2,1,2,2,2,2,2,2],
        [2,2,2,2,2,2,1,2],
        [2,2,2,1,2,2,2,2],
        [1,2,2,2,2,2,2,2]
    ];
  
    let eightSateen = [
        [1,1,1,1,1,2,1,1],
        [1,1,2,1,1,1,1,1],
        [1,1,1,1,1,1,1,2],
        [1,1,1,1,2,1,1,1],
        [1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1],
        [1,1,1,2,1,1,1,1],
        [2,1,1,1,1,1,1,1],
        [1,1,1,1,1,2,1,1],
        [1,1,2,1,1,1,1,1],
        [1,1,1,1,1,1,1,2],
        [1,1,1,1,2,1,1,1],
        [1,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,1],
        [1,1,1,2,1,1,1,1],
        [2,1,1,1,1,1,1,1]
    ];
  
    let shadingZigzag = [
        [2,2,1,1,2,2,1,1],
        [1,2,2,1,1,2,2,1],
        [2,1,1,2,2,1,1,2],
        [1,1,2,2,1,1,2,2],
        [1,2,1,1,1,2,1,1],
        [1,1,2,1,1,1,2,1],
        [2,1,1,1,2,1,1,1],
        [1,1,1,2,1,1,1,2],
        [2,2,1,1,2,2,1,1],
        [1,2,2,1,1,2,2,1],
        [2,1,1,2,2,1,1,2],
        [1,1,2,2,1,1,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [2,1,2,2,2,1,2,2],
        [1,2,2,2,1,2,2,2]
    ];
  
    let fourfourPlain = [
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [1,1,1,1,2,2,2,2],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1],
        [2,2,2,2,1,1,1,1]
    ];
  
    let brokenTwill = [
        [2,1,2,2,2,2,2,2],
        [2,2,2,1,2,2,2,2],
        [2,2,2,2,1,2,2,2],
        [1,2,2,2,2,2,2,1],
        [2,1,2,2,2,2,2,2],
        [2,2,2,1,2,2,2,2],
        [2,2,2,2,1,2,2,2],
        [1,2,2,2,2,2,2,1],
        [2,1,2,2,2,2,2,2],
        [2,2,2,1,2,2,2,2],
        [2,2,2,2,1,2,2,2],
        [1,2,2,2,2,2,2,1],
        [2,1,2,2,2,2,2,2],
        [2,2,2,1,2,2,2,2],
        [2,2,2,2,1,2,2,2],
        [1,2,2,2,2,2,2,1]
    ];
  
    let blackwhiteTwill = [
        [2,1,2,1,2,2,2,1],
        [1,2,1,2,2,2,1,2],
        [2,1,2,2,2,1,2,1],
        [1,2,2,2,1,2,1,2],
        [2,2,2,1,2,1,2,1],
        [2,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,2],
        [1,2,1,2,1,2,2,2],
        [2,1,2,1,2,2,2,1],
        [1,2,1,2,2,2,1,2],
        [2,1,2,2,2,1,2,1],
        [1,2,2,2,1,2,1,2],
        [2,2,2,1,2,1,2,1],
        [2,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,2],
        [1,2,1,2,1,2,2,2]
    ];
  
    let checkerTwill = [
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [1,1,2,2,1,1,2,2],
        [1,1,2,2,1,1,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [1,1,2,2,1,1,2,2],
        [1,1,2,2,1,1,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [1,1,2,2,1,1,2,2],
        [1,1,2,2,1,1,2,2],
        [2,2,1,2,2,2,1,2],
        [2,2,2,1,2,2,2,1],
        [1,1,2,2,1,1,2,2],
        [1,1,2,2,1,1,2,2]
    ];
  
    let entwinedTwill = [
        [2,2,1,1,2,2,1,1],
        [1,2,1,2,1,2,2,1],
        [1,1,2,2,1,1,2,2],
        [2,1,2,1,2,1,1,2],
        [2,2,1,1,2,2,1,1],
        [2,1,1,2,2,1,2,2],
        [1,1,2,2,1,1,2,2],
        [1,2,2,1,1,2,1,2],
        [2,2,1,1,2,2,1,1],
        [1,2,1,2,1,2,2,1],
        [1,1,2,2,1,1,2,2],
        [2,1,2,1,2,1,1,2],
        [2,2,1,1,2,2,1,1],
        [2,1,1,2,2,1,2,2],
        [1,1,2,2,1,1,2,2],
        [1,2,2,1,1,2,1,2]
    ];
  
    var allPatterns={
      "fourfourTwill": fourfourTwill,
      "threefiveTwill": threefiveTwill,
      "fivethreeTwill": fivethreeTwill,
      "fourtwoPlain": fourtwoPlain,
      "onethreebrokenTwill": onethreebrokenTwill,
      "recliningTwill": recliningTwill,
      "honeycomb": honeycomb,
      "combinationTwill": combinationTwill,
      "eightSatin": eightSatin,
      "eightSateen": eightSateen,
      "shadingZigzag": shadingZigzag,
      "fourfourPlain": fourfourPlain,
      "brokenTwill": brokenTwill,
      "blackwhiteTwill": blackwhiteTwill,
      "checkerTwill": checkerTwill,
      "entwinedTwill": entwinedTwill,
    }
    console.log("pattern name check: ", allPatterns["fivethreeTwill"])
    let patterns = [];
    let patternObjects = []
    let canvasHeight = 0;
    let prevAmplitude = 0;
    let prevEnergy = 0;
    let yPos = 0;
    let xPos2 = 0;
    let xPos3 = 0;
    let forceFrameRate = 18;
  
    function setup() {
      userStartAudio();
      canvasHeight = parseInt(numBlocks*1.5);
      yPos = canvasHeight;
      cnv = createCanvas(numBlocks, canvasHeight);
      xPos3 = numBlocks;
      background(255);
      cnv.parent(sketchHolder);
      // cnv.hide();
  
      // create an audio in
      mic = new p5.AudioIn();
  
      // users must manually enable their browser microphone for recording to work properly!
      // mic.start();
  
      // create a sound recorder
      recorder = new p5.SoundRecorder();
  
      // connect the mic to the recorder
      recorder.setInput(mic);
  
      // create an empty sound file that we will use to playback the recording
      soundFile = new p5.SoundFile();
      blackC = color(65);
      fft = new p5.FFT();
  
  
      rectMode(CENTER);
        noStroke();
  
    }
  var nextButton = document.getElementById("nextButton");
  nextButton.onclick = function(){
    if(listOfPatterns.length > 3){
      // let cookieText = ""
      // for(let i=0; i< listOfPatterns.length; i++){
      //   cookieText = cookieText + listOfPatterns[i] + ", "
      // }
      // console.log(cookieText)
      // document.cookie = "listOfPatterns: " +cookieText + ";";
      // console.log(document.cookie)
      // window.location.href="recordnoise.html"
      var patternSelectionHTML = document.getElementById("patternSelection");
      patternSelectionHTML.style.display = "none";
      var recordContent = document.getElementById("recordContent");
      recordContent.style.display = "flex";
      currentPatterns = listOfPatterns;
      console.log("listOfPatterns: ", listOfPatterns);
      // nextBool = true;
      // recordNoise();
    }else{
      alert("You need to pick 4 patterns or more")
    }
  }
  
  // if(nextBool == true){
  // function recordNoise(){
  
    function draw(){
      if(drawBool){
        // ============================
      // Analysis 
      // Get the average (root mean square) amplitude
      let amplitude = analyzer.getLevel();
      // console.log("the amplitude is: ", amplitude);
      let amplitudeChange = prevAmplitude - amplitude;
        // console.log("the amplitudeChange is: ", amplitudeChange);
      let spectrum = fft.analyze();
        // console.log("the spectrum is: ", spectrum);
      spectralCentroid = fft.getCentroid();
      let centroidEnergy = fft.getEnergy(spectralCentroid);
        console.log("centroidEnergy is: ", centroidEnergy);
      let energyChange = prevEnergy - centroidEnergy;
      let centroidChange = prevCentroid - spectralCentroid;
      let waveform = fft.waveform();
  
      // ============================
      // Selection 1 - bottom to top
         // map(amplitude, 0, 1, 1, 50);
      let patternChoice1 = int(map(amplitudeChange,-0.01,0.01,0,patternObjects.length-1));// choosing first pattern with change in volume over time
          console.log("the patternChoice is: ", patternChoice1)
        let currentBlockWidth  = 0;
        try{
         currentBlockWidth = patternObjects[patternChoice1].patternWidth;  
        }catch(error){
           currentBlockWidth = patternObjects[patternObjects.length-1].patternWidth;  
        }
        console.log("currentBlockWidth: ", currentBlockWidth)
  
        print("currentBlockWidth: ", currentBlockWidth);
        for(let i=0; i< width; i+=(currentBlockWidth* blockWidth)){
          // console.log("i is: ", i);
          if(patternChoice1<patternObjects.length-1 && patternChoice1 > 0){
            patternObjects[patternChoice1].drawSquare(i, yPos, blackC)   
              }else{
            patternObjects[patternObjects.length-1].drawSquare(i, yPos, blackC)   
          }    
        }
  
  
      // ============================
      // Selection 2 - Left to Right  
        let patternChoice2 = int(map(energyChange, -100, 100, 0, patternObjects.length-1));    
  
        let currentBlockWidth2  = 0;
        for(let j=0; j< height; j+=(15*blockWidth)){
          if(patternChoice2<patternObjects.length-1 && patternChoice2 > 0){
            patternObjects[patternChoice2].drawSquare(xPos2, j, blackC) 
            currentBlockWidth2 = patternObjects[patternChoice2].patternWidth;
              }else{
            patternObjects[patternObjects.length-1].drawSquare(xPos2, j, blackC);
                currentBlockWidth2 = patternObjects[patternObjects.length-1].patternWidth;
          }    
        }
  
  
  
        // ============================
        // Analysis 3 - Right to Left
    //     print("centroid change is: ", centroidChange);
    //     let patternChoice3 = int(map(centroidChange, -2000, 2000, 0, patternObjects.length-1));    
  
    //     let currentBlockWidth3  = 0;
    //     for(let k=0; k< height; k+=(15*blockWidth)){
    //       if(patternChoice3<patternObjects.length-1 && patternChoice3 > 0){
    //         patternObjects[patternChoice3].drawSquare(xPos3, k, blackC) 
    //         currentBlockWidth2 = patternObjects[patternChoice3].patternWidth;
    //           }else{
    //         patternObjects[patternObjects.length-1].drawSquare(xPos3, k, blackC);
    //             currentBlockWidth2 = patternObjects[patternObjects.length-1].patternWidth;
    //       }    
    //     }
  
  
      // rect(xPos,yPos - blockWidth , 10 + rms * 200, 10 + rms * 200);
      yPos = yPos - blockWidth*15;
      xPos2 = xPos2 + blockWidth*currentBlockWidth2;
  
      xPos3 = xPos3 - blockWidth*currentBlockWidth2;
  
      prevCentroid = spectralCentroid;
      prevAmplitude = amplitude;
      prevEnergy = centroidEnergy;
      }
      frameRate(forceFrameRate);
    }
  
    function stopAudio(){
      console.log("in stop audio")
      recorder.stop();
      console.log("soundfile is: ", soundFile)
      saveSound(soundFile, 'mySound.wav');
      state++
      // add audio to button  
    }
  
    var generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", function(){
      sketchHolder.classList.remove("hidden")  
      // saveSound(soundFile, 'mySound.wav');
      var recordingContent = document.getElementById("recordingContent");
      recordingContent.classList.add("hidden")
      topText.innerText = "GENERATING..."
  
      for(const patternName of currentPatterns){
        console.log("patternName: ", patternName)
        if(patternName != ""){
          patterns.push(allPatterns[patternName.trim()])
        }
        console.log("the current patterns are: ", patterns)
      }
        patternObjects = []
      for(let i=0; i<patterns.length; i++){
        let tempPattern = new WeavingPattern(patterns[i], blockWidth, blockWidth);
        patternObjects.push(tempPattern);
      }
  
      soundFile.connect(fft);
  
      analyzer = new p5.Amplitude();
      analyzer.setInput(soundFile);
      soundFile.rate(1.5);
      songDuration = soundFile.duration();
      drawBool = true;
      soundFile.setVolume(1.0);
      soundFile.play();
      soundFile.onended(songEnded); 
      console.log("the pattern objects are: ", patternObjects)
      movementPerFrame = parseInt(canvasHeight / (songDuration * forceFrameRate));
      console.log("songDuration is: ", songDuration)
      console.log("the movementPerFrame is: ", movementPerFrame);
    })
  
  
  
  
    var recordButton = document.getElementById("recordButton");
    var rerecordButton = document.getElementById("rerecordButton");
    rerecordButton.addEventListener('click', function(){
     //  state = 0;
     //  recordButton.innerHTML = "<img class='hover:cursor-pointer hover:blur-sm' src='https://cdn.glitch.global/ca16553b-2755-48d9-a1a2-899a6b4c75dd/record%20button.png?v=1714132808854'/>"
     //   var topText = document.getElementById("topText");
     // topText.innerText = "Click To Record"
     //     var audioContent = document.getElementById("audioContent");
     //   audioContent.classList.add("hidden");
      window.location.reload();
      // recordAudio();
    })
    recordButton.addEventListener('click', function(){
      console.log("record button is pressed")
      // start recording audio
      console.log("the state is: ", state);
       if (state === 0 ) {
         console.log("trying to record audio")
         recordAudio();
      }else if(state == 1){
        soundFile.play();
      }
    })
  
    function recordAudio(){
          recordButton.innerHTML = "<img class='min-w-72 object-contain' src='images/mic-fading-button.gif'/>"
        var topText = document.getElementById("topText");
        topText.innerText = "RECORDING..." //the text
         soundFile = new p5.SoundFile();
         mic.start(function(){
           console.log("starting audio")
           recorder.record(soundFile);
           setTimeout(function(){
             console.log("ending audio")
             recorder.stop();
             mic.dispose();
             setTimeout(function(){
  
               // soundFile.play();
               // recordButton.innerHTML = "<img class='hover:cursor-pointer hover:blur-sm' src='https://cdn.glitch.global/ca16553b-2755-48d9-a1a2-899a6b4c75dd/record%20button.png?v=1714132808854'/>"
               recordButton.innerHTML = "<img class='hover:cursor-pointer hover:invert min-w-72 object-contain' src='images/25569-6-play-button-transparent-thumb.png'/>"
               var audioContent = document.getElementById("audioContent");
               audioContent.classList.remove("hidden");
               topText.innerText = "LISTEN BACK"
               // audioContent.innerHTML = ""
               state =1;
             }, 500);
           }, 5000);
         })
    }
  
    class WeavingPattern {
      constructor(pattern, cellSizeX, cellSizeY) {
        this.pattern = pattern;
        this.patternHeight = pattern.length;
        this.patternWidth = pattern[0].length;
        this.cellSizeX = cellSizeX;
        this.cellSizeY = cellSizeY;
      }
  
      drawSquare(xPos, yPos, currentColor) {
        for (let y = 0; y < this.patternHeight; y++) {
          for (let x = 0; x < this.patternWidth; x++) {
            let colorIndex = this.pattern[y][x];
            let xCoord = xPos + x * this.cellSizeX  ;
            let yCoord = yPos + y * this.cellSizeY ;
  
            if (colorIndex === 1) {
              fill(currentColor); 
            } else if (colorIndex === 2) {
              // fill(255); // White
              noFill();
            }
  
            rect( xCoord,  yCoord, this.cellSizeX , this.cellSizeY);
          }
        }
      }
  
      drawGrid(startX, startY, numRows, numCols, currentColor) {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let xPosition = j * this.patternWidth * this.cellSizeX ;
            let yPosition = i * this.patternHeight * this.cellSizeY;
            // console.log("this.startX", this.startX);
            this.drawSquare(startX + xPosition, startY +yPosition, currentColor);
          }
        }
      }
      combinePatterns(otherPattern) {
        // Find the least common multiple of pattern widths and heights
        let lcmWidth = lcm(this.patternWidth, otherPattern.patternWidth);
        let lcmHeight = lcm(this.patternHeight, otherPattern.patternHeight);
  
        // Create versions of both patterns based on the common multiples
        let pattern1Extended = this.extendPattern(lcmWidth, lcmHeight);
        let pattern2Extended = otherPattern.extendPattern(lcmWidth, lcmHeight);
  
        // Initialize the combined pattern as an empty array
        let combinedPattern = [];
        console.log("pattern extended1: ", pattern1Extended);
        console.log("pattern extended2: ", pattern2Extended);
        // Loop over the extended patterns to combine them
        for (let y = 0; y < lcmHeight; y++) {
          let row = [];
          for (let x = 0; x < lcmWidth; x++) {
            let value1 = pattern1Extended[y][x];
            let value2 = pattern2Extended[y][x];
  
            // Apply custom logic to determine the output pattern
            let outputValue;
            if (value1 === 1 && value2 === 1) {
              outputValue = 1;
            } else if (value1 === 2 && value2 === 2) {
              outputValue = 2;
            } else if (value1 === 2 && value2 === 1) {
              outputValue = 2;
            } else if (value1 === 1 && value2 === 2) {
              outputValue = 1;
            }
  
            row.push(outputValue);
          }
          combinedPattern.push(row);
        }
  
        // Create a new WeavingPattern instance for the combined pattern
        return new WeavingPattern(combinedPattern, this.cellSizeX, this.cellSizeY);
      }
    getDensity(pattern) {
      let total = 0;
      let count = 0;
  
      for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[0].length; x++) {
          total += pattern[y][x];
          count++;
        }
      }
  
      // Calculate the average score
      if (count > 0) {
        return total / count;
      } else {
        return 0; // Return 0 if there are no elements in the pattern
      }
    }
      extendPattern(width, height) {
        // Calculate how many times the pattern should be repeated in both dimensions
        let repeatX = Math.ceil(width / this.patternWidth);
        let repeatY = Math.ceil(height / this.patternHeight);
  
        // Create a new pattern array based on the specified width and height
        let extendedPattern = [];
  
        for (let y = 0; y < height; y++) {
          let row = [];
          for (let x = 0; x < width; x++) {
            // Calculate the corresponding position in the original pattern
            let originalX = x % this.patternWidth;
            let originalY = y % this.patternHeight;
            row.push(this.pattern[originalY][originalX]);
          }
          extendedPattern.push(row);
        }
  
        return extendedPattern;
      }
    }
  
    // Function to find the least common multiple
    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }
  
    // Function to find the greatest common divisor
    function gcd(a, b) {
      if (b === 0) return a;
      return gcd(b, a % b);
    }
  
    function getDateString() {
      const date = new Date();
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day =`${date.getDate()}`.padStart(2, '0');
      return `${day}${month}${year}`
    }
  
  
    // function mouseClicked(){
  
    //   let currentTime = getDateString();
    //   console.log(currentTime)
    //   let outputFilename = songName + "_" + currentTime
    //   saveCanvas(outputFilename, 'png');
    // }
  
  
  
    function songEnded(dur) { 
      // send image to database
      topText.innerHTML = "YOUR UNIQUE SOUND <br> WEAVING PATTERN IS READY"
      var afterGenerate = document.getElementById("afterGenerate");
      afterGenerate.classList.remove('hidden');
      console.log("song ended!");
        drawBool = false;
      } 
  // }
  
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