//Create Directory
const fs = require("fs");
const os = require("os");
const path = "./email";
const name = path + "/" + os.hostname() + "DAY" + data.day + ".txt";
function init_Folder() {
  if (fs.existsSync(path)) {
    console.log("The email has been saved successfully.");
  } else {
    fs.mkdir("./email", err => {
      if (err) throw err;
      console.log("The email has been created.");
    });
  }
}
init_Folder();
// Add to specific file a content
function append_data(data) {
  fs.appendFile(name, JSON.stringify(data) + ",", function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
function read_data(day) {
  if (fs.existsSync(path)) {
    fs.readFile("./Index.html", function read(err, data) {
      if (err) {
        throw err;
      }
      content = "[" + data.substring(0, data.length - 1) + "]";
      return JSON.parse(content);
    });
  } else {
    return [];
  }
}
// Get items from dom
const form = document.querySelector("form");
let email = document.querySelector(".form-control");
const select = document.querySelector("#inputGroupSelect01");
const but = document.querySelector(".btn");
// Verify both inputs are fulfilled
let verify = [false, false];
select.addEventListener("change", () => {
  if (select.value === "Choose...") verify[1] = false;
  else verify[1] = true;
  buttonEnable();
});
email.addEventListener("input", () => {
  if (email.value.length === 0) verify[0] = false;
  else verify[0] = true;
  buttonEnable();
});

var buttonEnable = () => {
  if (verify[0] && verify[1]) but.disabled = false;
  else {
    but.disabled = true;
  }
};

// Submission
but.addEventListener("click", e => {
  e.preventDefault();
  if (form.checkValidity()) successAppearance();
  else dangerAppearance();
});

var successAppearance = () => {
  var div = document.querySelector(".alert-success");
  document
    .querySelector(".alert-danger")
    .classList.replace("d-block", "d-none");
  div.classList.replace("d-none", "d-block");
  email.value = "";
  but.disabled = true;
  setTimeout(() => {
    div.classList.replace("d-block", "d-none");
  }, 5000);
};

var dangerAppearance = () => {
  document
    .querySelector(".alert-success")
    .classList.replace("d-block", "d-none");
  var div = document.querySelector(".alert-danger");
  div.classList.replace("d-none", "d-block");
  setTimeout(() => {
    div.classList.replace("d-block", "d-none");
  }, 5000);
};

// File System
