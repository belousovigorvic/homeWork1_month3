// Валидация почты
const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')

const regExp = /^\s*[^\s@][a-zA-Z0-9_]+@gmail.com\s*$/i

button.onclick = () => {
    if (regExp.test(input.value)) {
        result.innerHTML = 'Ok'
        result.style.color = 'green'
    } else {
        result.innerHTML = 'Not correct'
        result.style.color = 'red'
    }
}

// Движение кубика
const smallBox = document.querySelector('.small__box')

let i = 0

const movingBox = () => {
    i++
    smallBox.style.left = `${i}px`
    console.log(i);
    if (i < 450) {
        movingBox()
    }
}
movingBox()