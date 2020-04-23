// Module name: questions.js
// It manages questions which have to be 
// answered in order to generate README

// import axios in order to make API calls to github
const axios = require('axios');

const license = ["Academic Free License v3.0",
"Apache license 2.0",
"Artistic license 2.0",
"Boost Software License 1.0",
"BSD 2-clause Simplified license",
"BSD 3-clause New or Revised license",
"BSD 3-clause Clear license",
"Creative Commons license family",
"Creative Commons Zero v1.0 Universal",
"Creative Commons Attribution 4.0",
"Creative Commons Attribution Share Alike 4.0",
"Do What The F*ck You Want To Public License",
"Educational Community License v2.0",
"Eclipse Public License 1.0",
"European Union Public License 1.1",
"GNU Affero General Public License v3.0",
"GNU General Public License family",
"GNU General Public License v2.0",
"GNU General Public License v3.0",
"GNU Lesser General Public License family",
"GNU Lesser General Public License v2.1",
"GNU Lesser General Public License v3.0",
"ISC",
"LaTeX Project Public License v1.3c",
"Microsoft Public License",
"MIT",
"Mozilla Public License 2.0",
"Open Software License 3.0",
"PostgreSQL License",
"SIL Open Font License 1.1",
"University of Illinois/NCSA Open Source License	",
"The Unlicense",
"zLib License"];

const questions = [
    {
    type: 'input',
        name: 'user',
        message: "What's your GitHub user?: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) {
                
                // when input is not empty lets make API call to GitHub
                let pass = axios.get("https://api.github.com/users/" + userInput)
                .then(response => {
                    if (response.data.login) {
                        // returns true so we can move on to the next question
                        return true;
                    }
                })
                .catch(error => {
                    // returns non-true so we will stay on the current question 
                    // until user provides valid data
                    return `"ERROR: There is no ${userInput} on GitHub!"`;
                });

            return pass;
            }
            // returns non-true so we will stay on the current question 
            // until user provides valid data
            return "ERROR: GitHub user must not be empty!";   
        }     
    },
    {
        type: 'input',
        name: 'repository',
        message: "What's your GitHub repository?: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: GitHub repository must not be empty!";            
        }   
    },
    {
        type: 'input',
        name: 'website',
        message: "What's your external website?[DNS only]: ",
        validate: (userInput) => {

            // validate if this is valid URL (here I used https://www.regextester.com/93652)
            if (userInput.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i)) { 
                return true;
            } 
        
            return "ERROR: this is not valid DNS name!";            
        } 
    },
    {
        type: 'input',
        name: 'title',
        message: "What's your project's title?: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project title must not be empty!";            
        }   
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide project's description:",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        }  
    },
    {
        type: 'editor',
        name: 'installation',
        message: "Provide installation steps: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        } 
    },
    {
        type: 'editor',
        name: 'usage',
        message: "Provide usage instructions: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        } 
    },
    {
        type: 'input',
        name: 'credits',
        message: "Provide credits: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: "Select license type: ",
        choices: license
    },
    {
        type: 'checkbox',
        name: 'shields',
        message: "Select shields badges: ",
        choices: ['Number of pull requests', 'Size of repository', 'External website']
    },
    {
        type: 'list',
        name: 'shieldsStyle',
        message: "Select shields style: ",
        choices: ['plastic', 'flat', 'flat_square', 'for-the-badge', 'social']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who else was contributing?: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        } 
    },    
    {
        type: 'input',
        name: 'tests',
        message: "What tests did you make?: ",
        validate: (userInput) => {

            // validate input is not empty
            if (userInput.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: Project description must not be empty!";            
        } 
    },
];

module.exports = {
    questions: questions
}