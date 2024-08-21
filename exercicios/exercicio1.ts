// Defina uma interface chamada Produto , que contenha as 
// propriedades nome (string), preco (number) e categoria (string).
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

// Defina um tipo de união chamado FormaPagamento , que pode ser 'dinheiro' , 'cartão' ou 'pix' .
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

// Crie uma função que receba um objeto do tipo Produto e o tipo de pagamento, e retorne
// uma mensagem contendo as informações do produto e a forma de pagamento escolhida.

function mensagem(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}\n Preço: R$${produto.preco.toFixed(2)}\nCategoria: ${produto.categoria}\nForma de pagamento: ${pagamento}`;
}

// Exemplo de uso da função
const produtoExemplo: Produto = {
    nome: 'Notebook',
    preco: 2999.99,
    categoria: 'Eletrônicos'
};

const formaPagamentoExemplo: FormaPagamento = 'cartão';

console.log(mensagem(produtoExemplo, formaPagamentoExemplo));