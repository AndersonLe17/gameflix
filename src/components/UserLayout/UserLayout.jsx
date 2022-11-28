import logo from '../../logo.svg';
import {NavBar} from '../NavBar';
import {Footer} from '../Footer';

const UserLayout = ({children}) => {
  return (
    <div>
      <NavBar img={logo}/>
      {children}
      <Footer img={logo}/>
    </div>
  );
};

export default UserLayout;