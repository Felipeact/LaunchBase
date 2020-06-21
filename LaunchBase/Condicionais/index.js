//Criar um programa que calcula a media
//das notas entre os alunos e enviar
//mensagem de calculo da Media 

const aluno01 = 'Mayk'
const notaAluno01 = 9.8 

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Usando Condicao 

//Se a media for maior que 5, parabenizar turma 
if ( media > 5 ){
    //Faz alguma coisa
    console.log(`A media foi de ${media}, Parabens`)
} else {
    //se nao faz outra coisa
    console.log(`A media foi menor do que 5`)
}
