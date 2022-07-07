import './App.css';
import { BasicUserCard } from './components/BasicUserCard';
import Modal from './components/Modal';
import SearchAppBar from './components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <BasicUserCard><Modal/></BasicUserCard>
      <Modal/>
    </div>
  );
}

export default App;
