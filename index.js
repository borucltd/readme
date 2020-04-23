'use strict';

// external modules
const inquirer = require('inquirer');
//   pre-defined questions
const questions = require('./utils/questions');
//   manages shields badges
const badges = require('./utils/badges');
//   used to create MARKDOWN object
const generateMarkdown = require('./utils/generateMarkdown');
//   moment.js used to generate unique filename
const currentTime = require('moment');
//   fs.js used to save a file
const fs = require("fs");



// main 
const output = inquirer.prompt(questions.questions)
  .then(answers => {

    // create object of badges bases on given answers
    const repobadges = new badges(answers.shields,answers.shieldsStyle,answers.user,answers.repository,answers.website);
    
    // returns two objects
    return [answers, repobadges];

   })
   .then(rawText => {
   
    // return mardown and 
    return generateMarkdown(rawText[0],rawText[1]);

   })
   .then(markDownText => {

    // set filename
    const fileName = "README_" + currentTime().unix();

    // save markdown to a file
    fs.writeFile(fileName, markDownText, (err) => {
      if (err) {
        throw err;
      }
      console.log("Your readme file is: " + fileName);
    });
   })
   .catch(error => {
     console.log("ERROR: something went wrong..." + error);
   })
  
  
