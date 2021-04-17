const Employee = require('./Employee')

// class Manager extends employee 
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {

    super (id, name, email);
    this.officeNumber = officeNumber;
    this.generateCard = this.generateCard.bind(this);
  }

  officeNumber() {
    return this.officeNumber
  }

  getRole() {
    return 'Manager'
  }

  generateCard(){
    return `
    <div class="card team-member-card">
      <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email: ${this.getEmail()}</li>
          <li class="list-group-item">office number: ${this.officeNumber()}</li>
        </ul>
      </div>
    </div>`
  }
}

module.exports = Manager 