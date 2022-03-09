import './App.js';
import Navbar from './navbar';
import'./Styles/estilo.css';
import Footer from './footer';
import Header from './header';
import Main from './main';

function App() {
    return(

        <>
        <Navbar/>
        <Header/>
        <Main nombre='Estefania' apellido='Tillero'/>
        <Footer/>
        
        </>
    );
    
}

export default App;