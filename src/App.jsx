import './App.css'
import Cats from './components/Cats'
import { CatsContext } from './components/CatsContext';

function App() {
  return (
  <CatsContext.Provider value={CatsContext._currentValue}>
    <Cats />
  </CatsContext.Provider>
  );
}

export default App
