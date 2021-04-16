const inquirer = require('inquirer');
const fs = require('fs');

// empty array to push team 
teamMembers = [];

const managerQuestions = () => {
  inquirer
    .prompt([
    {
      type: 'input',
      name: `name`,
      message: `What is the team manager's name?`
    },
    {
      type: 'input',
      name: `id`,
      message: `What is the team manager's employee id?`
    },
    {
      type: 'input',
      name: `email`,
      message: `What is the team manager's email address?`
    }, 
    {
      type: 'input',
      name: `phoneNumber`,
      message: `What is the team manager's office number?`
    }, 
    {
      type: 'list',
      name: 'employeeType',
      message: 'Which type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'Done'
      ]
    }
  ])
  .then((responses) => {
    const employee = new Employee (responses);
    switch (responses.employeeType){
      case 'Engineer': engineerQuestions();
      break;
      case 'Intern': internQuestions();
      break;
      default: 
    }
  });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
    {
      type: 'input',
      name: `engineerName`,
      message: `Engineer's name?`
    },
    {
      type: 'input',
      name: `engineerId`,
      message: `Engineer's employee id?`
    },
    {
      type: 'input',
      name: `engineerEmailAddress`,
      message: `Engineer's email address?`
    },
    {
      type: 'input',
      name: `engineerGitHub`,
      message: `Engineer's Github username?`
    },
    {
      type: 'list',
      name: 'employeeType',
      message: 'Which type of team member would you like to add next?',
      choices: [
        'Engineer',
        'Intern',
        'Done'
      ]
    }
    ])
    .then((engineerResponses) => {
      switch (engineerResponses.employeeType){
        case 'Engineer': engineerQuestions();
        break;
        case 'Intern': internQuestions();
        break;
        default: 
      }
    })
}

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: `internName`,
        message: `Intern's name?`
      },
      {
        type: 'input',
        name: `internId`,
        message: `Intern's employee id?`
      },
      {
        type: 'input',
        name: `internEmailAddress`,
        message: `Intern's email address?`
      },
      {
        type: 'input',
        name: `internSchool`,
        message: `Intern's school?`
      },
      {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add next?',
        choices: [
          'Engineer',
          'Intern',
          'Done'
        ]
      }
    ])
    .then((internResponses) => {
      switch (internResponses.employeeType){
        case 'Engineer': engineerQuestions();
        break;
        case 'Intern': internQuestions();
        break;
        default: 
      }
    })
}

managerQuestions ();

// // function to write html file 
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (error) => {
//     console.log('file saved')
//   });
// };

// // function to initialize app 
// function init() {
//   questions()
//     .then((data) => writeToFile('Team.html', generateHTML(data)))
//     .then(() => console.log('Successfully wrote Team.html!'))
//     .catch((err) => console.error(err))
// };

// // call initializing function
// init();


