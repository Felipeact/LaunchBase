//Criar um programa que calcula a media
//das notas entre os alunos e enviar
//mensagem de calculo da Media 

/* Para criar um objeto no JavaScript devemos utilizar as chaves {}
e dentro das chaves colocarmos as propriedades */

const aluno01 = {
nome: 'Mayk',
    nota: 9.8
}

const aluno02 = {
nome: 'Diego',
    nota: 10
}

const aluno03 = {
nome: 'Fulano',
    nota: 2
}

/*Para acessar uma propriedade dentro do objeto utilizamos um ponto final depois
do nome dado ao objeto // ex:  aluno01.nota  */
 
const media = ( aluno01.nota + aluno02.nota + aluno03.nota ) / 3

// Usando Condicao 

//Se a media for maior que 5, parabenizar turma 
if ( media > 5 ){
    //Faz alguma coisa
    console.log(`A media foi de ${media}, Parabens`)
} else {
    //se nao faz outra coisa
    console.log(`A media foi menor do que 5`)
}