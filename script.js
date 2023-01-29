const keyArr = document.querySelectorAll('.key')

const firstWordleInputArr = document.querySelectorAll('#first-wordle .wordle-input')
const secondWordleInputArr = document.querySelectorAll('#second-wordle .wordle-input')
const thirdWordleInputArr = document.querySelectorAll('#third-wordle .wordle-input')
const fourthWordleInputArr = document.querySelectorAll('#fourth-wordle .wordle-input')
const fifthWordleInputArr = document.querySelectorAll('#fifth-wordle .wordle-input')

const boxArr = document.querySelectorAll('.wordle-input')

boxArr.forEach(box => {
    box.addEventListener('click', () => {
        for (let i = 0; i < boxArr.length; i++) {
            const box = boxArr[i];
            box.classList.remove('ready')
        }
        box.classList.add('ready')
    })
})

keyArr.forEach(el => {
    el.addEventListener('click', () => {
        let ready = document.querySelector('.ready')
        ready.innerHTML = el.innerHTML
    })
});