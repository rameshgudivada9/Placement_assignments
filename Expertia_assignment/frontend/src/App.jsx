import {Routes,Route}from 'react-router-dom';
import { Jobdetails } from './components/JobDetails';
import { JobForm } from './components/JobForm';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Jobdetails/>}></Route>
        <Route path="/form" element={<JobForm/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
