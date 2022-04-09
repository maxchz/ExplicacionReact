import {Link} from 'react-router-dom';


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

// Este es un componente o funcion que se usa en el App.jsx, se lo exporta



function CardArctivos(props){
    return(
        <li className="contenedorTresActivos">
            <Link to='/Opex'>
                <div className="contenedorImagen">
                    <img src={props.imagen} alt={props.nombreActivo}/>
                </div>           
            </Link>    
            
            <span className="tipodeActivo">{props.nombreActivo}</span>

        </li>
    )

}

export default CardArctivos;
