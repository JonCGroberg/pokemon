const pokemonTypes = {
    fire: "#FFA07A",
    grass: "#89C289",
    electric: "#FFF577",
    water: "#B0E0E6",
    ground: "#F5DEB3",
    rock: "#D3D3D3",
    fairy: "#FFDAB9",
    poison: "#DDA0DD",
    bug: "#CCFFCC",
    dragon: "#E6E6FA",
    psychic: "#FFB6C1",
    flying: "#B3DBFF",
    fighting: "#CD853F",
    normal: "#D3D3D3",
    ghost: "#BFBFFF",
    dark: "#696969",
    steel: "#B0C4DE",
    ice: "#B3FFFF",
    shadow: "#696969",
};

fetch("https://pokeapi.co/api/v2/type")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const types = data.results;
    const sort = document.getElementById("form");
    types.forEach((type) => {
      let typeCheckbox = document.createElement("span");
      typeCheckbox.classList.add("form-check");
      typeCheckbox.style.backgroundColor = pokemonTypes[type.name];
    //   typeCheckbox.style.borderColor = pokemonTypes[type.name];
      typeCheckbox.innerHTML = `
            <input
            class="form-check-input"
            type="checkbox"
            id="${type.name}"
            value="${type.name}"
            />
            <label class="form-check-label" for="${type.name}">${type.name}</label>
        `;
      sort.appendChild(typeCheckbox);
    });
  });
