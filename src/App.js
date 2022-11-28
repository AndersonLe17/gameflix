import './styles/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';
import { Cart } from './pages/Cart';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/category/:categoryName"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
            <Route path={"/cart"} element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
