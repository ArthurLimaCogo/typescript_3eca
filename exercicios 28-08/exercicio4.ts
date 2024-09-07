async function obterDados(): Promise<string> {
    return new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolver('Dados recebidos');
            } else {
                rejeitar('Erro ao obter dados');
            }
        }, 2000);
    });
}

async function iniciarBusca() {
    try {
        const resultado = await obterDados();
        console.log(resultado);
    } catch (erro) {
        console.error('Erro na busca:', erro);
    }
}