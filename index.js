const input = document.querySelector("input");
const button = document.querySelector("button");
const characterContainer = document.querySelector(".character-container");

button.addEventListener('click', (e) => {
    e.preventDefault(); //Que no recargue en automático la página
})

function getCharacter(){
    fetch('https://rickandmortyapi.com/api/character/2')
    //.then(res => console.log(res)); Si recibe la información
    .then((res) => res.json())
    .then((data) => {
        createCharacter(data);
    });
}

function createCharacter(character) {
    const img = document.createElement("img");
    img.src = character.image;

    const h3 = document.createElement("h3");
    h3.textContent = character.name;

    const p = document.createElement("p");
    p.textContent = character.status;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    characterContainer.appendChild(div);
}

getCharacter();