import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductView from './Components/ProductView';
import DeleteItem from './Components/DeleteItem';
import EditItem from './Components/EditItem';
import LoginContent from './Components/LoginContent';
import Home from './Pages/Home';
import AllProductsPage from './Pages/AllProductsPage';
import CartPage from './Pages/CartPage';
import ProductViewPage from './Pages/ProductViewPage';
import DeletePage from './Pages/DeletePage';


function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/all" element={<AllProductsPage />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products/:productId" Component={ProductViewPage} />
          <Route path="/delete/:id" Component={DeletePage} />
          <Route path="/edit/:id" Component={EditItem} />
          <Route path="/sign" element={<LoginContent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
