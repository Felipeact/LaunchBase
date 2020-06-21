// Usuários e tecnologias

// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array)


/* ============ PRIMEIRO PASSO ==============*/
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

// Percorra a lista de usuários com uma estrutura de repetição 
// imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

//para (usuario de usuarios)
for ( usuario of usuarios ){
    //fazer alguma coisa
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}


/* ============ SEGUNDO PASSO ==============*/
// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
// Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for ( let tecnologia of usuario.tecnologias ){
        const encontreiCSS = tecnologia === 'CSS'
        if ( encontreiCSS ){
            return true
        }
    }
    return false
  }

  for (let usuario of usuarios){
      const esteUsuarioCSS = checaSeUsuarioUsaCSS(usuario)
      console.log(usuario.nome)
      console.log(esteUsuarioCSS)  
  }



/* ============ TERCEIRO PASSO ==============*/
//   Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a 
//   função construída acima, 
//   se SIM, imprima em tela as informações do usuário:

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }




  // 1 PASSO FEITO DE UMA OUTRA FORMA

  //for ( let a = 0; a < usuarios.length; a++ ){

    //     let tec = ""
    //     for ( let i = 0; i < usuarios[a].tecnologias.length; i++) {
    //         if (i == 0 ){
    //             tec = usuarios[a].tecnologias[i]
    //         }else {
    //             tec = tec + ", " + usuarios[a].tecnologias[i]
    //         }
    //     }
    //     console.log(`${usuarios[a].nome} trabalha com ${tec}`)
    // }
    