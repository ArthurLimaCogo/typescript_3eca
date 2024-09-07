export namespace Financeiro {
    // Função que calcula o imposto
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    // Função que calcula o desconto
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    // Classe Orcamento
    export class Orcamento {
      valorTotal: number;
      itens: string[];
  
      constructor(valorTotal: number, itens: string[]) {
        this.valorTotal = valorTotal;
        this.itens = itens;
      }
  
      // Método para exibir o orçamento atual
      exibirOrcamento(): void {
        console.log(`Orçamento Total: R$${this.valorTotal.toFixed(2)}, Itens: ${this.itens.join(', ')}`);
      }
    }
  }
  