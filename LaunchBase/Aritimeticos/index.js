/* =============================================

    Operadores Logicos 

    && "E" as duas condicoes dever ser verdadeiras 
        para que a condicao final seja verdadeira
    
    || "OU" Uma das condicoes deve ser verdadeira para 
        que a condicao final seja verdadeira

    ! "NAO" nega uma condicao

===================================================== */

   // Desafio 1
   const idade = 18
   // verificar se a pessoa e maior igual a de 18 anos
   console.log(idade >= 18)
   // se simm, deixar entrar se nao, bloquear a entrada
   // se a pessoa tiver 17 anos 
   //avisar para voltar quando tiver 18 anos
   if (!(idade >= 18) || idade === 17 ){
       console.log('Bloquear a entrada')
       console.log('Volte quando tiver 18')
    }else {
        console.log('Deixar entrar')
   }

   /* =============================================

    Operadores Aritmeticos 

   *    Multiplicacao

   /    Divisao

   %    Resto da Divisao

   +    Soma

   -    Subtracao

===================================================== */
   
console.log( 2 * 2 ) // 4
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 )  // 0.5
console.log( 2 + 2 ) // 4
console.log( 2 - 2 ) // 0