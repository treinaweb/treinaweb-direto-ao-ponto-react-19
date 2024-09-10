import { createContext } from "react";

async function fetchCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=15");
  return res.json();
}

export const CatsContext = createContext(fetchCats);