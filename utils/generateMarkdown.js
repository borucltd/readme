function generateMarkdown(answers, shields) {
  
  // we return template  
 return `

  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${answers.license}

  ## Badges

  ## Contributing
  ${answers.license}

  ## Tests
  ${answers.tests}

`;
}

module.exports = generateMarkdown;




