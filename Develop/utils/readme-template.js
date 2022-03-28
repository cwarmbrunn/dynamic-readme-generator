// Create the content in the README File
const generateTitle = (title) => {
  return `#
    ${generateTitle(title)}`;
};
const generateBody = (description) => {
  return `##Description
    ${generateBody(description)}
    `;
};
const generateContents = () => {
  return `
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    `;
};
