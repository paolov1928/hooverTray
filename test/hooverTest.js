const Hoover = require("../hoover.js")
var assert = require("assert")
process.env.NODE_ENV = "test"

// Testing whether can create a Hoover instance
describe("Hoover", function() {
  describe("#createHooverInstance", function() {
    it("should be able to create Hoover Instance", function() {
      let newHoover = new Hoover("1 2", "NNESEESWNWW")
      assert.equal(typeof newHoover, "object")
    })
  })
})
