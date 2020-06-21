/* ===========================================

    Operadores de comparacao

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a 
    ==      Igual a 
    ===     Igual a e do mesmo tipo
    !=      Diferente de
    !==     Diferente de, Incluse do tipo

    =========================================== */

    // Desafio 1
    const idade = 18
    // verificar se a pessoa e maior igual a de 18 anos
    console.log(idade >= 18)
    // se simm, deixar entrar se nao, bloquear a entrada
    if (idade >= 18){
        console.log('Deixar entrar')
    }else {
        console.log('Bloquear a entrada')
    }
    // se a pessoa tiver 17 anos 
    //avisar para voltar quando tiver 18 anos
    if (idade === 17){
        console.log('Volte quando tiver 18')
    }
