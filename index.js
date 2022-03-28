import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './navbar'
import Footer from './footer.js';
import Home from './Home';
import Header from './header';
import Main from './main';

ReactDOM.render(
  
  <div className="App">
    <div className="Container">
      <Navbar />
      <Main />
      <App />
      <Footer />
      <Home/>
      <Header/>
    </div>
  </div>,
  

  document.getElementById('root')
);

