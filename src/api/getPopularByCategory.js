import { BASE_URL, API_KEY } from '../constants';

export default async function getPopularByCategory(category) {
  try {
    const res = await fetch(
      `${BASE_URL}/${category}/popular?api_key=${API_KEY}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
