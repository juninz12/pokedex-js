function buscar(){
    
    var poke = document.querySelector("#npokem")
    var pokem = Number.parseInt(poke.value)
    var respoke = document.querySelector("#rpoke")
    respoke.innerHTML = (buscarpokemon(pokem))
    console.log(buscarpokemon(pokem))


}
function buscarpokemon(npoke) {
    switch (npoke) {
        case 1:
            return "Bulbasaur"
        case 2:
            return "Ivysaur"
        case 3:
            return "Venossaur"
        case 4:
            return "Charmander"
        default:
            return "Pokémon não encontrado"
    }
}


