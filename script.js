const keyArr = document.querySelectorAll('.key')
const boxArr = document.querySelectorAll('.wordle-input')

const changeReadyWordle = (el) => {
    for (let i = 0; i < boxArr.length; i++) {
        const box = boxArr[i];
        box.classList.remove('ready')
    }
    el.classList.add('ready')
}

const changeWordleInnerHTML = (el) => {
    let ready = document.querySelector('.ready')
    ready.innerHTML = el.innerHTML
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