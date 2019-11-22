// Get items from dom
const form = document.querySelector("form");
let email = document.querySelector(".form-control");
const select = document.querySelector("#inputGroupSelect01");
const but = document.querySelector(".btn");
// Verify both inputs are fulfilled
let verify = [false, false];
select.addEventListener("change", () => {
    if (select.value === "Choose...")
        verify[1] = false;
    else
        verify[1] = true;
    buttonEnable();
});
email.addEventListener("input", () => {
    if (email.value.length === 0)
        verify[0] = false;
    else
        verify[0] = true;
    buttonEnable();
});

var buttonEnable = () => {
    if (verify[0] && verify[1])
        but.disabled = false;
    else {
        but.disabled = true;
    }
}

// Submission
but.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.checkValidity())
        successAppearance();
    else
        dangerAppearance();
})

var successAppearance = () => {
    var div = document.querySelector(".alert-success");
    document.querySelector(".alert-danger").classList.replace("d-block","d-none");
    div.classList.replace("d-none", "d-block");
    // Object to be submitted
    let mainObj = {
        mail: email.value.toLowerCase(),
        day: "Day-"+select.value,
        event: "ACES Expo"
    }
    email.value = "";
    but.disabled = true;
    console.log(mainObj);
    setTimeout(() => {
        div.classList.replace("d-block", "d-none");
    }, 5000);
}

var dangerAppearance = () => {
    document.querySelector(".alert-success").classList.replace("d-block","d-none");
    var div = document.querySelector(".alert-danger");
    div.classList.replace("d-none", "d-block");
    setTimeout(() => {
        div.classList.replace("d-block", "d-none");
    }, 5000);
}

// File System

//Create Directory
const fs = require('fs');
const path = './email';
function checker (){
  if (fs.existsSync(path)) {
    console.log('The email has been saved successfully.');
  }
  else{
    fs.mkdir('./email', (err) => {
        if (err) throw err;
        console.log('The email has been created.');
      });
    };};
  
// Add to specific file a content 
const name = './file';
function Reader(){
fs.appendFile(name, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });};



