const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, name, email, school){

    super(id, name, email)
    this.school = school
    // this.generateInternCard = this.generateInternCard.bind(this);
  };

  getSchool() {
    return this.school
  };

  getRole() {
    return 'Intern'
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
  //         <li class="list-group-item">School: ${this.school()}</li>
  //       </ul>
  //     </div>
  //   </div>`
  // }
};

module.exports = Intern