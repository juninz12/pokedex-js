 var npoke = prompt("Digite o número do pokémon")
npoke = Number.parseInt(npoke)

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

console.log(buscarpokemon(npoke))
