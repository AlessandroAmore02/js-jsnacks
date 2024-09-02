let numeri = []

for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("inserisci un numero"))
    console.log(num)
    if (num % 2 != 0) {
        numeri.push(num)
        console.log("aggiunto numero dispari", num)
    }
}

console.log(numeri)