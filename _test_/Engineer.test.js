const Engineer = require('../lib/Engineer')

describe("Engineer", () =>{
  describe("Initialization", () => {
    it("Should create an object with a id, name, email and github", () => {
      const engineer = new Engineer (214, "Betty", "Betty@gmail.com", "PettyBetty");

      expect(engineer.id).toEqual(214);
      expect(engineer.name).toEqual("Betty");
      expect(engineer.email).toEqual("Betty@gmail.com");
      expect(engineer.github).toEqual("PettyBetty");
    })
  })
})