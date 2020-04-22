// Module name: questions.js
// It manages questions which have to be 
// answered in order to generate README

// import axios in order to make API calls to github
const axios = require('axios');

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
        message: "Provide project's description: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide installation steps: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide usage instructions: "
    },
    {
        type: 'input',
        name: 'credits',
        message: "Provide credits: "
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "Select license type: ",
        choices: ['Apache', 'MIT']
    },
    {
        type: 'list',
        name: 'shields',
        message: "Select shields badges: ",
        choices: ['Number of pull requests', 'Size of repository', 'External website']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who else was contributing?: "
    },
    {
        type: 'input',
        name: 'tests',
        message: "What tests did you make?: "
    },
];

module.exports = {
    questions: questions
}