import './App.css'
import Cats from './components/Cats'
import { CatsContext } from './components/CatsContext';
import ParentComponent from './components/Ref';

function App() {
  return (
  <ParentComponent />
  );
}

export default App
