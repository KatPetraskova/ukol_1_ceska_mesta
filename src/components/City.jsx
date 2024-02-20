import React from "react";
import cities from '../cz-cities';

const City = (props) => {
    
    const {name, photo, population, area, district} = props;

    return (
        <div>
            {cities.map(city => (
                <div key={city.name} className="city">
                    <div>{`Název: `}{city.name}</div>
                    <div>{`Rozloha: `}{city.area}</div> 
                    <div>{`Populace: `}{city.population}</div> 
                    <div>{`Okres: `}{city.district}</div> 
                    <div>{`Foto: `}<img src={city.photo} /></div>
                </div>    
                ))}
        </div>
  )
};

  export default City;