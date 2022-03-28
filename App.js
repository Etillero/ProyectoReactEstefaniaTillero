import './App.js';
import Navbar from './navbar';
import'./Styles/App.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import ItemCar from './components/Itemcar.js';
import Contador from './components/contador.js';
import Contacto from './contacto.js';

function App() {
    return(

       <> 
        <Navbar/>
        <Header/>
        <Main nombre='Estefania' apellido='Tillero'/>
        <Footer/>
        <ItemCar/>
        <Contador/>
        <Contacto/>
        </>
    );
    
}

export default App;