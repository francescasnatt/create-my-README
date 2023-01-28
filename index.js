const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown');

function init(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Which command should be run to install necessary dependencies?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Describe how the user can use the application.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Which command should be run to test the application?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Which email address is best for developers to contact you on?',
        name: 'contact',
      },
      {
        type: 'input',
        message: 'Input the link to your GitHub repo.',
        name: 'repo',
      },
      {
        type: 'list',
        message: 'What kind of licence should your project have?',
        name: 'licence',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
  ])
  .then((response) => {
    const readMe = generateReadme(response);
    writeToFile('README.md', readMe);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    {err ? console.error(err) : console.log("Success!")});
}