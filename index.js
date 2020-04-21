// external modules
const generateMarkdown = require('./utils/generateMarkdown');
const badges = require('./utils/badges');

// variables
const questions_readme = [
    'What is your project title',
    'Provide some description',
    'Add table of contents (yes/no)',
    'Installation',
    'Usage',
    'Credits',
    'License',
    'Badges',
    'Contributing',
    'Tests',
];

const questions_github = [
    'GitHub username:',
    'GitHub repository:',
    'Additional website:',
];


function writeToFile(fileName, data) {
}

function init() {

}

init();


let mariusz = new badges("dsad","flat","boruc","readme","lnxsa");

console.log(mariusz.shields[2]);