import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProduct from './components/SearchProduct';
import ViewProducts from './components/ViewProducts';

function App() {
  return (
    <div>
      <AddProducts />
      <SearchProduct />
      <ViewProducts />

    </div>
  );
}

export default App;
