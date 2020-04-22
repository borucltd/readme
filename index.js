'use strict';

// external modules
const inquirer = require('inquirer');
//   pre-defined questions
const questions = require('./utils/questions');
//   manages shields badges
const badges = require('./utils/badges');
//   used to create MARKDOWN object
const generateMarkdown = require('./utils/generateMarkdown');


// constructors
function readme(){

    this.title = title;
    this.description = description;
    this.toc = toc;
    this.installation = installation;
    this.usage = usage;
    this.license = license;
    this.contributing = contributing;
    this.tests = tests;

};

// functions
function collectAnswers(){
   
    // use modules inquirer and questions
    inquirer.prompt(questions.questions).then(answers => {

        console.log(answers.title);
        //console.log(JSON.stringify(answers, null, '  '));
      });


}

function writeToFile(fileName, data) {
};

function init() {

    




};



// main part of the application
init();
collectAnswers();
