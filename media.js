let nota1 = 5;
let nota2 = 10;
let nota3 = 0;
let media = (nota1+nota2+nota3) / 3
let c = 0

if(nota1 === 0 || nota2 === 0 || nota3 === 0){
    console.log("\nUma Das Notas Está 0");
}
if(media >= 7){
    console.log("\nMedia acima de 7 !");
    console.log("\naprovado");
}else{
    console.log("\nMedia abaixo de 7 !")
    console.log("\nReprovado");
}