//Criar um programa que calcula a media
//das turmas entre os alunos e enviar
//mensagem de calculo da Media 


const alunosDaTurmaA = [
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
    },
    {
        nome: 'Mais um aluno',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'Siclano',
        nota: 2
    },
    {
        nome: 'Novo Aluno',
        nota: 5 
    },
]

//Function

function calculaMedia(alunos){
    let soma = 0;
    //Estrutura de repeticao
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}
        
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){ 
    //Se a media for maior que 5, parabenizar turma 
    if ( media > 5 ){
        //Faz alguma coisa
        console.log(`A media da ${turma} foi de ${media}, Parabens`)
    } else {
        //se nao faz outra coisa
        console.log(`A media da ${turma} foi menor do que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')