import logo from './logo.svg';
import './styles/App.scss';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { HeaderInfo } from './components/HeaderInfo';
import { ItemListContainer } from './components/ItemListContainer';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar img={logo}/>
      <Banner />
      <main>
        <HeaderInfo/>
        <ItemListContainer greeting="BIENVENIDO A GAMEFLIX"/>
      </main>
      <Footer img={logo}/>
    </div>
  );
}

export default App;
