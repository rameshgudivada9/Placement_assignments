import {Routes,Route}from 'react-router-dom';
import { Jobdetails } from './components/JobDetails';
import { JobForm } from './components/JobForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Jobdetails/>}></Route>
        <Route path="/form" element={<JobForm/>}></Route>
    </Routes>
    </div>
  );
}

export default App;