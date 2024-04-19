import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProduct from './components/SearchProduct';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductHome from './components/ProductHome';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductHome/>}/>
        <Route path="/search" element={<SearchProduct/>}/>
        <Route path="/add" element={<AddProducts/>}/>
        <Route path="/view" element={<ViewProducts/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
