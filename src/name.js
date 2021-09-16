import Amount from './Amount';
import './App.css';
import Description from './description';
import Price from './price';

function Name() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Nombre del producto: Lentes
         <Price/><Amount/>
        </p>
        <Description/>
      </header>
    </div>
    
    
  );
}

export default Name;