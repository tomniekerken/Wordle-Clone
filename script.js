const keyArr = document.querySelectorAll('.key')
const boxNodelist = document.querySelectorAll('.wordle-input')
const boxArr = Array.from(boxNodelist)

const changeReadyWordle = (el) => {
    for (let i = 0; i < boxArr.length; i++) {
        const box = boxArr[i];
        box.classList.remove('ready')
    }
    el.classList.add('ready')
}

const changeWordleInnerHTML = (el) => {
    let ready = document.querySelector('.ready')

    if (el.innerHTML != 'Enter' || el.innerHTML != 'Löschen') {
        ready.innerHTML = el.innerHTML
    }

    if (el.innerHTML == 'Enter') {
        // TODO
    }

    if (el.innerHTML == 'Löschen') {
        ready.innerHTML = ''
    }

    // TODO: Change Ready Wordle to next possible
}

const handleSubmit = () => {

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