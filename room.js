class Room {
  // A Room instance is created with an x and y forming the maximum X and maximum Y
  constructor(x, y) {
    this.x = Number(x)
    this.y = Number(y)
    this.totalSize = x * y
  }
}

module.exports = Room
