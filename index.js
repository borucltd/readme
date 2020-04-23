'use strict';

// external modules
const inquirer = require('inquirer');
//   pre-defined questions
const questions = require('./utils/questions');
//   manages shields badges
const badges = require('./utils/badges');
//   used to create MARKDOWN object
const generateMarkdown = require('./utils/generateMarkdown');


 


//function writeToFile(fileName, data) {
//};



// main 
const promise_collectAnswers = inquirer.prompt(questions.questions)
  .then(answers => {

    // create object of badges bases on given answers
    const repobadges = new badges(answers.shields,answers.shieldsStyle,answers.user,answers.repository,answers.website);
    
    // returns two objects
    return [answers, repobadges];

   })
   .then(rawText => {
   
    // return mardown
    return generateMarkdown(rawText[0],rawText[1]);

   })
   .then(markDownText => {

    // save markdown to a file
    console.log(markDownText);
    return true;
   })
   .catch(error => {
     console.log("ERROR: something went wrong..." + error);
   })
  
