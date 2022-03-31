// Grants access to the file system functionality
const fs = require("fs");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<!-- Experiment Title Goes Here -->
    
# ${data.title}
    
<!-- GitHub License Goes Here -->
## License
![GitHub license]()
    
      
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
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
