const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkup = require('./src/Team')

// empty array to push team into 
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
  ])
  .then((responses) => {
    console.log(responses);
    const manager = new Manager(responses.id, responses.name, responses.email, responses.phoneNumber);
    console.log(manager);
    teamMembers.push(manager)
    // console.log(teamMembers)
    employeeType()
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
    ])
    .then((engineerResponses) => {
      console.log(engineerResponses);
      const engineer = new Engineer(engineerResponses.engineerName, engineerResponses.engineerId, engineerResponses.engineerEmailAddress, engineerResponses.engineerGitHub);
      teamMembers.push(engineer)
      employeeType()
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
    ])
    .then((internResponses) => {
      console.log(internResponses)
      const intern = new Intern (internResponses.internName, internResponses.internId, internResponses.internEmailAddress, internResponses.internSchool);
      teamMembers.push(intern);
      employeeType()
    })
}


function employeeType(){
  inquirer
    .prompt([
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
    ]).then((responses) => {
      switch (responses.employeeType){
        case 'Engineer': engineerQuestions();
        break;
        case 'Intern': internQuestions();
        break;
        default: 
      }
    })
}

managerQuestions();

// function to write html file 
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (error) => {
//     if(error) throw error;
//     console.log('file saved')
//   });
// };

// // function to initialize app 
// function init() {
//   managerQuestions()
//     .then((data) => writeToFile('index.html', generateMarkup(data)))
//     .then(() => console.log('Successfully wrote Team.html!'))
//     .catch((err) => console.error(err))
// };

// // call initializing function
// init();

module.exports = teamMembers;
