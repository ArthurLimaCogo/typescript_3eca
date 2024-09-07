// app.ts
import { Cliente } from './cliente';
import { Pedido } from './pedido';

const cliente1 = new Cliente("João", "joao@email.com");
const pedido1 = new Pedido(cliente1, "Notebook", 2500.00);

pedido1.exibirPedido();


// 2

// app.ts
import { Financeiro } from './financeiro';

const itens = ["Notebook", "Mouse", "Teclado"];
const orcamento = new Financeiro.Orcamento(5000, itens);

orcamento.exibirOrcamento();

// Aplicar um imposto de 10%
const imposto = Financeiro.calcularImposto(orcamento.valorTotal, 10);
orcamento.valorTotal += imposto;
console.log(`Imposto aplicado: R$${imposto.toFixed(2)}`);
orcamento.exibirOrcamento();

// Aplicar um desconto de 5%
const desconto = Financeiro.calcularDesconto(orcamento.valorTotal, 5);
orcamento.valorTotal -= desconto;
console.log(`Desconto aplicado: R$${desconto.toFixed(2)}`);
orcamento.exibirOrcamento();
