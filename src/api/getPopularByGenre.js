import { BASE_URL, API_KEY } from '../constants';

export default async function getPopularByGenre(genreId) {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
