const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

let cards = []

    function generateCards(teamMembers){
    console.log(teamMembers)
    let cards = []
    for(let i = 0; i < teamMembers.length; i++){
      const teamArray = teamMembers[i];
      console.log(teamArray.getRole())
      switch(teamArray.getRole()){
        case "Manager": 
          const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
          cards.push(generateManagerCard(manager));
          break;
        case "Engineer": 
          const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
          cards.push(generateEngineerCard(engineer));
           break;
        case "Intern": 
          const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
          cards.push(generateInternCard(intern));
      }
    } 
   
    return cards.join(``)
  }

let generateManagerCard = (Manager) => {  
return ` <div class="card m-1 shadow p-3 mb-5 bg-white rounded team-member-card" style="width:18rem">
<div class="card-header" style="width:18rem">
  <h2 class="card-title">${Manager.getName()}</h2>
  <h3 class="card-title"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h3>
</div>
<div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Manager.getId()}</li>
    <li class="list-group-item">Email: ${Manager.getEmail()}</li>
    <li class="list-group-item">office number: ${Manager.getOfficeNumber()}</li>
  </ul>
</div>
</div>`
};

let generateEngineerCard = (Engineer) => {
  return `<div class="card m-1 shadow p-3 mb-5 bg-white rounded team-member-card" style="width:18rem">
  <div class="card-header" style="width:18rem">
    <h2 class="card-title">${Engineer.getName()}</h2>
    <h3 class="card-title"><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Engineer.getId()}</li>
      <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
      <li class="list-group-item">Github: ${Engineer.getGithub()}</li>
    </ul>
  </div>
</div>`
};

let generateInternCard = (Intern) => {
  return `<div class="card m-1 shadow p-3 mb-5 bg-white rounded team-member-card" style="width:18rem">
  <div class="card-header" style="width:18rem">
    <h2 class="card-title">${Intern.getName()}</h2>
    <h3 class="card-title"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Intern.getId()}</li>
      <li class="list-group-item">Email: ${Intern.getEmail()}</li>
      <li class="list-group-item">School: ${Intern.getSchool()}</li>
    </ul>
  </div>
</div>`
};


function generateMarkup(teamMembers) {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  .jumbotron {
    text-align: center;
    }
    
    .team-member-card {
      flex-flow: row wrap;
    }
    
    .main {
      flex-flow: row wrap;
    }
</style> 
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid p-3 mb-2 bg-warning text-dark">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>
<div class="main d-flex justify-content-around">
${generateCards(teamMembers)}
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`
}


module.exports = generateMarkup