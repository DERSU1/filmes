const apiKey = '0300410ecb7f23543503b0aef530399f';
const urlFilmesPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

fetch(urlFilmesPopulares)
    .then(response => response.json())
    .then(data => {
        const filmes = data.results;
        const listaFilmes = document.getElementById('lista-filmes');

        filmes.forEach(filme => {
            const filmeHTML = `
                <div class="filme">
                    <img src="https://www.themoviedb.org/talk/5f3ef4eec175b200365ee352" alt="${filme.title}">
                    <h3>${filme.title}</h3>
                </div>
            `;
            listaFilmes.innerHTML += filmeHTML;
        });
    });