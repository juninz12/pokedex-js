var pokemons = [
  { numero: 1, nome: "Bulbasaur", tipos: ["Grama", "Veneno"] },
  { numero: 2, nome: "Ivysaur", tipos: ["Grama", "Veneno"] },
  { numero: 3, nome: "Venusaur", tipos: ["Grama", "Veneno"] },
  { numero: 4, nome: "Charmander", tipos: ["Fogo"] },
  { numero: 5, nome: "Charmeleon", tipos: ["Fogo"] },
  { numero: 6, nome: "Charizard", tipos: ["Fogo", "Voador"] },
  { numero: 7, nome: "Squirtle", tipos: ["Água"] },
  { numero: 8, nome: "Wartortle", tipos: ["Água"] },
  { numero: 9, nome: "Blastoise", tipos: ["Água"] },
  { numero: 10, nome: "Caterpie", tipos: ["Inseto"] },
  { numero: 11, nome: "Metapod", tipos: ["Inseto"] },
  { numero: 12, nome: "Butterfree", tipos: ["Inseto", "Voador"] },
  { numero: 13, nome: "Weedle", tipos: ["Inseto", "Veneno"] },
  { numero: 14, nome: "Kakuna", tipos: ["Inseto", "Veneno"] },
  { numero: 15, nome: "Beedrill", tipos: ["Inseto", "Veneno"] },
  { numero: 16, nome: "Pidgey", tipos: ["Normal", "Voador"] },
  { numero: 17, nome: "Pidgeotto", tipos: ["Normal", "Voador"] },
  { numero: 18, nome: "Pidgeot", tipos: ["Normal", "Voador"] },
  { numero: 19, nome: "Rattata", tipos: ["Normal"] },
  { numero: 20, nome: "Raticate", tipos: ["Normal"] },
  { numero: 21, nome: "Spearow", tipos: ["Normal", "Voador"] },
  { numero: 22, nome: "Fearow", tipos: ["Normal", "Voador"] },
  { numero: 23, nome: "Ekans", tipos: ["Veneno"] },
  { numero: 24, nome: "Arbok", tipos: ["Veneno"] },
  { numero: 25, nome: "Pikachu", tipos: ["Elétrico"] },
  { numero: 26, nome: "Raichu", tipos: ["Elétrico"] },
  { numero: 27, nome: "Sandshrew", tipos: ["Terra"] },
  { numero: 28, nome: "Sandslash", tipos: ["Terra"] },
  { numero: 29, nome: "Nidoran♀", tipos: ["Veneno"] },
  { numero: 30, nome: "Nidorina", tipos: ["Veneno"] },
  { numero: 31, nome: "Nidoqueen", tipos: ["Veneno", "Terra"] },
  { numero: 32, nome: "Nidoran♂", tipos: ["Veneno"] },
  { numero: 33, nome: "Nidorino", tipos: ["Veneno"] },
  { numero: 34, nome: "Nidoking", tipos: ["Veneno", "Terra"] },
  { numero: 35, nome: "Clefairy", tipos: ["Fada"] },
  { numero: 36, nome: "Clefable", tipos: ["Fada"] },
  { numero: 37, nome: "Vulpix", tipos: ["Fogo"] },
  { numero: 38, nome: "Ninetales", tipos: ["Fogo"] },
  { numero: 39, nome: "Jigglypuff", tipos: ["Normal", "Fada"] },
  { numero: 40, nome: "Wigglytuff", tipos: ["Normal", "Fada"] },
  { numero: 41, nome: "Zubat", tipos: ["Veneno", "Voador"] },
  { numero: 42, nome: "Golbat", tipos: ["Veneno", "Voador"] },
  { numero: 43, nome: "Oddish", tipos: ["Grama", "Veneno"] },
  { numero: 44, nome: "Gloom", tipos: ["Grama", "Veneno"] },
  { numero: 45, nome: "Vileplume", tipos: ["Grama", "Veneno"] },
  { numero: 46, nome: "Paras", tipos: ["Inseto", "Grama"] },
  { numero: 47, nome: "Parasect", tipos: ["Inseto", "Grama"] },
  { numero: 48, nome: "Venonat", tipos: ["Inseto", "Veneno"] },
  { numero: 49, nome: "Venomoth", tipos: ["Inseto", "Veneno"] },
  { numero: 50, nome: "Diglett", tipos: ["Terra"] },
  { numero: 51, nome: "Dugtrio", tipos: ["Terra"] },
  { numero: 52, nome: "Meowth", tipos: ["Normal"] },
  { numero: 53, nome: "Persian", tipos: ["Normal"] },
  { numero: 54, nome: "Psyduck", tipos: ["Água"] },
  { numero: 55, nome: "Golduck", tipos: ["Água"] },
  { numero: 56, nome: "Mankey", tipos: ["Lutador"] },
  { numero: 57, nome: "Primeape", tipos: ["Lutador"] },
  { numero: 58, nome: "Growlithe", tipos: ["Fogo"] },
  { numero: 59, nome: "Arcanine", tipos: ["Fogo"] },
  { numero: 60, nome: "Poliwag", tipos: ["Água"] },
  { numero: 61, nome: "Poliwhirl", tipos: ["Água"] },
  { numero: 62, nome: "Poliwrath", tipos: ["Água", "Lutador"] },
  { numero: 63, nome: "Abra", tipos: ["Psíquico"] },
  { numero: 64, nome: "Kadabra", tipos: ["Psíquico"] },
  { numero: 65, nome: "Alakazam", tipos: ["Psíquico"] },
  { numero: 66, nome: "Machop", tipos: ["Lutador"] },
  { numero: 67, nome: "Machoke", tipos: ["Lutador"] },
  { numero: 68, nome: "Machamp", tipos: ["Lutador"] },
  { numero: 69, nome: "Bellsprout", tipos: ["Grama", "Veneno"] },
  { numero: 70, nome: "Weepinbell", tipos: ["Grama", "Veneno"] },
  { numero: 71, nome: "Victreebel", tipos: ["Grama", "Veneno"] },
  { numero: 72, nome: "Tentacool", tipos: ["Água", "Veneno"] },
  { numero: 73, nome: "Tentacruel", tipos: ["Água", "Veneno"] },
  { numero: 74, nome: "Geodude", tipos: ["Pedra", "Terra"] },
  { numero: 75, nome: "Graveler", tipos: ["Pedra", "Terra"] },
  { numero: 76, nome: "Golem", tipos: ["Pedra", "Terra"] },
  { numero: 77, nome: "Ponyta", tipos: ["Fogo"] },
  { numero: 78, nome: "Rapidash", tipos: ["Fogo"] },
  { numero: 79, nome: "Slowpoke", tipos: ["Água", "Psíquico"] },
  { numero: 80, nome: "Slowbro", tipos: ["Água", "Psíquico"] },
  { numero: 81, nome: "Magnemite", tipos: ["Elétrico", "Aço"] },
  { numero: 82, nome: "Magneton", tipos: ["Elétrico", "Aço"] },
  { numero: 83, nome: "Farfetch'd", tipos: ["Normal", "Voador"] },
  { numero: 84, nome: "Doduo", tipos: ["Normal", "Voador"] },
  { numero: 85, nome: "Dodrio", tipos: ["Normal", "Voador"] },
  { numero: 86, nome: "Seel", tipos: ["Água"] },
  { numero: 87, nome: "Dewgong", tipos: ["Água", "Gelo"] },
  { numero: 88, nome: "Grimer", tipos: ["Veneno"] },
  { numero: 89, nome: "Muk", tipos: ["Veneno"] },
  { numero: 90, nome: "Shellder", tipos: ["Água"] },
  { numero: 91, nome: "Cloyster", tipos: ["Água", "Gelo"] },
  { numero: 92, nome: "Gastly", tipos: ["Fantasma", "Veneno"] },
  { numero: 93, nome: "Haunter", tipos: ["Fantasma", "Veneno"] },
  { numero: 94, nome: "Gengar", tipos: ["Fantasma", "Veneno"] },
  { numero: 95, nome: "Onix", tipos: ["Pedra", "Terra"] },
  { numero: 96, nome: "Drowzee", tipos: ["Psíquico"] },
  { numero: 97, nome: "Hypno", tipos: ["Psíquico"] },
  { numero: 98, nome: "Krabby", tipos: ["Água"] },
  { numero: 99, nome: "Kingler", tipos: ["Água"] },
  { numero: 100, nome: "Voltorb", tipos: ["Elétrico"] },
  { numero: 101, nome: "Electrode", tipos: ["Elétrico"] },
  { numero: 102, nome: "Exeggcute", tipos: ["Grama", "Psíquico"] },
  { numero: 103, nome: "Exeggutor", tipos: ["Grama", "Psíquico"] },
  { numero: 104, nome: "Cubone", tipos: ["Terra"] },
  { numero: 105, nome: "Marowak", tipos: ["Terra"] },
  { numero: 106, nome: "Hitmonlee", tipos: ["Lutador"] },
  { numero: 107, nome: "Hitmonchan", tipos: ["Lutador"] },
  { numero: 108, nome: "Lickitung", tipos: ["Normal"] },
  { numero: 109, nome: "Koffing", tipos: ["Veneno"] },
  { numero: 110, nome: "Weezing", tipos: ["Veneno"] },
  { numero: 111, nome: "Rhyhorn", tipos: ["Terra", "Pedra"] },
  { numero: 112, nome: "Rhydon", tipos: ["Terra", "Pedra"] },
  { numero: 113, nome: "Chansey", tipos: ["Normal"] },
  { numero: 114, nome: "Tangela", tipos: ["Grama"] },
  { numero: 115, nome: "Kangaskhan", tipos: ["Normal"] },
  { numero: 116, nome: "Horsea", tipos: ["Água"] },
  { numero: 117, nome: "Seadra", tipos: ["Água"] },
  { numero: 118, nome: "Goldeen", tipos: ["Água"] },
  { numero: 119, nome: "Seaking", tipos: ["Água"] },
  { numero: 120, nome: "Staryu", tipos: ["Água"] },
  { numero: 121, nome: "Starmie", tipos: ["Água", "Psíquico"] },
  { numero: 122, nome: "Mr. Mime", tipos: ["Psíquico", "Fada"] },
  { numero: 123, nome: "Scyther", tipos: ["Inseto", "Voador"] },
  { numero: 124, nome: "Jynx", tipos: ["Gelo", "Psíquico"] },
  { numero: 125, nome: "Electabuzz", tipos: ["Elétrico"] },
  { numero: 126, nome: "Magmar", tipos: ["Fogo"] },
  { numero: 127, nome: "Pinsir", tipos: ["Inseto"] },
  { numero: 128, nome: "Tauros", tipos: ["Normal"] },
  { numero: 129, nome: "Magikarp", tipos: ["Água"] },
  { numero: 130, nome: "Gyarados", tipos: ["Água", "Voador"] },
  { numero: 131, nome: "Lapras", tipos: ["Água", "Gelo"] },
  { numero: 132, nome: "Ditto", tipos: ["Normal"] },
  { numero: 133, nome: "Eevee", tipos: ["Normal"] },
  { numero: 134, nome: "Vaporeon", tipos: ["Água"] },
  { numero: 135, nome: "Jolteon", tipos: ["Elétrico"] },
  { numero: 136, nome: "Flareon", tipos: ["Fogo"] },
  { numero: 137, nome: "Porygon", tipos: ["Normal"] },
  { numero: 138, nome: "Omanyte", tipos: ["Pedra", "Água"] },
  { numero: 139, nome: "Omastar", tipos: ["Pedra", "Água"] },
  { numero: 140, nome: "Kabuto", tipos: ["Pedra", "Água"] },
  { numero: 141, nome: "Kabutops", tipos: ["Pedra", "Água"] },
  { numero: 142, nome: "Aerodactyl", tipos: ["Pedra", "Voador"] },
  { numero: 143, nome: "Snorlax", tipos: ["Normal"] },
  { numero: 144, nome: "Articuno", tipos: ["Gelo", "Voador"] },
  { numero: 145, nome: "Zapdos", tipos: ["Elétrico", "Voador"] },
  { numero: 146, nome: "Moltres", tipos: ["Fogo", "Voador"] },
  { numero: 147, nome: "Dratini", tipos: ["Dragão"] },
  { numero: 148, nome: "Dragonair", tipos: ["Dragão"] },
  { numero: 149, nome: "Dragonite", tipos: ["Dragão", "Voador"] },
  { numero: 150, nome: "Mewtwo", tipos: ["Psíquico"] },
  { numero: 151, nome: "Mew", tipos: ["Psíquico"] },
];
function buscar() {
  var poke = document.querySelector("#npokem");
  var pokeNumero = Number.parseInt(poke.value);
  var respoke = document.querySelector("#rpoke");
  var resultado = "";

  if (isNaN(pokeNumero)) {
    resultado = buscarPorNome(poke.value);
    respoke.innerHTML = resultado;
  } else {
    resultado = buscarpokemon(pokeNumero);
    respoke.innerHTML = resultado;
  }
}

function buscarpokemon(npoke) {
  if (npoke < 1 || npoke > pokemons.length) {
    return "Pokémon não encontrado";
  }
  return `${pokemons[npoke - 1].numero} ${pokemons[npoke - 1].nome} ${pokemons[npoke - 1].tipos}`;
}

function listarPokemons(evento) {
  var listaTexto = "";
  var respoke = document.querySelector("#rpoke");
  evento.preventDefault();
  for (let i = 0; i < pokemons.length; i++) {
    listaTexto += `${pokemons[i].numero} ${pokemons[i].nome} ${pokemons[i].tipos}<br>`;
  }
  respoke.innerHTML = listaTexto;
  function buscarPorNome(pokenome) {
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].nome.toLowerCase() === pokenome.toLowerCase()) {
        return `${pokemons[i].numero} ${pokemons[i].nome} ${pokemons[i].tipos}`;
      }
    }
    return "Pokémon não encontrado";
  }

  var input = document.querySelector("#npokem");
  input.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      buscar();
    }
  });
}
