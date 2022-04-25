# Coding Challenge #1
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

```
[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
```
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes. The array will always be a square 2D array of single capitalized characters, and the string will always be a single capitalized word.

You do not have to check whether the string is a real word or not, only if it's a valid guess.

## Specification
checkWord(board, word)
Parameters
board: Array<Array<String>> - 2D array of individual characters

word: String - word to check if valid

Return Value
Boolean - True if word is valid for the given board

Examples
board	word	Return Value
[["E","A","R","A"],["N","L","E","C"],["I","A","I","S"],["B","Y","O","R"]]	"EAR"	true
[["E","A","R","A"],["N","L","E","C"],["I","A","I","S"],["B","Y","O","R"]]