// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';


function App() {
  const styles = {
    sectionMargin: {
      marginTop: "5rem"
    }
  }
  return (
    <div>
      <Header />
      <div style={styles.sectionMargin}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
