import './App.css';
import { BasicUserCard } from './components/BasicUserCard';
import SearchAppBar from './components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <BasicUserCard/>
    </div>
  );
}

export default App;
