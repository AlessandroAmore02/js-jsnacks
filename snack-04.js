let lista = ["maria", "giovanni", "giulio"]

let nome = prompt("inserisci il tuo nome")
let flag

for (let i = 0; i < lista.length; i++) {
    if (nome == lista[i]) {
        flag = 1
    }
    else {
        flag = 0
    }
}

if (flag == 1) {
    console.log("benvenuto!!")
}
else {
    console.log("non sei invitato!!")
}
