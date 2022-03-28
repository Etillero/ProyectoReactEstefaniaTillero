import React from "react"; 'react'

import {BrowserRouter as Router, Routes, Route,Link
} from "react-router-dom";

import ItemCar from './components/Itemcar'



function Contacto(){
  return <h2>Contacto</h2>
}
export default function Navbar () {
  return(
    <Router>
    <div className="uk-position-relative">
    <nav className="uk-navbar-container" uk-navbar="dropbar: true">

        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>

        </div>

        <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
                <li>
                    <span uk-icon="cart"></span>
                </li>
            </ul>

        </div>
    </nav>

    <div className="uk-navbar-dropbar"></div>
    <Routes>
      <Route path="/Contacto" element={<Contacto/>} />
      <Route path="/item" element={<ItemCar/>}/>
    </Routes>
  </div>
</Router>
  )

}

