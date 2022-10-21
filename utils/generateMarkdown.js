// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen)`
  }
  else if (license === "MIT") {
    return `![License: MIT License](https://img.shields.io/badge/License-MIT-yellow)`
  }
  else if (license === "The Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue)`
  }
  else if (license === "Apache License 2.0") {
    return `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue)`
  }
  else if (license === "GNU General Public License v3.0") {
    return `![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue)`
  }
  else if (license === "Boost Software License 1.0") {
    return `![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue)`
  }
  else if (license === "Eclipse Public License 1.0") {
    return `![License: Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL_1.0-red)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0
    `
  }
  else if (license === "MIT") {
    return `https://opensource.org/licenses/MIT
    `
  }
  else if (license === "The Unlicense") {
    return `https://unlicense.org/
    `
  }
  else if (license === "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0
    `
  }
  else if (license === "GNU General Public License v3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0
    `
  }
  else if (license === "Boost Software License 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt
    `
  }
  else if (license === "Eclipse Public License 1.0") {
    return `https://opensource.org/licenses/EPL-1.0
    `
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
  return "";

} 

//Function to create Table of Contents. If no License, no license on Table of Contents
function renderTableofContents (license) {
  if (license !== "None"){
    return `## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)`
  }
  return `## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)`;

} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderTableofContents(data.license)}

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
