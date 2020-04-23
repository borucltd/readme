'use strict';

// external modules
const inquirer = require('inquirer');
//   pre-defined questions
const questions = require('./utils/questions');
//   manages shields badges
const badges = require('./utils/badges');
//   used to create MARKDOWN object
const generateMarkdown = require('./utils/generateMarkdown');



// functions
function collectAnswers(){
   
    // use modules inquirer and questions
    inquirer.prompt(questions.questions).then(answers => {

    // shields badges object
    const repobadges = new badges(answers.shields,answers.shieldsStyle,answers.user,answers.repository,answers.website);

    // generate markdown data 
     //generateMarkdown(answers, repobadges.shields);

    console.log(generateMarkdown(answers, repobadges.shields));
        // write to fileName
        // const fileName
        // writeToFile

      });


}

function writeToFile(fileName, data) {
};

function init() {

    

    




};



// main part of the application
init();
collectAnswers();
