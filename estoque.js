// --- ESTADO INICIAL DO ESTOQUE ---
let estoqueCafeEmGramas = 100;
let estoqueLeiteEmMl = 1000;
let estoqueCopos = 20;

const clientesParaAtender = 15;

// Consumo por cliente

let diadasemana = "domingo"

console.log("----------------------------------------------------------");
console.log("iniciando verificação");
console.log("hoje é:", diadasemana );


for ( let i=1;i<=15;i++){

    const consumoCafe = 10; // gramas
    const consumoLeite = 50; // ml
    const consumoCopos = 1;

    if (diadasemana === "domingo" && diadasemana === "sabado"){
    
    consumoCafe = 20;

    }
    
    if(estoqueCafeEmGramas >= consumoCafe && estoqueLeiteEmMl >= consumoLeite && estoqueCopos >= consumoCopos){
        
        console.log("----------------------------------------------------------");
        
        console.log(`Cliente ${i} atendido com sucesso!`);
        
        estoqueCafeEmGramas -= consumoCafe;
        
        estoqueLeiteEmMl -= consumoLeite; 
        
        estoqueCopos -= consumoCopos;
        
    
    }
    else if(estoqueCafeEmGramas < consumoCafe){
        
        console.log("\nAcabou o CAFÉ. Precisamos comprar mais!");

        break ; 
    
    }
    else if(estoqueLeiteEmMl < consumoLeite){
        
        console.log("\nAcabou o LEITE. Precisamos comprar mais!");
        
        break ; 
    
    }
    
    else if(estoqueCopos < consumoCopos){
        
        console.log("\nAcabaram os COPOS. Precisamos comprar mais!");
        
        break;
    
    }

}

console.log("----------------------------------------------------------");

    console.log("\nResultado Final");

    console.log("----------------------------------------------------------");

    console.log("quantidade de café:", estoqueCafeEmGramas , "g");

    console.log("----------------------------------------------------------");

    console.log("quantidade de leite:", estoqueLeiteEmMl , "ml");

    console.log("----------------------------------------------------------");

    console.log("quantidade de copos:", estoqueCopos);

    console.log("----------------------------------------------------------");