const getMovieList = (genre, setMovies) => {
	return fetch('https://api.sampleapis.com/movies/' + genre)
    .then((resp) => {
        switch (resp.status) {
          case 200:
            return resp.json();
          default:
            return null;
        }
      })
      .then((data) => {
        if (data) {
          setMovies(data);
        }
        else setMovies(null);
      })
	    .catch(error => {
        alert("Server communication error. Please, check internet connection.")
      })
}

export { getMovieList };