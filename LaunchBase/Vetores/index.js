//Criar um programa que calcula a media
//das notas entre os alunos e enviar
//mensagem de calculo da Media 

/* Com vetores podemos agrupar varias variaveis, objetos e etc..
dentro de uma so variavel, para criar uma devemos utilizar a chaves [] */

const alunos = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    }
]

const nomesDeAlunos = ["Mayk", "Diego", "Fulano"]
        
    /* Para acessar um vetor utilizamos a chave [] e a posicao do elemento
    lembre-se que a posicao e contada desde o zero */
     
    const media = ( alunos[0].nota + alunos[1].nota + alunos[2].nota ) / 3
    
    // Usando Condicao 
    
    //Se a media for maior que 5, parabenizar turma 
    if ( media > 5 ){
        //Faz alguma coisa
        console.log(`A media foi de ${media}, Parabens`)
    } else {
        //se nao faz outra coisa
        console.log(`A media foi menor do que 5`)
    }