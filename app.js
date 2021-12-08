// const fs = require('fs');
// const generatePage = require('./scr/page-template');

const inquirer = require('inquirer')



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);

};



const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};


promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));



  



// fs.writeFile('./index.html', pageHTML, err => {


//   console.log("Portfolio completed! Check out index.html to see the output!");
// })







// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1){
//         console.log(profileDataArr[i]);
//     }
//     console.log("===========");
// };
// profileDataArgs.forEach((profileItem) => {
//     console.log(profileItem);
// })
