// Grants access to the file system functionality
const fs = require("fs");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<!-- Experiment Title Goes Here -->
    
# ${data.title}
    
<!-- GitHub License Goes Here -->
## License
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://choosealicense.com/licenses/${data.license}/)

<!-- Experiment Description Goes Here -->
   
## Description
 ${data.description}
    
 <!-- Table of Contents Goes Here -->
* [Installation](#installation)
    
* [Usage](#usage)
    
* [Contributing](#contributing)
    
* [License](#license)


## Installation

To install necessary dependencies, run the following command:
    
*${data.installation}*


## Testing
      
To test, run the following command:
       
 *${data.testing}*
  
  
 ## Usage
    
${data.usage}

 
## Contributing
${data.contributions}

 
## Questions
Check out my GitHub profile at https://github.com/${data.github}
      
Still have questions? Reach me at ${data.email}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 // MIT BADGE
 // https://img.shields.io/badge/License-MIT-blue.svg

 // AGPL-3.0 BADGE
 // https://img.shields.io/badge/License-AGPL_v3-blue.svg
 
// GPL-3.0 BADGE
 // https://img.shields.io/badge/License-GPLv3-blue.svg

 // N/A BADGE
 // Need to return empty somehow
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // MIT LINK
  // https://choosealicense.com/licenses/mit/ 
  

  // AGPL-3.0 LINK
  // https://choosealicense.com/licenses/agpl-3.0/

  // GPL-3.0 LINK
  //https://choosealicense.com/licenses/gpl-3.0/

  // N/A LINK
  // Need to return empty somehow
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Write File
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./src/index.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "index.md created!" });
    });
  });
};

module.exports = {
  writeFile,
};
