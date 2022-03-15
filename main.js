const  Main = (props) =>{

 let contador = 0

 return(
  <main classname='container'>
      <h2>Bienvenida {props.nombre} {props.apellido}</h2>
   <p className="my-5"> Mi contador por consola ; {contador}</p>
   <button className= "btn btn-success mx-3" onClick={()=>{console.log("click")}}> aumentar</button>
  </main>

 );

}

export default Main;