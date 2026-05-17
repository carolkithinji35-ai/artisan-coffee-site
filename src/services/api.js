const BASE_URL =
  "https://my-json-server.typicode.com/carolkithinji35-ai/coffee.api/coffees";

export function getCoffees() {
  return fetch(BASE_URL).then((res) => res.json());
}
