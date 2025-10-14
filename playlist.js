let array = ["teste1" , "teste 2"];

let playlist = [
{
    nome: "by the way",
    artista: "Black Roty",
    genero: "Rock",
                
} ,

{
 
    nome: "você",
    artista: "Henrique e Juliano",
    genero: "Sertanejo",
                
},
{ 
    nome: "evidencias",
    artista: "chitaozinho e xororo",
    genero: "Sertanejo",
                
}
]

for (let musica of playlist){
    
    console.log(`${musica.nome}  -- ${musica.artista} -- ${musica.genero}`);

}