const finalColumn = document.querySelector('[data-final-column]')
const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const humanScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'

    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]   
    
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName )
        makeSelection(selection)
        printWinner();
    })
})

function makeSelection(selection) {
    const pcSelection = computerSelection()
    const yourWinner = isWinner(selection, pcSelection)
    const computerWinner = isWinner(pcSelection, selection)
    addSelectionResult(pcSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
    
    if (yourWinner) incrementScore(humanScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)

    
}
    
function computerSelection() {
    const randomPick = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomPick];
}

function isWinner(selection, opponetSelection) {
    return selection.beats === opponetSelection.name
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
        
    }
   

    function incrementScore(scoreSpan) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
        if (humanScoreSpan.innerText >= 5) {
            alert("You win")
        }
        if (computerScoreSpan.innerText >= 5) {
            alert("You lose")
        }
    }

    function printWinner(humanScoreSpan, computerScoreSpan) {
        if (humanScoreSpan >= 5) {
            return "You win"
        }
        if (computerScoreSpan >= 5) {
            return "You Lose"
        }
    }
    


    
