const keys = document.querySelectorAll('.key')

const inputBoxes = document.querySelectorAll('.wordle-input')

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

    // Array for each row
    // check currentReady next sibling
    // check if next sibling is inside row
    // if not, stay on currentReady

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



/* 
const keyArr = document.querySelectorAll('.key')
const boxNodelist = document.querySelectorAll('.wordle-input')
const boxArr = Array.from(boxNodelist)

const changeReadyWordle = (el) => {
    for (let i = 0; i < boxArr.length; i++) {
        const box = boxArr[i];
        box.classList.remove('ready')
    }

    // TODO: Check if Wordle .ready is inside current wrapper
    // TODO: Remove possibility to add letters to different wordle wrapper

    el.classList.add('ready')
}

const changeWordleInnerHTML = (el) => {
    let ready = document.querySelector('.ready')

    if (el.innerHTML != 'Enter' || el.innerHTML != 'Löschen') {
        ready.innerHTML = el.innerHTML
    }

    if (el.innerHTML == 'Enter') {
        // TODO change active worlde row
    }

    if (el.innerHTML == 'Löschen') {
        ready.innerHTML = ''
    }

    nextReadyWorlde()
}

const nextReadyWorlde = () => {
    let current = document.querySelector('.ready')
    let next

    for (let i = 0; i < boxArr.length; i++) {
        if (current == boxArr[i]) {
            next = boxArr[i+1]
        }
    }

    changeReadyWordle(next)
}

const handleSubmit = () => {
    // TODO: Proceed the complete user input for a wordle row
}

boxArr.forEach(el => {
    el.addEventListener('click', () => {
        changeReadyWordle(el)
    })
})

keyArr.forEach(el => {
    el.addEventListener('click', () => {
        changeWordleInnerHTML(el)
    })
}); */