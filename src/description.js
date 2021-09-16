import './App.css';
import Sku from './sku';

function Description() {
  return (
    <div classDescription="App">
      <header classDescription="App-header">
       <img src="https://http2.mlstatic.com/D_NQ_NP_648063-MLA43691191417_102020-O.webp" alt="Girl in a jacket" width="500" height="100%" />
       <Sku/>
        <p>
        - Anteojos de sol Lentes Infinit Moscow

          Las lentes de sol INFINIT de alta protección están pensadas para realizar actividades al aire libre.

          Los cristales lentes de sol con filtro UV400 son capaces de bloquear el 100% los rayos solares UV400A y UV400B.

          Nuestro material orgánico de Policarbonato es de altísima resistencia a los impactos evitando roturas o accidentes oculares.

          - Los colores Mate pueden tener pequeños brillados que se ocasionan por la propia manipulación entre las piezas de producción. Esta superficie mate sutilmente aterciopelada debe tratarse con cuidado para evitar los brillados en la superficie. Los mismos no constituyen un defecto de fabricación.

          - Medidas:
          140mm (Ancho)
          140mm (Largo patilla)
          54mm (alto)
          18mm ( puente)
        </p>
      </header>
    </div>
  );
}

export default Description;