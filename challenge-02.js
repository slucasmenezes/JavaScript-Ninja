// Challenge-02 - Desafio da Semana 2

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sumTwo (n1,n2){
  return("A soma dos dois valores é: " + (n1+n2));
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var recebe = sumTwo((2,2) + 5);


// Qual o valor atualizado dessa variável?


// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/ 
function myvar (str1){
  return("O valor da variável agora é " + str1);
}

// Invoque a função criada acima.
myvar(15)

// Qual o retorno da função? (Use comentários de bloco).
//"O valor da variável agora é 15"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function args (arg1, arg2, arg3){
  if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
    return("Preencha todos os valores corretamente!")
  }else{
    return(arg1 * arg2 * arg3 + 2);
  }
}

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function argsTwo (arg1, arg2, arg3){
  if (arg1 != undefined && arg2 === undefined && arg3 === undefined){
    return ("o valor 1 é: " + arg1)
  }else if (arg1 != undefined && arg2 != undefined && arg3 === undefined) {
    return ("a soma dos valores 1 e 2 é: " + (arg1 + arg2));
  }else if (arg1 != undefined && arg2 != undefined && arg3 != undefined) {
    return("a soma do valor 1 e 2 dividido pelo valor 3 é: " + ((arg1 + arg2) / arg3) );
  }else
    return(false);
}
