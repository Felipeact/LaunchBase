// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
// Os dados a serem armazenados são:

// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
    // Rua: Rua Guilherme Gembala
    // Número: 260

// Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programacao',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

console.log(`A empres ${empresa.nome} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)