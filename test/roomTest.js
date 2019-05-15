const Room = require("../room.js")
var assert = require("assert")
process.env.NODE_ENV = "test"

// Testing whether can create a Room instance
describe("Room", function() {
  describe("#createRoomInstance", function() {
    it("should be able to create Room instance", function() {
      let newRoom = new Room(5, 5)
      assert.equal(typeof newRoom, "object")
    })
  })
})
