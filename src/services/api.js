const BASE_URL =
  "http://localhost:3001/coffees";

export function getCoffees() {
  return fetch(BASE_URL).then((res) => res.json());
}
