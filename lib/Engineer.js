const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (id, name, email, github){

    super(id, name, email)
    this.github = github
    // this.generateEngineerCard = this.generateEngineerCard.bind(this);
  };

  getGithub() {
    return this.github
  };

  getRole() {
    return 'Engineer'
  };

  // generateCard(){
  //   return `
  //   <div class="card team-member-card">
  //     <div class="card-header">
  //       <h2 class="card-title">${this.getName()}</h2>
  //       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole()}</h3>
  //     </div>
  //     <div class="card-body">
  //       <ul class="list-group list-group-flush">
  //         <li class="list-group-item">ID: ${this.getId()}</li>
  //         <li class="list-group-item">Email: ${this.getEmail()}</li>
  //         <li class="list-group-item">Github: ${this.github()}</li>
  //       </ul>
  //     </div>
  //   </div>`
  // };
};

module.exports = Engineer