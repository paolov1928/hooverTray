class Hoover {
  // A Hoover instance is generated with a starting position and path
  constructor(startingPosition, path) {
    this.startingPositionInput = startingPosition
    this.currentX = Number(startingPosition.split(" ")[0])
    this.currentY = Number(startingPosition.split(" ")[1])
    this.path = path.split("")
    this.historicalPath = [[this.currentX, this.currentY]]
  }
}

module.exports = Hoover
