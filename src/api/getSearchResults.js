import { BASE_URL, API_KEY } from '../constants';

export default async function getSearchResults(query) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
