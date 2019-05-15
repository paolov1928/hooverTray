class Dirt {
  // A Dirt instance is created with an x and y
  //   This isnt the most important class but was quite enjoyable making and might be more useful in further implementations

  constructor(x, y) {
    this.x = Number(x)
    this.y = Number(y)
    this.coord = [Number(x), Number(y)]
    allDirts.push(this)
  }

  static returnDirts() {
    return allDirts.map(d => d.coord)
  }
}

const allDirts = []

module.exports = Dirt
