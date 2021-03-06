function generateMarkdown(answers, badges) {
  
  // merge all elements, remove all ' at the end
  let finalShields = "";
  
  answers.shields.forEach(element => {
    switch(element) {
      case 'Number of pull requests':
        finalShields += badges.shields[0];
        break;
      case 'Size of repository':
        finalShields += badges.shields[1];
        break;
      case 'External website':
        finalShields += badges.shields[2];
        break
      default:
        break
    }
  });
  
  const shieldsMarkdown = finalShields.replace(/'/gi,' ');

  // we return template  
 return `

  # ${answers.title}

  ---

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)   

  ---

  ## Installation
  >${answers.installation}

  ## Usage
  >${answers.usage}

  ## Credits
  >${answers.credits}

  ## License
  >${answers.license}

  ---

  ## Badges
  ${shieldsMarkdown}

  ## Contributing
  >${answers.license}

  ## Tests
  >${answers.tests}

`;
}

module.exports = generateMarkdown;




