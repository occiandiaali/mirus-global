import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => document.querySelector(".sidebar").classList.add("open");
  const closeMenu = () => document.querySelector(".sidebar").classList.remove("open");
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">mirus global</Link>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>

      {/* side menu */}
      <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li><a href="index.html">Shoes</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>
          
        </div>
      </main>
      <footer className="footer">All rights reserved &copy; 2020</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
