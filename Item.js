import React from "react";
import'./Styles/estilo.css';
import './ItemList'

function Item({product}) {
    const{title,category,stocked,price}=product
    return(
        <div className="ItemC">
            <h4>{title}</h4>


        </div>


    )
   
    
}

export default Item
