
import Navbar from './navbar';
import'./Styles/estilo.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from './ItemListContainer';
import ItemList from './ItemList';
import Item from './Item';



function App() {
    return(

        <>
        <Navbar/>
        <Header/>
        <Main nombre='Estefania' apellido='Tillero'/>
        <Footer/>
        <ItemListContainer/>
        <ItemList/>
        <Item/>
        </>
    );
    
}

export default App;