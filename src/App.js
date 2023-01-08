import './App.css';
import DogListPage from './DogListPage.js';
import DogSinglePage from './DogSinglePage.js';
import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>    
      <Routes>  
        <Route path="/" element={<DogListPage />} />     
        <Route path="/dogs/:dogById" element={<DogSinglePage />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
