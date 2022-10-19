// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then ((inquirerResponses)=>{
        console.log('Generating your readme file');
        writeFile('readme.md',generateMarkdown({...inquirerResponses}));
    });
};

// Function call to initialize app
init();
