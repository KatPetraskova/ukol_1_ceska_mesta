import { createRoot } from 'react-dom/client';
import './global.css';
import { cities } from './cz-cities';

const App = () => {
  
  const City = cities.map(city => 
    (<div key={city.name} className="city"><p><h3>{`Název: `}{city.name}</h3></p> 
    <p>{`Rozloha: `}{city.area}</p> <p>{`Populace: `}{city.population}</p> <p>{`Okres: `}{city.district}</p> <p>{`Foto: `}<img src={city.photo} /></p></div>))

  return (
    <>
      {City}
    </>
  );
};


createRoot(
  document.querySelector('#app'),
).render(<App />);
