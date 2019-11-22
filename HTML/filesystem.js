const fs = require("fs");

console.log(fs.existsSync("../email"));
fs.mkdir("./email", err => {
  if (err) throw err;
});
