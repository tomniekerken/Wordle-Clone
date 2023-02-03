const keys = document.querySelectorAll('.key')

const inputBoxes = document.querySelectorAll('.wordle-input')

const firstBoxes = document.querySelectorAll('#first-wordle .wordle-input')
const secondBoxes = document.querySelectorAll('#second-wordle .wordle-input')
const thirdBoxes = document.querySelectorAll('#third-wordle .wordle-input')
const fourthBoxes = document.querySelectorAll('#fourth-wordle .wordle-input')
const fifthBoxes = document.querySelectorAll('#fifth-wordle .wordle-input')

let wordle = 'Maumr'

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
    // Array for each row
    // check currentReady next sibling
    // check if next sibling is inside row
    // if not, stay on currentReady
    // adjust next ready wordle on key input
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

        if (word == wordle) {
            // If wordle is correct
        }

        for (let i = 0; i < wordle.length; i++) {
            wordleArr.push(wordle.charAt(i).toLowerCase())
        }
        
        let samePosition = []
        let differentPosition = []
        
        let wordArrMap = new Map();
        wordArr.forEach((char, index) => {
            wordArrMap.set(char.toLowerCase(), index)
        })
        
        wordleArr.forEach(char => {
            if (wordArrMap.has(char)) {
                if (wordleArr.indexOf(char) === wordArrMap.get(char)) {
                    samePosition.push(char)
                } else {
                    differentPosition.push(char)
                }
            }
        })
        
        console.log(wordleArr)
        console.log(wordArr)
        
        console.log("Same position: ", samePosition)
        console.log("Different position: ", differentPosition)

        // TODO change active worlde row
    }

    if (el.innerHTML == 'Löschen') {
        if (ready.innerHTML == '') {
            changeToPreviousInput(ready)
        }

        ready.innerHTML = ''
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