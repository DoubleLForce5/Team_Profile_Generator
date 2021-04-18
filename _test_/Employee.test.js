const Employee = require('../lib/Employee')

describe("Employee", () =>{
  describe("Initialization", () => {
    it("Should create an object with a id and name", () => {
      const employee = new Employee(432, "Dave");

      expect(employee.id).toEqual(432);
      expect(employee.name).toEqual("Dave");
    });
  });
});
