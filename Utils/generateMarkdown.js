function generateMarkdown(response){
return `
# ${response.title}
      
    
## Description
  
${response.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${response.install}
\`\`\`

## Usage

${response.usage}

## Tests

To run tests, run the following command:

\`\`\`
${response.tests}
\`\`\`

## Licence

This project requires the ${response.licence} licence.

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${response.contact}. You can find more of my work at [${response.username}](https://github.com/${response.username}/).


`
    }
    
    module.exports = generateMarkdown;