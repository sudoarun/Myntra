// import logo from './logo.svg';
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import Product from "./components/Product";
import { useState } from "react";

function PrivateRoute({ loggedIn, children }) {
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

function App() {
  const styles = {
    sectionMargin: {
      marginTop: "5rem",
    },
  };
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header />
      <div style={styles.sectionMargin}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<User setLoggedIn={setLoggedIn} />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute loggedIn={loggedIn}>
                <Checkout setLoggedIn={setLoggedIn} />
              </PrivateRoute>
            }
          />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
