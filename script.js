const keys = document.querySelectorAll('.key')

const inputBoxes = document.querySelectorAll('.wordle-input')

const firstBoxes = document.querySelectorAll('#first-wordle .wordle-input')
const secondBoxes = document.querySelectorAll('#second-wordle .wordle-input')
const thirdBoxes = document.querySelectorAll('#third-wordle .wordle-input')
const fourthBoxes = document.querySelectorAll('#fourth-wordle .wordle-input')
const fifthBoxes = document.querySelectorAll('#fifth-wordle .wordle-input')

const changeReadyWordleOnClick = (el) => {
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
    let nextSibling = ''

    for (let i = 0; i < firstBoxes.length; i++) {
        if (currentReady == firstBoxes[i] && i + 1 <= firstBoxes.length) {
            nextSibling = firstBoxes[i+1]
            console.log(nextSibling)
        }
    }
    // Array for each row
    // check currentReady next sibling
    // check if next sibling is inside row
    // if not, stay on currentReady
    // adjust next ready wordle on key input
}

const changeWordleInnerHTML = (el) => {
    let ready = document.querySelector('.ready')

    if (el.innerHTML != 'Enter' || el.innerHTML != 'Löschen') {
        ready.innerHTML = el.innerHTML
    }

    if (el.innerHTML == 'Enter') {
        // TODO check worlde word
        // TODO change active worlde row
    }

    if (el.innerHTML == 'Löschen') {
        ready.innerHTML = ''
        // if ready.innerHTML was empty, move to sibling left of it if its inside the row
    }
}

keys.forEach(el => {
    el.addEventListener('click', () => {
        changeWordleInnerHTML(el)
        changeReadyWordleOnKeyInput()
    })
});

inputBoxes.forEach(el => {
    el.addEventListener('click', () => {
        changeReadyWordleOnClick(el)
    })
})