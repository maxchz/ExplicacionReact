import logo from './logo.svg';
import './styles/App.css';
import logonavbar from './media/favicon.png';
import on from './media/on.jpg';
import stock from './media/stock1.jpg';
import opex from './media/opex.jpg';



function App() {
  return (
    <div className="App">
        <header>
            <div></div>
        <ul className="navbar">
            <li>
                <img src={logonavbar} alt="logo" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar activo"/>
                    <i className="fa-solid fa-magnifying-glass lupa"></i>
                </div>
            </li>
            
            <li>
                <button className="button secundaryButton">Login</button>
            </li>                     

            <li>
                <button className="button mainButton">Registro</button>
            </li>


        </ul>


        </header>

        <main>
        <section>
            <h1 className="tituloPagina">Activos Financieros</h1>
            <ul className="contenedorActivos">                             

                <CardArctivos nombreActivo="Obligaciones Negociables" imagen={on} />
                <CardArctivos nombreActivo="Acciones" imagen={stock} />
                <CardArctivos nombreActivo="Opciones" imagen={opex} />


            </ul>
        </section>
        <section></section>

        </main>

        <footer>
            

        </footer>
    </div>
  );
}


// function CardArctivos({nombreActivo, imagen}){
//     return(
//         <li className="contenedorTresActivos">
//             <div className="contenedorImagen">
//                 <img src={imagen} alt={nombreActivo}/>
//             </div>
//             <span className="tipodeActivo">{nombreActivo}</span>

//         </li>
//     )

// }
function CardArctivos(props){
    return(
        <li className="contenedorTresActivos">
            <div className="contenedorImagen">
                <img src={props.imagen} alt={props.nombreActivo}/>
            </div>
            <span className="tipodeActivo">{props.nombreActivo}</span>

        </li>
    )

}

export default App;
