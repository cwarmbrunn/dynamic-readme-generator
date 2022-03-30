// TODO: Include packages needed for this application

// Set up Inquirer requirement
const inquirer = require("inquirer");
// Set up generate Page requirement
const generatePage = require("./src/readme-template");

// Grants access to the file system functionality
const fs = require("fs");

const { writeFile } = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      // Question #1 - GitHub Username
      type: "input",
      name: "github",
      message: "What is your GitHub username? (Required)",
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      // Question #2 - What is your email address?
      type: "input",
      name: "title",
      message: "What is your email address? (Required)",
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    // Question #3 - Project Title
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    // Question #4 - Project Description
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project (Required)",
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a project description!");
          return false;
        }
      },
    },
    // Question #5 - License
    {
      type: "list",
      name: "license",
      message: "Select a license for your project. (Required)",
      choices: [
        "MIT",
        "ISC",
        "Microsoft Public License",
        "The Unlicense",
        "N/A",
      ],
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please select a license!");
          return false;
        }
      },
    },
    // Question #5 - Installation Instructions
    {
      type: "list",
      name: "install",
      message: "What command should be run to install dependencies? (Required)",
      choices: ["npm i", "npm install", "N/A"],
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to select a command to install dependencies!");
          return false;
        }
      },
    },

    // Question #6 - Tests
    {
      type: "list",
      name: "tests",
      message: "What command should be run to run tests? (Required)",
      choices: ["npm test", "N/A"],
      // Validation if nameInput is blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to select a command to run tests!");
        }
      },
    },
    // Question #6 - Usage Info
    {
      type: "input",
      name: "usage",
      message:
        "What does the user need to know about using this repo? (Optional)",
    },
    // Question #7 - Contributing
    {
      type: "input",
      name: "contributions",
      message:
        "What does the user need to know about contributing to this repo? (Optional)",
    },
  ]);
};
// TODO: Create a function to write responses into userResponses.json
promptUser()
  // .then((portfolioData) => {
  //   return generatePage(portfolioData);
  // })
  // .then((markdownFile) => {
  //   return writeFile(markdownFile);
  // })
  // .then((writeFileResponse) => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then((copyFileResponse) => {
  //   console.log(copyFileResponse);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  .then((data) => {
    // Setting up file name
    const fileName = `${data.fileName}.json`;

    fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("You DID IT!")
    );
  });

// TODO: Create a function to initialize app
function init() {}