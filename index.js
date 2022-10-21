// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your web application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. What did you build, why did you build it, did you learn anything in the process?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What commands do you need to do to install any dependencies for the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain to the user how to use your project. Give steps and examples as necessary.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who did you collaborate with for this project? List links to third party assets and tutorials as applicable.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command will the user need to run tests?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What is the license for this project?',
    choices: ['The Unlicense',
    'Eclipse Public License 1.0',
    'GNU General Public License v3.0',
    'Boost Software License 1.0',
    'Apache License 2.0',
    'Mozilla License',  
    'MIT License',
    'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
];

// TODO: Create a function to write README file
function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating your readme file');
        writeFile('./utils/README.md', generateMarkdown({ ...inquirerResponses }));
    });
};

// Function call to initialize app
init();
