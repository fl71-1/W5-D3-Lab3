const url = "https://rickandmortyapi.com/api/character"
;
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);  

        const container = document.getElementById('characters');
        const characters = data.results.map(character => character);

        characters.forEach(character => {

            let div = document.createElement("div");
            let name = document.createElement("h2");
            let img = document.createElement("img");
            

            img.src = character.image;
            name.textContent = character.name;
            div.appendChild(name);

            div.appendChild(img);

            img.classList.add("characterImage");

            container.appendChild(div);
        });
    });
