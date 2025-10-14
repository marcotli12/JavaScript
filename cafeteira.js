const capacidadetotalagua = 1000 ; //ml 
let aguainicial = 0 ;
const temperaturaideal = 95 ; //graus 
let graodecafe = "Arábica" ; 
const xicaraservir = 10 ;
const xicaraquebrada = 4;
const limitegraocafe = 7;

console.log("Iniciando o preparo do café. ");

while(aguainicial < capacidadetotalagua){
    
    aguainicial += 100
    
    console.log(`Nivel atual do reservatorio: ${aguainicial}`);
}

console.log("Reservatorio Cheio.");

let tipomoagem 

switch (graodecafe){
    case "Arábica":
        tipomoagem = "moage Media";
        break;
        case "Organico":
            tipomoagem = "moagem fina";
            break;
            case "Robusta":
                tipomoagem = "moagem normal";
                break;
}

console.log(`Grão de Café selecionado , ${graodecafe} , selecionado : ${tipomoagem}`);

console.log("coando café.");

for(let xicaraatual = 1 ;xicaraatual <= 10 ; xicaraatual++){
    console.log(`Preparando a xicara: ${xicaraatual}`);
    if(xicaraatual === xicaraquebrada){
        console.log(`[AVISO] a xicara está quebrada ! passando para a proxima.`);
        continue;
    }
        let temperaturaverificada = temperaturaideal - (xicaraatual * 2);

        console.log(temperaturaverificada);    

        if(temperaturaverificada===temperaturaideal){
            console.log("Temperatura Perfeita.");
        }else if(temperaturaverificada >= 85){
            console.log("Temperatura Boa, mas esfriando");
        }else{
            console.log("Fria");
        }

        if(xicaraatual===limitegraocafe){
            console.log("ACABOU O CAFÉ");
            break;
        }
        console.log(`Xicara : ${xicaraatual} , servida com sucesso.`);
}




