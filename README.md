
# Movie Search App


## Overview

The **Movie Search App** is a web application that allows users to search for movies and TV shows, retrieving detailed information such as plot summaries, ratings, and cast details. This app uses the [OMDb API](http://www.omdbapi.com/) to fetch movie and TV show data based on the user's input.

## Features

- **Search for Movies and TV Shows:** Enter a title to search for detailed information about any movie or TV show.
- **Detailed Information Display:** View plot summaries, genres, director names, cast, IMDb ratings, and more.
- **User-Friendly Interface:** Simple and intuitive design for easy navigation and information retrieval.

## Demo

[Live Demo](https://getmoviedetailsapp.netlify.app/)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [OMDb API](http://www.omdbapi.com/)

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Web browser (Chrome, Firefox, etc.)
- Code editor (VSCode, Sublime Text, etc.)
- OMDb API key (Sign up at [OMDb API](http://www.omdbapi.com/apikey.aspx) to get a free API key)


### Setup the API Key

1. Replace `'YOUR_OMDB_API_KEY'` in the `script.js` file with your actual OMDb API key:
   ```javascript
   const apiKey = 'YOUR_OMDB_API_KEY';
   ```

## Usage

1. **Search for a Movie or TV Show:**
   - Enter the title of a movie or TV show in the input field.
   - Click the "Search" button to fetch information about the entered title.

2. **View Movie or TV Show Details:**
   - The app displays details such as the title, year of release, poster, genre, director, cast, plot, and IMDb rating.



## How It Works

1. **HTML (`index.html`):** Provides the structure for the input field, search button, and a container for displaying movie information.
2. **CSS (`index.css`):** Styles the app, creating a clean and modern user interface.
3. **JavaScript (`script.js`):** Manages API requests to the OMDb API and dynamically updates the webpage with the retrieved movie data.

## API Reference

- **OMDb API:** [http://www.omdbapi.com/](http://www.omdbapi.com/)
  - **Search for a movie or TV show:** `GET http://www.omdbapi.com/?t={title}&apikey={your_api_key}`
  - Replace `{title}` with the movie or TV show title and `{your_api_key}` with your API key.


## License

This project is licensed under the MIT License. 

## Acknowledgements

- [OMDb API](http://www.omdbapi.com/) for providing the data.
- [Unsplash](https://unsplash.com/) for placeholder images (if applicable).

## Contact

For questions or suggestions, feel free to contact:

- **A.Sathish Kumar** [sathishkumarannadurai12@gmail.com](mailto:sathishkumarannadurai12@gmail.com)
- **GitHub:** [A-SathishKumar](https://github.com/A-SathishKumar)
