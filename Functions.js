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
  






