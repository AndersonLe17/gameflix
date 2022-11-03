import './styles/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/category/:categoryName"} element={<Category />} />
          <Route path={"/product/:productId"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
