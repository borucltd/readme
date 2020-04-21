// Module which manages questions which have to be 
// answered in order to generate README

const questions = [
    {
        type: 'editor',
        name: 'user',
        message: "What's your GitHub user name?: ",
        
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