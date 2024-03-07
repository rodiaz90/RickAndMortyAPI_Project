let characters = document.querySelector("#characters");

fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.results);

        data.results.map((item) => {
            const content = document.createElement("div");
            content.innerHTML = `
                <div class = "contenedor">
                <h4>Nombre: ${item.name}</h4>
                <h4>Sexo: ${item.gender}</h4>
                <h4>Estatus: ${item.status}</h4>
                <img class= "imagen" src="${item.image}">
                </div>
            `;

            characters.append(content);
        });
    });
    