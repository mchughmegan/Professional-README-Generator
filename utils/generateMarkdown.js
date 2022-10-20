// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license !== "None"){
  //   toLowerCase("license");
  //   return `![${license} badge](https://img.shields.io/badge/License-${license}-blue)`
  // }
  // return "";
  if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen)`
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license !== "None"){
  //   return `https://opensource.org/licenses/${license}`
  // }
  // return "";
  if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0 `
  }
  else if (license === "MIT") {
    return `https://opensource.org/licenses/MIT `
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License
    
    This project is licensed under the ${license}. To learn more about this license, go to:`
  }
  return "No license was used for this project.";

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
* [License](#license)
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
${renderLicenseLink(data.license)}

## Questions

If you have any questions, please contact me at ${data.email}.
For more of my work, please refer to my GitHub page:
[${data.github}](https://github.com/${data.github}/)`
;
}

module.exports = generateMarkdown;
