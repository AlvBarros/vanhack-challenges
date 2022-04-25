function checkWord(board, word) {
    let startingPositions = findLetter(board, word[0]);
    for (let i = 0; i < startingPositions.length; i++) {
        if (searchNextLetter(board, [startingPositions[i]], word)) {
            return true;
        }
    }
    return false;
}

/// Search missing letters around last letter
function searchNextLetter(board, letters, word) {
    let lettersFound = letters.length;
    if (lettersFound === word.length) {
        return true;
    }
    let adjacent = matchingAdjacentLetters(board, letters[lettersFound - 1], word[lettersFound]);
    for (let i = 0; i < adjacent.length; i++) {
        if (!alreadyUsed(adjacent[i], letters)) {
            let newLetters = [...letters];
            newLetters.push(adjacent[i]);
            if (searchNextLetter(board, newLetters, word)) {
                return true;
            }
        }
    }
    return false;
}

/// Returns an array with every coordinates that countains given [letter] in [board]
function findLetter(board, letter) {
    let coordinates = [];
    for (let x = 0; x < board[0].length; x++) {
        for (let y = 0; y < board.length; y++) {
            // Go over every x,y combination and check if it is the given letter
            if (board[y][x] === letter) {
                coordinates.push([y, x]);
            }
        }
    }
    return coordinates;
}

/// Returns an array with every coordiantes around given [position] that contains the given [letter] in the [board]
function matchingAdjacentLetters(board, position, letter) {
    let adjacentPosition = [];
    for (let x = position[1] - 1; x <= position[1] + 1; x++) {
        for (let y = position[0] - 1; y <= position[0] + 1; y++) {
            // Checks if it's not out of the array bounds
            if (isInsideRange(x, [0, board[0].length-1]) &&
                isInsideRange(y, [0, board.length-1])
            ) {
                if (board[y][x] === letter) {
                    adjacentPosition.push([y, x]);
                }
            }
        }
    }
    return adjacentPosition;
}

/// Returns if given [position] is already inside [history]
function alreadyUsed(position, history) {
    for (let i = 0; i < history.length; i++) {
        let currentTest = history[i];
        if (position[0] === currentTest[0] && position[1] === currentTest[1]) {
            return true;
        }
    }
    return false;
}

/// Returns if [number] is inside [range]
function isInsideRange(number, range) {
    return number >= range[0] && number <= range[1];
}

var testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];
  
console.log( checkWord( testBoard, "C" ) , true );
console.log( checkWord( testBoard, "EAR" ) , true );
console.log( checkWord( testBoard, "EARS" ) , false );
console.log( checkWord( testBoard, "BAILER" ) , true );
console.log( checkWord( testBoard, "RSCAREIOYBAILNEA" ) , true, "Must be able to check indefinite word lengths going in all directions" );
console.log( checkWord( testBoard, "CEREAL" ) , false, "Valid guesses can't overlap themselves" );
console.log( checkWord( testBoard, "ROBES" ) , false, "Valid guesses have to be adjacent" );
console.log( checkWord( testBoard, "BAKER" ) , false, "All the letters have to be in the board" );
console.log( checkWord( testBoard, "CARS" ) , false, "Valid guesses cannot wrap around the edges of the board" );