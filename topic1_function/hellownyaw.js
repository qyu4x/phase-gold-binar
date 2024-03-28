function helloMeow(name, breed, age) {
    return `Hellow my name is neko, ${name}, breed ${breed}, age ${age}`
}

console.log(helloMeow("Hikaru", "Persia", 2))

// to arrow
const helloNyan = (name, breed, age) => {
    return `Hellow my name is neko, ${name}, breed ${breed}, age ${age}`
}

console.log(helloNyan("Ai", "Persia", 1))

// to anon
const helloNeko = function (name, breed, age) {
    return `Hellow my name is neko, ${name}, breed ${breed}, age ${age}`
}

console.log(helloNeko("Persia juliet", "Persia", 16))