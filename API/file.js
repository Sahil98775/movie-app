async function fetchPopularMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4076ae03be82d1344d1193b36666567a"
    );

    const data = await res.json();

    return data.results; // 👈 movies array
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
const movies = await fetchPopularMovies();
console.log(movies);