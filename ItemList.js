import React from "react";
import'./Styles/estilo.css';
import Item from "./Item";

function ItemList({Phones}) {
    return(
       <div className="ItemContainer">
        {Phones.map((product) => (<Item key={product.id} product={product}/>))}
        </div>
    )
   
    
}

export default ItemList