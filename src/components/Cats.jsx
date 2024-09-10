import { Suspense, use } from 'react';
import { CatsContext } from './CatsContext';

function Cats() {
  return (
    <div>
      <Suspense fallback={<h3>Carregando Imagens...</h3>}>
        <ListCats />
        <CatCount />
      </Suspense>
    </div>
  )
}

function ListCats() {
  const fetchCats = use(CatsContext);
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

function CatCount() {
  const fetchCats = use(CatsContext);
  const cats = use(fetchCats());

  return <p>Total de Gatos: {cats.length}</p>
}

export default Cats;
