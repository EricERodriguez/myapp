import { useState } from 'react';
import './App.css';
import Sku from './sku';

//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function Description() {
  var [boolean, setBoolean] = useState(0);
  let gracias = ""
  if (boolean === true)  {
    gracias = "Gracias por su comprar"
  }
  return (
    <div classDescription="App">
      <header classDescription="App-header">
       <img src="https://http2.mlstatic.com/D_NQ_NP_648063-MLA43691191417_102020-O.webp" alt="Girl in a jacket" width="500" height="100%" />
       <Sku/>
       <button type="button" class="btn btn-primary" onClick={() => setBoolean(boolean = true )}>Comprar</button>
       <p>{gracias} </p>


       <div class="card bg-dark mb-3" >
          <div class="card-body">
            <h5 class="card-title">Anteojos de sol Lentes Infinit Moscow</h5>
            <h3 class="card-text">Las lentes de sol INFINIT de alta protección están pensadas para realizar actividades al aire libre.

              Los cristales lentes de sol con filtro UV400 son capaces de bloquear el 100% los rayos solares UV400A y UV400B.

              Nuestro material orgánico de Policarbonato es de altísima resistencia a los impactos evitando roturas o accidentes oculares.</h3>
              <h6>
              Los colores Mate pueden tener pequeños brillados que se ocasionan por la propia manipulación entre las piezas de producción. Esta superficie mate sutilmente aterciopelada debe tratarse con cuidado para evitar los brillados en la superficie. Los mismos no constituyen un defecto de fabricación.
              </h6>
              <h5> Medidas: </h5>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item list-group-item-dark">140mm (Ancho)</li>
                <li class="list-group-item list-group-item-dark">140mm (Largo patilla)</li>
                <li class="list-group-item list-group-item-dark">54mm (alto)</li>
                <li class="list-group-item list-group-item-dark">18mm ( puente)</li>
              </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Description;