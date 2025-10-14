// Ingredientes e Dados----
const temperaturaIdeal = 100;
let temperaturaAtual = 120;
let temPoDeCafe = true;

// --- ALGORITMO(A RECEITA) ---

if(temPoDeCafe==true){
    console.log("\nIniciando preparo do cafe...");

    if(temperaturaAtual >= temperaturaIdeal){
    console.log("\nAgua ferveu! Pode passar o cafe");
    console.log("\ntemperatura atual:",temperaturaAtual);
}
else{
    console.log("\nAinda não ferveu.Por Favor, aguarde.");
    console.log("\ntemperatura atual:",temperaturaAtual);
}
}
else {console.log("\nnão tem po de cafe!")
}