# hooverTray

This is a small CLI app for processing instructions for a hoover.

Installation Instructions:

- Download / Unzip project
- Navigate to the root of the project
- run '\$ npm install' in the terminal

- run '\$ node index' in the terminal to initiate the CLI app
- run '\$ npm test' to view test results and unit test coverage

Specific Task Instructions:

Input within input.txt should be as follows, example below:

5 5
1 2
1 0
2 2
2 3
NNESEESWNWW

- the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
- the second line holds the hoover position
- subsequent lines contain the zero or more positions of patches of dirt (one per line)
- the next line then always contains the driving instructions (at least one)

Output should be as follows:
(//I have added a few words of narrative to the STDOUT output//)

- The first line of your program output should display the X and Y coordinates marking the position of the hoover after processing all commands.
- The second line of the program output should display the number of patches of dirt the robot cleaned up
