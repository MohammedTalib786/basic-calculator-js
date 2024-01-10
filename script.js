let btn = document.querySelectorAll('button')
let input = document.getElementById('input')

// console.log(btn)
// console.log(input)

let btns = Array.from(btn)
// console.log(btns)
let str = ''
let arr = []

btns.forEach(elem => {
    // console.log(elem)
    elem.addEventListener('click', (e) => {
        // console.log(e.target.innerHTML)
        if (e.target.innerHTML == 'AC') {
            arr = [];
            input.innerHTML = '';
        }
        else if (e.target.innerHTML == '=') {
            // console.log(eval(str))
            input.innerHTML = eval(str);
        }
        else if (e.target.innerHTML == 'back') {
            arr.pop()
            str = arr
            input.innerHTML = str;
            // console.log(arr)
        }
        // else if (e.target.innerHTML == '+') {
        //     e.target.innerHTML = `<button disabled>+</button>`
        // }
        else {
            arr.push(e.target.innerHTML)
            // console.log(arr)
            str = arr.join('')
            // console.log(str)
            input.innerHTML = str;
        }
    })
})

