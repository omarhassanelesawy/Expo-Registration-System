//Create Directory
const fs = require("fs");
const os = require("os");
const path = "./email";
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
  const name = path + "/" + os.hostname() + "DAY" + data.day + ".txt";
  console.log(name);
  fs.appendFile(name, JSON.stringify(data) + ",", function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
// append_data({ email: "abdo", day: 1 });
function read_data(day) {
  const name = path + "/" + os.hostname() + "DAY" + day + ".txt";
  // console.log(name);
  if (fs.existsSync(name)) {
    fs.readFile(name, "utf8", function read(err, data) {
      if (err) {
        throw err;
      }
      if (data == "") return [];
      content = "[" + data.substring(0, data.length - 1) + "]";
      console.log(JSON.parse(content));
      return JSON.parse(content);
    });
  } else {
    return [];
  }
}
// setTimeout(read_data, 3000, 1);
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

// function checkRedundancy(obj) {
//   console.log(read_data(obj.day));
//   if (true)
//     return true;
//   else return false;
// }

var successAppearance = () => {
  var div = document.querySelector(".alert-success");
  var mainObj = {
    email: email.value.toLowerCase(),
    day: ""+select.value,
    event: "ACES Expo"
  };
  // checkRedundancy(mainObj);
  append_data(mainObj);
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
