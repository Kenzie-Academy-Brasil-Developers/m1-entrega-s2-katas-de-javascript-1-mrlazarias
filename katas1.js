console.log("Primeira Função:")

function oneThroughTwenty() {
    for (let i = 1; i <= 20; i++) {
        console.log(i)
    }
}
oneThroughTwenty()

console.log("Segunda Função:")

function evensToTwenty() {
    for (let par = 0; par <= 20; par += 2) {

        console.log(par);
    }
}
evensToTwenty()
console.log("Terceira Função:")

function oddsToTwenty() {
    for (let impar = 1; impar <= 20; impar += 2)
        console.log(impar);
}
oddsToTwenty()
console.log("Quarta Função:")

function multiplesOfFive() {

    for (let mult = 5; mult <= 100; mult += 5)
        console.log(mult);
}
multiplesOfFive()
console.log("Quinta Função:")

function squareNumbers() {

    let perfeito = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
    for (let quadrado = 0; quadrado <= 100; quadrado++)

        console.log(perfeito[quadrado]);

}
squareNumbers()
console.log("Sexta Função:")

function countingBackwards() {

    for (let contrario = 20; contrario >= 1; contrario--)

        console.log(contrario);
}
countingBackwards()

console.log("Sétima Função")

function evenNumbersBackwards() {

    for (let reversePar = 20; reversePar >= 1; reversePar -= 2) {

        console.log(reversePar);
    }
}
evenNumbersBackwards()
console.log("Oitava Função:")

function oddNumbersBackwards() {

    let revImp = [, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    for (let reverseImpar = 20; reverseImpar >= 1; reverseImpar--)

        console.log(revImp[reverseImpar]);
}

oddNumbersBackwards()
console.log("Nona Função:")

function multiplesOfFiveBackwards() {
    for (let reverseMult = 100; reverseMult >= 5; reverseMult -= 5)
        console.log(reverseMult);
}

multiplesOfFiveBackwards();
console.log("Décima Função")

function squareNumbersBackwards() {

    let perfect = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
    for (let reverseQ = 100; reverseQ >= 0; reverseQ--)

        console.log(perfect[reverseQ]);

}
squareNumbersBackwards();
