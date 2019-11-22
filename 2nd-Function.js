const fs = require('fs');
const name = './file';
function Reader(){
fs.appendFile(name, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });};
