// Vetores e objetos

// Crie um programa com um objeto para armazenar dados de um programador como 
// nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

const objeto = {
    nome: 'Carlos',
    idade: 32,
    propriedade: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "JavaScript", especialidade: "Web/Mobile" }
    ]
  };

  const tecnologia = objeto.propriedade[0].nome
  const especialidade = objeto.propriedade[0].especialidade

//   Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
console.log(`O usuario ${objeto.nome} tem ${objeto.idade} anos e usa a tecnologia ${tecnologia} com
especialidade em ${especialidade}  `)