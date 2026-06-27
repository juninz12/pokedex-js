function buscar(){
    
    var poke = document.querySelector("#npokem")
    var pokem = Number.parseInt(poke.value)
    var respoke = document.querySelector("#rpoke")
    respoke.innerHTML = (buscarpokemon(pokem))
    console.log(buscarpokemon(pokem))


}
function buscarpokemon(npoke) {
   var pokemons = ["Bulbasaur","Ivysaur","Venossaur","Charmander"];
   if(npoke <1 || npoke>4){
   return("Pokémon não encontrado")
 }
  return pokemons [npoke-1]
}
 