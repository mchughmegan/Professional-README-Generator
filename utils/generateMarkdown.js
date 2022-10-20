// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![${license} badge](https://img.shields.io/badge/License-${license}-blue)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `* [License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License
    
    This project is licensed under the ${license}.`
  }
  return "";

} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Credits

${data.credits}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please contact me at ${data.email}.
For more of my work, please refer to my GitHub page:
[${data.github}](https://github.com/${data.github}/)`
;
}

module.exports = generateMarkdown;
