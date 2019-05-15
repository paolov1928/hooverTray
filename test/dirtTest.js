const Dirt = require("../dirt.js")
var assert = require("assert")
process.env.NODE_ENV = "test"

// Testing whether can create a Dirt instance
describe("Dirt", function() {
  describe("#createDirtInstance 1", function() {
    it("should be able to create Dirt instance", function() {
      let newDirt = new Dirt(1, 0)
      assert.equal(typeof newDirt, "object")
    })
  })

  describe("#createDirtInstance 2", function() {
    it("should be able to create Dirt instance 2", function() {
      let newDirt = new Dirt(2, 2)
      assert.equal(typeof newDirt, "object")
    })
  })

  describe("#createDirtInstance 3", function() {
    it("should be able to create Dirt instance 3", function() {
      let newDirt = new Dirt(2, 3)
      assert.equal(typeof newDirt, "object")
    })
  })
})
