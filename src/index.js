'use strict'

const fibonacci = () => {
    const array = [0, 1]
    for (let i = 0; array.slice(-1) < 350; i++) {
        array.push(array[i] + array[i + 1])
    }
    return array
}


const isFibonnaci = (num) => fibonacci().includes(num)


module.exports = {
    fibonacci,
    isFibonnaci
}
