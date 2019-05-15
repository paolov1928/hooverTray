const Room = require("../room.js")
const Dirt = require("../dirt.js")
const Hoover = require("../hoover.js")
const CleaningSession = require("../cleaningsession.js")
var assert = require("assert")
process.env.NODE_ENV = "test"

// Testing whether can create a CleaningSession instance
describe("CleaningSession", function() {
  describe("#createCleaningSessionInstance", function() {
    let newRoom = new Room(5, 5)
    let newHoover = new Hoover("1 2", "NNESEESWNWW")
    let newDirt1 = new Dirt(1, 0)
    let newDirt2 = new Dirt(2, 2)
    let newDirt3 = new Dirt(2, 3)
    let newCleaningSession = new CleaningSession(
      newRoom,
      newHoover,
      Dirt.returnDirts()
    )

    newCleaningSession.driveHoover()
    it("should be able to create CleaningSession instance", function() {
      assert.equal(typeof newCleaningSession, "object")
    })

    it("should have the correct final X position of hoover", function() {
      assert.equal(newCleaningSession.hoover.currentX, 1)
    })

    it("should have the correct final Y position of hoover", function() {
      assert.equal(newCleaningSession.hoover.currentY, 3)
    })
  })
})
