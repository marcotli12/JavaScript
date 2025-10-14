let timedefutebol= 1;

switch (timedefutebol){

    case 1 :

        console.log("Melhor time : Atletico.");
        
        break;

        case 2 :
        
            console.log("Real madrid.");
            
            break;

            case 3 :

                console.log("Barcelona.");
        
                break;

                case 4 :
                    
                    console.log("PSG.");
            
                     break;
                 
}

let temperaturaatual=20;

while(temperaturaatual < 100){

    console.log("Aquecendo..., Temperatura Atual :",temperaturaatual,"°c");

    temperaturaatual+= 10; // ESSENCIAL PARA NÃO CRIAR UM LOOP.

}

console.log("Água Ferveu!, Temperatura atual: ",temperaturaatual,"°c");

console.clear()

for (let xicara = 1 ; xicara <= 5 ; xicara++){

    console.log(`Entregando a xícara de café número: ${xicara}..`);

}


console.clear()

let sistemaverificado = true; 

let tentativas = 0;

do {
    
    // Este Bloco é executado pelo menos uma vez,ANTES de chocar a condição.
    
    console.log("Executando verificação de rotina, Tentativa numero :", tentativas);

    tentativas++;
} 

while (sistemaverificado === false); /// A pergunta é feita no final.

        console.log("Sistema Verificado. O laço rodou apenas uma vez.");

    
        console.clear()


// LAÇO DE FORA : Controla as Mesas . 
for (let mesa=1;mesa<=2;mesa++){

    console.log(`\nchef se aproxima da MESA, ${mesa}`);

//LAÇO DE FORA : Controla as cadeiras.

for(let cadeira=1;cadeira<=3;cadeira++){

    console.log(` - Entregando pedido para a cadeira, ${cadeira} `);

}

console.log (` MESA ${mesa} foi completamente servida!`);

}

console.clear();

for(let xicara = 1;xicara <= 5;xicara++){
    
    if(xicara===3){
       
        console.log(`[AVISO] a XICARA ${xicara} esta trincada. Pulando...`);
        
        continue; // O codigo ABAIXO será IGNORADO nesta rodada.
    }
        
    console.log(`- Enchendo e servindo a xicara ${xicara}.`);
}

console.log ("Serviço Finalizado.");