
// // make a card for every index of teamMembers array 
// function generateManager(Manager){
// return `<div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Olivia</p>
// </div>
// <ul class="list-group list-group-flush">
// <li class="list-group-item">${Manager.id}</li>
// <li class="list-group-item">email</li>
// <li class="list-group-item">office number</li>
// </ul>`
// }
// // 
// // generate employee function /switch case / call function for particular html

// function hello(){
//   console.log('hello')
// }

// filter data according to the employee type / create an html content array / if manager push to array and html content .join (appends array contents)/ filter data.filterEmployee employee.getRole
function generateMarkup() {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>
<div>${teamMembers.generateCard}</div>
  
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateMarkup