const fs = require("fs")
const chalk = require("chalk")
const figlet = require("figlet")
const inquirer = require("inquirer")

const Room = require("./room.js")
const Hoover = require("./hoover.js")
const Dirt = require("./dirt.js")
const CleaningSession = require("./cleaningsession.js")

const getAllOfInputData = (inputFile = "./input.txt") => {
  return fs.readFileSync(inputFile, "utf8")
}

const introText = () => {
  console.log(
    chalk.red(
      figlet.textSync("Hoover", {
        font: "Star Wars"
      })
    )
  )
}

const askCorrectInstructions = () => {
  const question = [
    {
      name: "answer",
      type: "list",
      message: "Is the input.txt file complete with the correct instructions?",
      choices: ["Yes", "No"]
    }
  ]
  return inquirer.prompt(question)
}

// Run Function

const run = async () => {
  // Initialize and check everything complete
  introText()
  const correctInstructions = await askCorrectInstructions()
  if (correctInstructions.answer === "No") {
    process.exit()
  }
  const data = getAllOfInputData()
  const arrayInputData = data.split("\n")

  // Room
  const roomInput = arrayInputData[0].split(" ")
  let room = new Room(roomInput[0], roomInput[1])

  // Hoover
  const hooverStartingInput = arrayInputData[1]
  const hooverPathInput = arrayInputData[arrayInputData.length - 1]
  let hoover = new Hoover(hooverStartingInput, hooverPathInput)

  // Dirts
  const numberOfDirts = arrayInputData.length - 1 - 1 - 1
  if (numberOfDirts > 0) {
    const allDirts = arrayInputData
      .slice(2, 2 + numberOfDirts)
      .map(dirt => dirt.split(" "))
    allDirts.forEach(d => new Dirt(d[0], d[1]))
  }

  // Put all the above into an instance of cleaningSession

  const cleaningSession = new CleaningSession(room, hoover, Dirt.returnDirts())

  // Drive Phase
  cleaningSession.driveHoover()

  // Final Coordinate result logged to console
  console.log(
    "Hoover ended at " + hoover.historicalPath[hoover.historicalPath.length - 1]
  )
  // Hoover dirt cleaning report logged to console
  console.log(
    cleaningSession.dirtCleaned().length +
      " dirt(s) cleaned at " +
      cleaningSession.dirtCleaned()
  )
}

run()
