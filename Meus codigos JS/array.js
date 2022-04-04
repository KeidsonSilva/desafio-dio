const valores = [2.4, 3.3, 6.0, 54.6]
console.log(valores[0], valores[3])

valores [4] = 10
console.log(valores)
console.log(valores.length)

//comando push adciona valores ao array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// comando pop deleta o ultimo elemento do array
console.log(valores.pop())

//deleta o elemento selecionado
delete valores[0]
console.log(valores)

console.log(typeof valores)