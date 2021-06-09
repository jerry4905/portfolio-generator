const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name1, github] = profileDataArgs;


//console.log(profileDataArgs);
//const printProfileData = profileDataArr => {
    // this
//    for (let i = 0; i < profileDataArr.length; i++) {
//        console.log(profileDataArr[i]);
//    } console.log('================');
    //is the same as this
    //profileDataArr.forEach((profileItem) => console.log(profileItem));};
//printProfileData(profileDataArgs);

  fs.writeFile('index.html', generatePage(name1, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
