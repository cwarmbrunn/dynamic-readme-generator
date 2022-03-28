const { writeFile } = require("./utils/generateMarkdown.js");

// TODO: Include packages needed for this application
// Set up Inquirer requirement
const inquirer = require("inquirer");
// Set up generate Page requirement
const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    // Question #1 - Project Title
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    // Question #2 - Project Description
    {
      type: "input",
      name: "description",
      message: "What is your project's description? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a project description!");
          return false;
        }
      },
    },
    // Question #3 - Installation Instructions
    {
      type: "input",
      name: "install",
      message: "Provide installation instructions for your project. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to provide installation instructions");
          return false;
        }
      },
    },
    // Question #4 - Usage Info
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use",
    },
    // Question #5 - Contributing
    {
      type: "input",
      name: "contributing",
      message:
        "Provide any additional links for other users to contribute to. (Optional)",
    },
    // Question #6 - Tests
    {
      type: "input",
      name: "tests",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here. (Optional)",
    },
  ]);
};

// TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./Develop/utils/index.md", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "File Created!" });
    });
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init().then(questions);
