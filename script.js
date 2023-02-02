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
});