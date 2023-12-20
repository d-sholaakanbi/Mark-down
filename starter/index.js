const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
 {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
 },
 {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
 },
 {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project:',
 },
 {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project:',
 },
 {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'MIT',
      'GPLv3',
      'AGPL',
      'Apache',
      'ISC',
      'WTFPL',
      'Unlicense',
      'Other'
    ]
 },
 {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines for your project:',
 },
 {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project:',
 },
 {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
 },
 {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
 }
];

// function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The README.md file has been saved!');
 });
}

// function to initialize program
function init() {
 inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
}

// function call to initialize program
init();