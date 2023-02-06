const keys = document.querySelectorAll('.key')

const inputBoxes = document.querySelectorAll('.wordle-input')

const firstBoxes = document.querySelectorAll('#first-wordle .wordle-input')
const secondBoxes = document.querySelectorAll('#second-wordle .wordle-input')
const thirdBoxes = document.querySelectorAll('#third-wordle .wordle-input')
const fourthBoxes = document.querySelectorAll('#fourth-wordle .wordle-input')
const fifthBoxes = document.querySelectorAll('#fifth-wordle .wordle-input')

let wordle = 'Mauer'

const changeReadyWordle = (el) => {
    if (!el) {
        return
    }

    if (el.classList.contains('active')) {
        for (let i = 0; i < inputBoxes.length; i++) {
            const box = inputBoxes[i];
            box.classList.remove('ready')
        }

        el.classList.add('ready')
    }
}

const changeReadyWordleOnKeyInput = () => {
    let currentReady = document.querySelector('.ready')

    for (let i = 0; i < firstBoxes.length; i++) {
        if (currentReady == firstBoxes[i] && i + 1 <= firstBoxes.length) {
            changeReadyWordle(firstBoxes[i+1])
        }
    }
}

const changeToPreviousInput = (el) => {
    for (let i = 0; i < firstBoxes.length; i++) {
        if (el == firstBoxes[i] && i - 1 >= 0) {
            changeReadyWordle(firstBoxes[i-1])
        }
    }
}

const handleKeyClick = (el) => {
    let ready = document.querySelector('.ready')

    if (el.innerHTML !== 'Enter' && el.innerHTML !== 'Löschen') {
        ready.innerHTML = el.innerHTML
        changeReadyWordleOnKeyInput()
    }

    if (el.innerHTML == 'Enter') {
        // TODO check worlde word
        const activeWordleRowInputs = document.querySelectorAll('.active')
        let wordArr = []
        let wordleArr = []

        for (let i = 0; i < activeWordleRowInputs.length; i++) {
            wordArr[i] = activeWordleRowInputs[i].innerHTML
        }

        let word = wordArr.join('')

        if (word.length != 5 && typeof word !== "string") {
            return
        }

        if (word.toUpperCase() == wordle.toUpperCase()) {
            changeBgColor('', '', true)
        }

        for (let i = 0; i < wordle.length; i++) {
            wordleArr.push(wordle.charAt(i).toUpperCase())
        }

        compareWordles(word, wordArr, wordle.toUpperCase(), wordleArr)

        // TODO change active worlde row
    }

    if (el.innerHTML == 'Löschen') {
        if (ready.innerHTML == '') {
            changeToPreviousInput(ready)
        }

        ready.innerHTML = ''
    }
}

const compareWordles = (userWord, userWordArr, wordle, wordleArr) => {
    console.log(userWord)
    console.log(userWordArr)

    console.log(wordle)
    console.log(wordleArr)

    let sameMatches = []
    let samePositions = []

    let differentMatches = []
    let differentPositions = []

    let correctChars = []
    let multipleChars = []
    let multiplePositions = []
    let wrongChars = []

    for (let i = 0; i < userWordArr.length; i++) {
        for (let j = 0; j < wordleArr.length; j++) {
            if (userWordArr[i] == userWordArr[j] && i != j) {
                multipleChars.push(userWordArr[j])
                multiplePositions.push(i)
            }
            if (userWordArr[i] == wordleArr[j]) {
                if (i == j) {
                    sameMatches.push(userWordArr[i])
                    samePositions.push(i)
                }
                if (i != j && !sameMatches.includes(userWordArr[i])) {
                    differentMatches.push(userWordArr[i])
                    differentPositions.push(i)
                }
            }
        }
    }

    console.log("Same: ", sameMatches)
    console.log("Multiple: ", multiplePositions)
    console.log("Different: ", differentMatches)
    console.log("Same Match Position: ", samePositions)
    console.log("Different Match Position: ", differentPositions)

    changeBgColor(samePositions, differentPositions)
}

const changeBgColor = (samePositions, differentPositions, correct) => {
    let currentActives = document.querySelectorAll('.active')

    for (let i = 0; i < currentActives.length; i++) {
        if (currentActives[samePositions[i]]) {
            currentActives[samePositions[i]].classList.add('match')
        }

        if (currentActives[differentPositions[i]]) {
            currentActives[differentPositions[i]].classList.add('different')
        }

        // TODO display multiple chars correctly

        if (correct) {
            currentActives[i].classList.add('match')
        }
    }
}

keys.forEach(el => {
    el.addEventListener('click', () => {
        handleKeyClick(el)
    })
});

inputBoxes.forEach(el => {
    el.addEventListener('click', () => {
        changeReadyWordle(el)
    })
})