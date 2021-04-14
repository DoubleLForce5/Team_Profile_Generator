const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
  return inquirer.prompt([{
      type: 'input',
      name: `manager_name`,
      message: `What is the team manager's name?`
    },
    {
      type: 'input',
      name: `manager_employee_id`,
      message: `What is the team manager's employee id?`
    },
    {
      type: 'input',
      name: `manager_email_address`,
      message: `What is the team manager's email address?`
    },
    {
      type: 'input',
      name: `manager_office_number`,
      message: `What is the team manager's office number?`
    },
    {
      type: 'list',
      name: 'type_of_employee',
      message: 'What type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'None'
      ]
    },
  ]).then((data) => {
    if (data.type_of_employee === 'Engineer') {
      inquirer.prompt([{
          type: 'input',
          name: `engineer_name`,
          message: `Engineer's name?`
        },
        {
          type: 'input',
          name: `engineer_id`,
          message: `Engineer's employee id?`
        },
        {
          type: 'input',
          name: `engineer_email_address`,
          message: `Engineer's email address?`
        },
        {
          type: 'input',
          name: `engineer_gitHub_username`,
          message: `Engineer's Github?`
        }
      ]).then(() => {
        generateHTML()
      })
    } else if (data.type_of_employee === 'Intern') {
      inquirer.prompt([{
          type: 'input',
          name: `intern_name`,
          message: `Intern's name?`
        },
        {
          type: 'input',
          name: `intern_id`,
          message: `Intern's employee id?`
        },
        {
          type: 'input',
          name: `intern_email_address`,
          message: `intern's email address?`
        },
        {
          type: 'input',
          name: `intern_school`,
          message: `intern's school?`
        }
      ]).then(() => {
        generateHTML()
      })
    } else {
      generateHTML()
    };
  }).catch((err) => console.error(err))
};

// function to write html file 
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    console.log('file saved')
  });
};

// function to initialize app 
function init() {
  questions()
    .then((data) => writeToFile('Team.html', generateHTML(data)))
    .then(() => console.log('Successfully wrote Team.html!'))
    .catch((err) => console.error(err))
};

// call initializing function
init();

module.exports = questions; 