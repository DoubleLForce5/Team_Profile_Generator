const Manager = require("../lib/Manager");

describe("Manager", () =>{
  describe("Initialization", () => {
    it("Should create an object with a id, name, email and office number", () => {
      const manager = new Manager (651, "Maria", "Maria@outlook.com", 7128687456);

      expect(manager.id).toEqual(651);
      expect(manager.name).toEqual("Maria");
      expect(manager.email).toEqual("Maria@outlook.com");
      expect(manager.officeNumber).toEqual(7128687456);
    })
  })
})