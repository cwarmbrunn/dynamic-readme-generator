const fs = require("fs");
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("index.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "README.md created!" });
    });
  });
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <!-- Experiment Title Goes Here -->

  # ${title}

  <!-- GitHub License Goes Here -->
  ![GitHub license]()

  
  <!-- Experiment Description Goes Here -->

  ## Description
  ${description}
  <!-- Table of Contents Goes Here -->
  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  ##Installation
  To install necessary dependencies, run the following command:

  ````
  ${installation}
  ````
  ## Testing
  
  To test, run the following command:

  ````
  ${testing}
  ````

  ## Using This Repo

  ${usage}

  ## Contributions
  ${contributions}

  `;
}

module.exports = writeFile;
