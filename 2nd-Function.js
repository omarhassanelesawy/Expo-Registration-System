const fs = require('fs');
const path = './file';
function Reader(){
fs.appendFile(path, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });};