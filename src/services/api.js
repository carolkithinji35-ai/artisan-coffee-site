const BASE_URL =
  "https://coffee-api-4284.onrender.com/coffees";

export function getCoffees() {
  return fetch(BASE_URL).then((res) => res.json());
}
