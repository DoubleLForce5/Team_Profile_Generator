const inquirer = require ('inquirer');
const fs = require ('fs');

const questions = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: `team manager's name`,
      message: `What is the team manager's name?`
    },
    {
      type: 'input',
      name: `team manager's employee id`,
      message: `What is the team manager's employee id?`
    },
    {
      type: 'input',
      name: `team manager's email address`,
      message: `What is the team manager's email address?`
    },
    {
      type: 'input',
      name: `team manager's office number`,
      message: `What is the team manager's office number?`
    }
  ]).then(() => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'type of team member',
        message: 'What type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          'None'
        ]
      },
    ]).then(() => {
      if (engineer){
        inquirer.prompt([
          {
            type: 'input',
            name: `engineer's name`,
            message: `Engineer's name?`
          },
          {
            type: 'input',
            name: `engineer's employee id`,
            message: `Engineer's employee id?`
          },
          {
            type: 'input',
            name: `engineer's email address`,
            message: `Engineer's email address?`
          },
          {
            type: 'input',
            name: `engineer's gitHub username`,
            message: `Engineer's Github?`
          }
        ]).then (() => {
          generateHTML()
        })
      } else if (intern){
        inquirer.prompt([
          {
            type: 'input',
            name: `intern's name`,
            message: `Intern's name?`
          },
          {
            type: 'input',
            name: `intern's employee id`,
            message: `Intern's employee id?`
          },
          {
            type: 'input',
            name: `intern's email address`,
            message: `intern's email address?`
          },
          {
            type: 'input',
            name: `intern's school`,
            message: `intern's school?`
          }
        ]).then (() => {
          generateHTML()
        })
      } else {
        generateHTML()
      };
    }).catch ((err) => console.error(err))
  });
};

// function to write html file 
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    console.log('file saved')
  });
};

// function to initialize app 
function init(){
  questions()
  .then ((data) => writeToFile('Team.html', generateHTML(data)))
  .then (() => console.log('Successfully wrote Team.html!'))
  .catch ((err) => console.error(err))
};

// call initializing function
init();