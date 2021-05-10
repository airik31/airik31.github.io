
function openResult() {
    let resultDiv = document.getElementById("result");
    hide(document.getElementById("maleDiv"));
    hide(document.getElementById("femaleDiv"));
    hide(document.getElementById("height"));
    hide(document.getElementById("weight"));
    hide(document.getElementById("age"));
    hide(document.getElementById("calculate"));
    resultDiv.style.display = "grid";


  }
  function hide (element) {
    element.style.display = "none";

  }
  function show (element) {
    element.style.display = "grid";

  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  var slider = document.getElementById("myRange");
  var output = document.getElementById("displayValue");
  output.innerHTML = `${slider.value} cm`; // Display the default slider value
  let height = slider.value;
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = `${this.value} cm`;
    height = this.value;
  }
  let weight = 50;
  let weightContent = document.getElementById("valueW");
  weightContent.innerHTML = `${weight} kg`;
  function plusW () {
    weight++;
    weightContent.innerHTML = `${weight} kg`;
  }
  function minusW () {
    weight--;
    weightContent.innerHTML = `${weight} kg`;
  }
  let age = 25;
  let ageContent = document.getElementById("valueAge");
  ageContent.innerHTML = `${age} years`;
  function plusAge () {
    age++;
    ageContent.innerHTML = `${age} years`;
  }
  function minusAge () {
    age--;
    ageContent.innerHTML = `${age} years`;
  }
let maleClick = false;
let femaleClick = false;
  function selectMale () {
    hide(document.getElementById("maleDiv"));
    hide(document.getElementById("femaleChecked"));
    show(document.getElementById("femaleDiv"));
    show(document.getElementById("maleChecked"));
    maleClick = true;
    femaleClick = false;

  }
  function selectFemale () {
    hide(document.getElementById("femaleDiv"));
    hide(document.getElementById("maleChecked"));
    show(document.getElementById("maleDiv"));
    show(document.getElementById("femaleChecked"));
    femaleClick = true;
    maleClick = false;

  }
  let x = "";
  function calculate () {
    if (femaleClick == false && maleClick == false) {
      return alert("Please choose your gender!")
    }
    let bmi = weight / ((height/100) * (height/100));
    document.getElementById("result").innerHTML = `<p>Your BMI is: ${bmi.toFixed(1)}!</p>`;
    if (maleClick == true) {
      let bodyFat = (1.39 * bmi) + (0.16 * age) - (10.34 * 1) -9;
      x = bodyFat;
      document.getElementById("result").innerHTML += `<p>Your estimated Body Fat Percentage is ${bodyFat.toFixed(1)}%.</p>`;
   } else if (femaleClick == true) {
      let bodyFat = (1.39 * bmi) + (0.16 * age) -9;
      x = bodyFat;
      document.getElementById("result").innerHTML += `<p>Your estimated Body Fat Percentage is ${bodyFat.toFixed(1)}%.</p>`;
      
   }
    let addBtn = () => {document.getElementById("result").innerHTML += "<button onclick='location.reload()' id='okBtn'>OK!</button>" };
    let bodyFatStringGenerator = (param) => {document.getElementById("result").innerHTML += `<p>Your estimated body fat indicates that ${param}!</p>`};
    if (maleClick = true) {
    switch (true) {
      case (x < 5):
        bodyFatStringGenerator("you only have essential body fat");
        break;
      case (x < 13):
        bodyFatStringGenerator("you have the amount of an athlete");
        
        break;  
      case (x < 17):
        bodyFatStringGenerator("you have the body composition of a fit person");
        break;  
      case (x < 24):
        bodyFatStringGenerator("you have an avarage body composition");
        break;  

      default:
        bodyFatStringGenerator("you are an obese person");
        break;
    }
    addBtn();
    openResult();
      }
    else {

      switch (true) {
        case (x < 13):
          bodyFatStringGenerator("you only have essential body fat");
          break;
        case (x < 20):
          bodyFatStringGenerator("you have the amount of an athlete");
          
          break;  
        case (x < 24):
          bodyFatStringGenerator("you have the body composition of a fit person");
          break;  
        case (x < 31):
          bodyFatStringGenerator("you have an avarage body composition");
          break;  
  
        default:
          bodyFatStringGenerator("you are an obese person");
          break;
      }
      addBtn();
      openResult();
        }

    }

  
