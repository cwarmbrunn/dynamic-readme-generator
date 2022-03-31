// Grants access to the file system functionality
const fs = require("fs");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Correct the syntax to generate the proper AGPL-3.0 URL
  if (data.license === "AGPL-3.0") {
    data.licenseBadge = "AGPL_v3";
    data.licenseLink = "agpl-3.0";

    // Correct the syntax to generate the proper GPL-3.0 URL
  } else if (data.license === "GPL-3.0") {
    data.licenseBadge = "GPLv3";
    data.licenseLink = "gpl-3.0";

    // Correct the syntax to generate the proper MIT URL
  } else if (data.license === "MIT") {
    data.licenseBadge = "MIT";
    data.licenseLink = "mit";

    // If NOT data.licenseBadge then equal to data.license and proceed
  } else if (!data.licenseBadge && !data.licenseLink) {
    data.licenseBadge = data.license;
    data.licenseLink = data.license;
  }

  var license = `## License
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.licenseBadge}-blue.svg)](https://choosealicense.com/licenses/${data.licenseLink}/)`;
  if (data.license === "N/A") {
    license = `## License 
  *No license selected*`;
  }

  return `
<!-- Experiment Title Goes Here -->
    
# ${data.title}
    
<!-- GitHub License Goes Here -->
${license}
   
## Description
 ${data.description}
    
 <!-- Table of Contents Goes Here -->
* [License](#license)

* [Description](#description)

* [Installation](#installation)

* [Testing](#testing)
    
* [Usage](#usage)
    
* [Contributions](#contributions)

* [Questions](#questions)
    

## Installation

To install necessary dependencies, run the following command:
    
*${data.installation}*


## Testing
      
To test, run the following command:
       
 *${data.testing}*
  
  
 ## Usage
    
${data.usage}

 
## Contributions
${data.contributions}

 
## Questions
Check out my GitHub profile at https://github.com/${data.github}
      
*Still have questions?* Reach me at ${data.email}
`;
}
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
