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

        console.log(answers);
        console.log(repobadges.style);
        //console.log(JSON.stringify(answers, null, '  '));

        // concatenate two objects into one

        // generate markdown data 
        // generateMarkdown(data)

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
