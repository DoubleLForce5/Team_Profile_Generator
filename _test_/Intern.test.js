const Intern = require("../lib/Intern");

describe("Intern", () =>{
  describe("Initialization", () => {
    it("Should create an object with a id and name", () => {
      const intern = new Intern(912, "Laura");

      expect(intern.id).toEqual(912);
      expect(intern.name).toEqual("Laura");
    });
  });
});