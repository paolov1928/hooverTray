// A hash lookup for all the possible path elements and their actions
const pathElementObjectLookup = {
  N: { target: "Y", action: 1 },
  E: { target: "X", action: 1 },
  S: { target: "Y", action: -1 },
  W: { target: "X", action: -1 }
}

class CleaningSession {
  constructor(room, hoover, dirtArray) {
    this.room = room
    this.hoover = hoover
    this.dirtArray = dirtArray
  }

  handleSkid() {
    const previousPosition = this.hoover.historicalPath[
      this.hoover.historicalPath.length - 1
    ]
    const previousX = previousPosition[0]
    const previousY = previousPosition[1]
    this.hoover.currentX = previousX
    this.hoover.currentY = previousY
    this.hoover.historicalPath.push([
      this.hoover.currentX,
      this.hoover.currentY
    ])
  }

  handleMove(pathElement) {
    // const { currentX, currentY, historicalPath } = this.hoover

    this.hoover["current" + pathElementObjectLookup[pathElement]["target"]] +=
      pathElementObjectLookup[pathElement]["action"]
    this.isHooverInbounds()
      ? this.hoover.historicalPath.push([
          this.hoover.currentX,
          this.hoover.currentY
        ])
      : this.handleSkid()
  }

  isHooverInbounds() {
    if (this.hoover.currentX < 0 || this.hoover.currentY < 0) {
      return false
    } else if (
      this.hoover.currentX > this.room.x ||
      this.hoover.currentY > this.room.y
    ) {
      return false
    } else {
      return true
    }
  }

  driveHoover() {
    this.hoover.path.forEach(pathElement => {
      this.handleMove(pathElement)
    })
  }

  dirtCleaned() {
    const md2 = this.hoover.historicalPath
    const md1 = this.dirtArray
    const whichDirtCleaned = []

    for (var x = 0; x < md1.length; x++) {
      for (var y = 0; y < md2.length; y++) {
        if (md1[x][0] == md2[y][0] && md1[x][1] == md2[y][1]) {
          whichDirtCleaned.push(md1[x])
        }
      }
    }
    return [...new Set(whichDirtCleaned.map(dirt => JSON.stringify(dirt)))]
  }
}

module.exports = CleaningSession
