let input = document.getElementById('input');

let sumOfAll = '';
let zero;

function appendChars(str) {
    sumOfAll += str;
    input.innerHTML = sumOfAll;
}

function clearAll() {
    sumOfAll = '';
    zero = 0;
    input.innerHTML = zero;
}

function backSpace() {
    sumOfAll = sumOfAll.slice(0, -1);
    input.innerHTML = sumOfAll;
}

function calculate() {
    try {
        sumOfAll = eval(sumOfAll);
        input.innerHTML = sumOfAll;
        String(sumOfAll)
    } catch (e) {
        console.log(e.message)
        input.innerHTML = 'Error';
    }
}
