/**
 * o Number é representado internamente pelo padrão Iee 754 de 64 bits 
 * 
 * suporta os sistemas de numeração decimal, hexadecimal, binário e octal
 *
 * ________________________________________________________________________________
 * o sistema de numeração decimal, de base 10, 
 * deve iniciar com um número de 1 a 9, 
 * seguido por números de 0 a 9 com ou sem ponto idicando se é inteiro ou decimal
 *_________________________________________________________________________________
 *
 * O sistema de numeração hexadecimal, de base 16,
 *  deve iniciar com 0x ou 0X, 
 * seguido por números de 0 a 9 e letras de A a F
 * 
 *________________________________________________________________________________
 *
 * O sistema de numeração binário, de base 2,
 * deve iniciar com 0b ou 0B,
 * seguido por números de 0 a 1
 *________________________________________________________________________________
 *
 * O sistema de numeração octal, de base 8, 
 * deve iniciar com 0, 0o ou 0O 
 * seguido por números de 0 a 7
 *_______________________________________________________________________________
 *
 * 
 */



//  decimal 
console.log('decimal')
console.log(6)
console.log(Number(6))
console.log(new Number(6))
//hexadecimal 
console.log('hexadecimal')
console.log(0xff)
console.log(Number(0Xa))
console.log(new Number(0Xa))
// binario 
console.log('binario')
console.log(0b11)
console.log(Number(0b001))

//octa
console.log('octa')
console.log(0o1)
console.log(07)
console.log(0O7)
console.log(Number(0o5))


//Operaçoes disponiveis
let numero = 123.4
(123.4).toExponential(10)
(123.4).toFixed(2)
(123.4).toPrecision(10)

// operadores  +, -, *, /, %,
2 + 2;
8 - 3;
2 * 5;
8 / 4;
141%2;

// atribuição com o mesmo numero
// +=, -=, *=, /= e %=,

let result = 10
result += 2;
result -= 2;
result /= 2;
result *= 5;
result %= 3;

// operedores de incremento e decremento ++ e --
result--
--result
result++
++result


// operadores binarios
// |, &, ^, ~, <<, >> e >>>
4 | 3;
3 & 1;
5 ^ 2;
~2;
4 << 2;
128 >> 1;
-2 >>> 1;

let binario1 = 4
let binario2 = 3
//converte para String (de base 2) e depois padroniza com o tamanha de 32 caracter e estes caracters sendo 0
binario1.toString(2).padStart(32,0)
binario2.toString(2).padStart(32,0)


// IEEE 754 é um padrão de representação numerica

//erro de arendodamento
0.1 + 0.2 //0.30000000000000004
666.7 - 666.6 //0.10000000000002274
33.3 * 3 // 99.89999999999999
12.2 / 0.1 // 121.99999999999999

// operções que retorna infinity, quando utrapassa os limites do tipo number
1/0 //Infinity
Math.pow(10,1000)  //Infinity
Number.MAX_VALUE * 2 //Infinity
-Number.MAX_VALUE * 2 //Infinity
Math.log(0) //Infinity


// NaN(Not a Number) é retornado quando realizamos uma operação numerica onde não é possível determinar o resultado
10 * "Matheus"
0/0
Math.sqrt(-9)
Math.log(-1)
parseFloat('dsadas')

//Math é um objeto global que contém Constates matemática e métodos para realização de operações enolvendo números

// Constates
// E: E
// LN10: logaritmo natural de 10
// LN2: logaritmo natural de 2
// LOG10E: logaritmo de E na base 10
// LOG2E: logaritmo de E na base 2
// PI: PI
// SQRT1_2: Raiz quadrada de 1/2
// SQRT: Raiz quadrada de 2 

Math.E
Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT

//Método
// abs: Conveter o sial do número para positivo
// ceil: Arredonda o número para cima
// floor: arredonda o número para baixo
// roun: Arredonda o número para cima se a parte decimal for de 5 a 9 e para baixo se for de 0 a 4
// sing: Retorna 1 se o número for positivo e -1 se for negativo 
// trunc: Elimina a parte decimal do numero, tornando-o um inteiro 
Math.abs(10) // 10
Math.abs(-10) // 10

Math.ceil(1.1) // 2 
Math.ceil(-1.1) // 1

Math.floor(9.9) // 10 
Math.floor(-9.9) // 9 

Math.round(4.5)  // 5
Math.round(-4.5) // -4 
Math.round(-4.4) // -4 
Math.round(-4.6) // -5 
Math.round(-4.7) // -5 

Math.sign(5) //1
Math.sign(-5) //-1

Math.trunc(2.3) //2
Math.trunc(-2.3) //-2

// operações  matematicas
// cbrt: Retorna a raiz cúbica do numero
// cos: retotna o coseno de um angulo
// exp: retorna E elevado a um expoente
// hypot: retorna a raiz quadrada dos quadrados dos numeros
// log: retorna o logaritmo do numero em vase natural 
// pow: retorna o numero elevado a um determinado expoente
// sin: retorna o seno de um angulo
// sqrt: retorna a raiz quadrada do número 
// tan: retorna a tangente de um angulo 


Math.cbrt(8) //2
Math.cos(Math.PI/3) // 0.5000000000000001
Math.exp(1) //2.718281828459045
Math.hypot(3,4) //5 
Math.log(1) //0
Math.pow(2,10) //1024
Math.sin(Math.PI/2) // 1
Math.sqrt(4) // 2
Math.tan(Math.PI/4) //0.9999999999999999

//
// min: retorna o menor numero passado por parametro
// max: retorna o maior número passado por parametro 
// random: retorna um numero randomico entre  0 e 1 ( 0 < 1 ) , não incluindo o  1  

Math.min(1,2,3,4,5,6) //1
Math.max(1,2,3,4,5,6) //6 
Math.random()

