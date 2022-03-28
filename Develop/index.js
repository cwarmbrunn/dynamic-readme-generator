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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
