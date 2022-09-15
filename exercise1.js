const prompt = require('prompt-sync')()

const calcImc = require('./calcIMC')

console.log('Qual é o seu peso em Kg?')
const weight = Number(prompt('-->'))


console.log('Qual é a sua altura em metros?')
const height = parseFloat(prompt('-->'))


console.log(`Seu IMC é: ${calcImc(weight, height)}`)


