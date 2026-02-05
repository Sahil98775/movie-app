const API_KEY = "4076ae03be82d1344d1193b36666567a";
const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
export const NEW_RELES = "https://api.themoviedb.org/3/movie/upcoming";

export const getPopularMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("API returned " + res.status);
    const data = await res.json();
    return data?.results || [];
  } catch (error) {
    console.log("Error fetching popular movies:", error);
    return [];
  }
};
