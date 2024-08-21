// Crie uma função que receba um objeto do tipo Produto e o tipo de pagamento, e retorne
// uma mensagem contendo as informações do produto e a forma de pagamento escolhida.
function mensagem(produto, pagamento) {
    return "Produto: ".concat(produto.nome, "\n Pre\u00E7o: R$").concat(produto.preco.toFixed(2), "\nCategoria: ").concat(produto.categoria, "\nForma de pagamento: ").concat(pagamento);
}
// Exemplo de uso da função
var produtoExemplo = {
    nome: 'Notebook',
    preco: 2999.99,
    categoria: 'Eletrônicos'
};
var formaPagamentoExemplo = 'cartão';
console.log(mensagem(produtoExemplo, formaPagamentoExemplo));
