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
                <li className="contenedorTresActivos">
                    <div className="contenedorImagen">
                        <img src={on} alt="Imagen de obligaciones negociables"/>
                    </div>
                    <span className="tipodeActivo">Obligaciones Negociables</span>
                </li>
                
                <li className="contenedorTresActivos">
                    <div className="contenedorImagen">
                        <img src={stock} alt="Imagen de acciones"/>
                    </div>
                    <span className="tipodeActivo">Acciones</span>

                </li>

                <li className="contenedorTresActivos">
                    <div className="contenedorImagen">
                        <img src={opex} alt="Imgagen de opciones"/>
                    </div>
                    <span className="tipodeActivo">Opciones</span>

                </li>


            </ul>
        </section>
        <section></section>

    </main>

    <footer>

    </footer>
     
    </div>
  );
}

export default App;
