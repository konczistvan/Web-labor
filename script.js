const STAR_WARS_API_URL = "https://swapi.dev/api/people/";

document.getElementById("fetchButton").addEventListener("click", function () {
  fetchCharacters();
});

const fetchCharacters = () => {
  const list = document.getElementById("characterList");
  fetch(STAR_WARS_API_URL)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        const li = document.createElement("li");
        li.textContent = data.results[i].name;
        
        const ul = document.createElement("ul");
        for(let j=0; j < data.results[i].films.length; j++) {
          const filmLi = document.createElement("li");
          filmLi.textContent = data.results[i].films[j];
          fetch(data.results[i].films[j])
            .then((response) => response.json())
            .then((filmData) => {
              filmLi.textContent = filmData.title;
            });
          ul.appendChild(filmLi);
        }

        li.appendChild(ul);
        list.appendChild(li);
      }
    });
};
