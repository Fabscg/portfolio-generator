
const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template.js');






fs.writeFile('./index.html', generatePage([profileDataArgs]), err => {
  if (err) throw new Error(err);

  console.log("Portfolio completed! Check out index.html to see the output!");
})







// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1){
//         console.log(profileDataArr[i]);
//     }
//     console.log("===========");
// };
// profileDataArgs.forEach((profileItem) => {
//     console.log(profileItem);
// })
