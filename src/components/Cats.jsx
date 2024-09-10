import { Suspense, use } from 'react';

function Cats() {
  return (
    <div>
    <Suspense fallback={<h3>Carregando imagens...</h3>}>
      <ListCats />
    </Suspense>
    </div>
  )
}

async function fetchCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

function ListCats() {
  const cats = use(fetchCats());

  return (
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          <img src={cat.url} width={200}></img>
        </li>
      ))}
    </ul>
  )
}

export default Cats;
