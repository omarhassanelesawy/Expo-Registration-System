const fs = require('fs');
const name = './file';
function Reader(){
fs.appendFile(path, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });};
