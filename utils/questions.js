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
        validate: (user) => {

            // validate input is not empty
            if (user.match(/[a-z]/gi)) {
                
                // when input is not empty lets make API call to GitHub
                let pass = axios.get("https://api.github.com/users/" + user)
                .then(response => {
                    if (response.data.login) {
                        // returns true so we can move on to the next question
                        return true;
                    }
                })
                .catch(error => {
                    // returns non-true so we will stay on the current question 
                    // until user provides valid data
                    return `"ERROR: There is no ${user} on GitHub!"`;
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
        message: "What's your GitHub repository?: "
    },
    {
        type: 'input',
        name: 'website',
        message: "What's your external website?: "
    },
    {
        type: 'input',
        name: 'title',
        message: "What's your project's title?: "
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