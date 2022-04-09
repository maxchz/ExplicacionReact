import CardArctivos from "components/CardActivos";
// import logo from 'media/logo.jpg';
import logonavbar from 'media/favicon.png';
import on from 'media/on.jpg';
import stock from 'media/stock1.jpg';
import opex from 'media/opex.jpg';

function Index (){
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

export default Index;