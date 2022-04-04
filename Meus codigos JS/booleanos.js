let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//os verdadeiros
console.log(!!true)
console.log(!!7)
console.log(!!'Qualquer coisa')

//os falsos
console.log(!!0)
console.log(!!false)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//ou é ||
console.log(!!( '' || false || 0 || ' '))

// se não houver atribuição para a variavel, retornará o texto 'desconhecido'. 
//Se houver atribuição para a variável, retornará a palavra atribuida.
let nome = 'Kika'
console.log(nome || 'desconhecido')