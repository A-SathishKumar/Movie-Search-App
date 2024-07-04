document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'fce3b886'; // Replace with your OMDb API key
    const searchBtn = document.getElementById('searchBtn');
    const movieInput = document.getElementById('movieInput');
    const movieInfoDiv = document.getElementById('movieInfo');

    searchBtn.addEventListener('click', () => {
        const movieTitle = movieInput.value;
        if (movieTitle) {
            const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "True") {
                        movieInfoDiv.innerHTML = `
                            <h2>${data.Title} (${data.Year})</h2>
                            <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/300x450?text=No+Image+Available'}" alt="${data.Title} Poster">
                            <p><strong>Releaded: </strong> ${data.Released}</p>
                            <p><strong>Genre:</strong> ${data.Genre}</p>
                            <p><strong> Runtime: </strong>${data.Runtime}</p>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Actors:</strong> ${data.Actors}</p>
                            <p><strong>Writers:</strong> ${data.Writer}</p>
                            <p><strong>Language:</strong> ${data.Language}</p>
                            <p><strong>Plot:</strong> ${data.Plot}</p>
                            <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                            <p><strong>Box Office:</strong> ${data.BoxOffice}</p>
                        `;
                    } else {
                        movieInfoDiv.innerHTML = `<p>Movie not found. Please try another title.</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching movie data:', error);
                    movieInfoDiv.innerHTML = `<p>Error fetching movie data. Please try again.</p>`;
                });
        } else {
            movieInfoDiv.innerHTML = `<p>Please enter a movie or TV show title.</p>`;
        }
    });
});
