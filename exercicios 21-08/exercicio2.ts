// Classe Funcionario
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
  
    constructor(nome: string, cargo: string, salario: number) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    // Método que retorna uma descrição do funcionário
    descrever(): string {
      return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  
  // Subclasse Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    departamento: string;
  
    constructor(nome: string, cargo: string, salario: number, departamento: string) {
      super(nome, cargo, salario); // Chama o construtor da classe base
      this.departamento = departamento;
    }
  
    // Método que retorna uma descrição detalhada, incluindo o departamento
    descreverGerente(): string {
      return `${this.descrever()}, Departamento: ${this.departamento}`;
    }
  }
  
  // Exemplo de uso
  const gerente = new Gerente("Carlos", "Gerente de TI", 12000, "Tecnologia da Informação");
  console.log(gerente.descreverGerente());



// Classe ContaBancaria
class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método que exibe o saldo atual da conta
    exibirSaldo(): void {
      console.log(`Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Subclasse ContaCorrente que herda de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    limiteCredito: number;
  
    constructor(titular: string, saldo: number, limiteCredito: number) {
      super(titular, saldo); // Chama o construtor da classe base
      this.limiteCredito = limiteCredito;
    }
  
    // Sobrescrita do método exibirSaldo para incluir o limite de crédito
    exibirSaldo(): void {
      const saldoTotal = this.saldo + this.limiteCredito;
      console.log(`Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}, Limite de Crédito: R$${this.limiteCredito.toFixed(2)}, Saldo Total Disponível: R$${saldoTotal.toFixed(2)}`);
    }
  }
  
  // Exemplo de uso
  const contaCorrente = new ContaCorrente("Maria", 1500, 500);
  contaCorrente.exibirSaldo(); // Exibe o saldo + limite de crédito
  