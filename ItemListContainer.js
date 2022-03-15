import { useEffect,useState} from "react";
import ItemList from "./ItemList";
import'./Styles/estilo.css';




const ProductPhones = [
  {category: 'Electronics', price: '$99.99', stocked: true, title: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, title: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, title: 'Nexus 7'}
];


    function ItemListContainer ({product}) {
          const [Phones,setPhones] = useState ([])
          const [loading,setLoading] = useState (false)
           

          useEffect(() => {
          const promise = new Promise ((res,rej) => {
                  setTimeout (() => {
                      res(ProductPhones)
                  }, 2000);
              });
              

          promise.then((res)=>{
              setPhones(res);
              setLoading(true);
          }).catch((err) => console.log(err));
           }, []);


           if (!loading) {
               return( 
               <h4> loading..</h4>
      
               )
           }
           else{
             return(
             <div className="itemContainer"> 
             <ItemList Phones = {Phones}/>
             </div> 
        

             )}
            }

            export default ItemListContainer