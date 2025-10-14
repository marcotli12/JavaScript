let ehFuncionario = true;
let ehMaiorDeIdade = true;
let temConvite = false;

if(ehFuncionario === true){
    console.log("\nVocê é funcionario!")
    console.log("\nAcesso permitido");
}else if(ehMaiorDeIdade === true & temConvite === true){
    
    console.log("\nVocê é maior de idade e tem convite !");
    console.log("\nAcesso Liberado");
}else{
    console.log("\nVocê não é maior de idade ou não tem convite !")
    console.log("\nAcesso negado");
}