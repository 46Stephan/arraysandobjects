//Criem uma lista de livros e cadastrem nela ao menos 5 livros

let biblioteca = [];
let continua;

do {
    let livro = {}

    const titulo = prompt('Titulo da obra: ', 'Digite aqui');
    livro.titulo = titulo;

    const categoria = prompt('Informe a categoria da obra: ', 'Digite aqui');
    livro.categoria = categoria;

    const isbn = prompt('Informe o ISBN da obra: ', 'Digite aqui');
    livro.isbn = isbn;

    const preco = parseFloat(prompt('Valor da obra: ', 'Digite aqui'));
    livro.preco = preco;

    biblioteca.push(livro)
    continua = confirm('Deseja cadastrar outro livro?')
} while (continua)

console.log(biblioteca)

// filtrar apenas os livros de valor superior à 10,00;

for (let contador = 1; contador <= 5; contador++) {
    let livro = {}

    const titulo = prompt('Titulo da obra: ', 'Digite aqui');
    livro.titulo = titulo;

    const categoria = prompt('Informe a categoria da obra: ', 'Digite aqui');
    livro.categoria = categoria;

    const isbn = prompt('Informe o ISBN da obra: ', 'Digite aqui');
    livro.isbn = isbn;

    const preco = parseFloat(prompt('Valor da obra: ', 'Digite aqui'));
    livro.preco = preco;

    biblioteca.push(livro)
}
const bibliotecaFiltrada = biblioteca.filter((valor) => valor.preco > 10)
console.log(biblioteca)
console.log(bibliotecaFiltrada)

// - somar o valor total em estoque. Ou seja, a soma de todos os preços de livros