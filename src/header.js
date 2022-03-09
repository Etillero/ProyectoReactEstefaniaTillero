import { useState } from "react";


function Header() {
  const [count, setCount] = useState(0);
  console.log(count);
   return (
<header>
   
<div className="container my-5">      
      <div className="card text-center my-5"> 
         <div className="card-body">
           <img src="/lossimpson.jpg"/>
             <h1> Titulo de mi App</h1>
             <div className="my-5">
                 <h2 className="my-5">{count}</h2>
                 <button className= "btn btn-success mx-3"  onClick={()=>setCount(count + 1)}> Aumento</button>
                 <button className= "btn btn-danger mx-3" onClick={()=>setCount(count - 1)}> Descuento</button>
                 <button className= "btn btn-secondary mx-3"onClick={()=>setCount(0)}> Reset</button>

             </div>
             
           </div> 
          </div>
         </div>
</header>

 );


}

export default Header;