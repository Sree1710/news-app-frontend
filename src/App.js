import logo from './logo.svg';
import './App.css';
import ViewNews from './Components/ViewNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNews from './Components/AddNews';
import SearchNews from './Components/SearchNews';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AddNews/>}/>
        <Route path='/searchn' exact element={<SearchNews/>}/>
        <Route path='/viewn' exact element={<ViewNews/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
