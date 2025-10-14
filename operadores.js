let num1 = 20;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2; // O Resto de 15 dividido por 4 e 3

console.log("\nresultado da soma:",soma);
console.log("\nresultado da subtração:",subtracao);
console.log("\nresultado da multipliçao:",multiplicacao);
console.log("\nresultado da divisão:",divisao);

let texto = ("Java" + "Script");
console.log("\ncurso de :",texto);

let n1 = 10;
let n2 = "10";

// Compara so o valor (NÃO USAR)
console.log("\nn1 e n2 são iguais em valor?", n1==n2);

// Verifica se são diferentes em valor ou tipo
console.log("\nn1 e n2 são diferentes em valor e tipo?", n1===n2);
console.log("\nn1 e n2 são diferentes em valor e tipo?", n1!==n2);

let login = "marco";
let senha = 123;

if(login === "marco" && senha === 123){
    console.log("\nSUCESSO");
} else{
    console.log("ERRO DE USUARIO")
}